#!/bin/bash
set -e

# Navigate to source
cd /var/www/jekyll-source

export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init - bash)"

# Install dependencies if needed
bundle install --quiet

# Build the site
bundle exec jekyll build -s /var/www/jekyll-source -d /var/www/jekyll-site

echo "Build complete!"

