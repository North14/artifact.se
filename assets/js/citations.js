/**
 * Semantic Scholar Citation Counter
 * Fetches citation counts for academic publications dynamically
 */

class CitationFetcher {
  constructor() {
    this.baseUrl = 'https://api.semanticscholar.org/graph/v1/paper/search';
    this.cache = new Map();
    this.requestDelay = 1000; // 1 second between requests to respect rate limits
  }

  /**
   * Search for a paper by title and author
   */
  async searchPaper(title, authorName) {
    const cacheKey = `${title}-${authorName}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // Encode the search query
      const query = `title:"${title}" author:"${authorName}"`;
      const encodedQuery = encodeURIComponent(query);

      const url = `${this.baseUrl}?query=${encodedQuery}&fields=title,citationCount,year,authors&limit=1`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const result = {
          citationCount: data.data[0].citationCount || 0,
          found: true
        };
        this.cache.set(cacheKey, result);
        return result;
      }

      // Not found
      const notFound = { citationCount: 0, found: false };
      this.cache.set(cacheKey, notFound);
      return notFound;

    } catch (error) {
      console.error(`Error fetching citations for "${title}":`, error);
      return { citationCount: 0, found: false, error: true };
    }
  }

  /**
   * Fetch citations with delay to respect rate limits
   */
  async fetchWithDelay(title, authorName, delay = 0) {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    return this.searchPaper(title, authorName);
  }
}

// Initialize citation fetcher
const citationFetcher = new CitationFetcher();

/**
 * Update citation counts on the academia page
 */
async function updateCitationCounts() {
  const cards = document.querySelectorAll('[data-publication-title]');

  if (cards.length === 0) {
    return;
  }

  // Process each card sequentially with delays
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.getAttribute('data-publication-title');
    const author = card.getAttribute('data-publication-author');
    const citationElement = card.querySelector('.citation-count');

    if (!citationElement) {
      continue;
    }

    // Show loading state
    citationElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    // Fetch with delay (except for first request)
    const delay = i * citationFetcher.requestDelay;
    const result = await citationFetcher.fetchWithDelay(title, author, delay);

    // Update UI
    if (result.found) {
      citationElement.innerHTML = `<i class="fas fa-quote-right"></i> <strong>${result.citationCount}</strong> citation${result.citationCount !== 1 ? 's' : ''}`;
      citationElement.classList.add('text-success');
    } else if (result.error) {
      citationElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error loading';
      citationElement.classList.add('text-danger');
    } else {
      citationElement.innerHTML = '<i class="fas fa-info-circle"></i> Not found in Semantic Scholar';
      citationElement.classList.add('text-muted');
    }
  }
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCitationCounts);
} else {
  updateCitationCounts();
}
