# Artifact.se - Personal Project Blog

Welcome to the repository for **Artifact.se**, a Jekyll-powered blog showcasing my passion for knifemaking, crafts, and academic achievements. This site serves as a portfolio to document my creative projects and scholarly milestones.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [TODO List](#todo-list)
- [Contributing](#contributing)
- [License](#license)

## About
Artifact.se is a personal blog dedicated to sharing my work in knifemaking, crafting unique items, and celebrating academic accomplishments. Built with Jekyll, the site is lightweight, SEO-friendly, and designed to highlight detailed project write-ups and research milestones.

## Features
- **Knifemaking Portfolio**: Dedicated section for knives (e.g., Masur Moose Cai Dao, Nordic Hunter) with detailed build logs and images.
- **Craft Projects**: Posts on unique crafts like the Japanese tea table and deer antler letter opener.
- **Academic Achievements**: Documentation of research and publications in the Academia section.
- **Responsive Design**: Bootstrap-powered layout for mobile and desktop compatibility.
- **Search Functionality**: Integrated Lunr.js for site-wide search.
- **Social Integration**: Tracking and sharing features via included scripts.

## Setup
To run the blog locally, follow these steps:

### Prerequisites
- Ruby (>= 3.0.0)
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)
- Node.js and npm (for front-end dependencies like Bootstrap and jQuery)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/artifact.se.git
   ```
2. Navigate to the project directory:
   ```bash
   cd artifact.se
   ```
3. Install Ruby dependencies:
   ```bash
   bundle install
   ```
4. Install Node.js dependencies:
   ```bash
   npm install
   ```
5. Run the Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```
6. Open your browser and visit `http://localhost:4000` to view the site.

## Usage
- **Adding Posts**: Create new Markdown files in the `_posts` directory with the format `YYYY-MM-DD-title.md`. Use front matter to specify title, date, categories, and tags.
- **Adding Knives**: Add Markdown files to `_knives` with details like materials, dimensions, and images. Use the `knife.html` layout.
- **Customizing Pages**: Edit files in `_pages` (e.g., `about.md`, `knives.md`) for static content.
- **Styling**: Modify SCSS files in `assets/scss` and compile using `sass` (included in `node_modules`).
- **Drafts**: Store unpublished posts in `_drafts` and preview with `jekyll serve --drafts`.
- **Tracking**: Analytics are included via `_includes/tracking-header.html` and `_includes/tracking-footer.html`.

## TODO List
Below is a prioritized list of tasks to enhance Artifact.se:

- **High Priority** (Critical for core functionality and user experience):
  - [ ] Create image galleries for `_knives` entries with high-resolution photos to showcase craftsmanship.
  - [ ] Implement a contact form backend for `_pages/contact.md` to enable user inquiries about custom knives.

- **Medium Priority** (Important for content and usability):
  - [ ] Add a downloadable PDF section to `_pages/academia.md` for academic publications.
  - [ ] Write a blog post introducing Artifact.se in `_posts` to set the site's purpose and tone.
  - [ ] Enhance search functionality in `_includes/search-lunr.html` for better tag and category filtering.
  - [ ] Optimize images in `assets/images` for faster page loading to improve performance.

- **Low Priority** (Nice-to-have enhancements):
  - [ ] Configure Google Analytics in `_includes/tracking-header.html` for traffic insights.
  - [ ] Update SCSS in `assets/scss` to reflect a cohesive brand aesthetic.
  - [ ] Add social sharing buttons to `_includes/main-loop-card.html` for post visibility.
  - [ ] Organize `_data/Library.json` to include structured metadata for all projects.
  - [ ] Clean up unused `node_modules` dependencies to reduce repository size.

## Contributing
This is a personal project, but I welcome feedback! Open an issue for suggestions or submit a pull request for improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
