#!/bin/bash
while [[ $# -gt 0 ]]; do
  case "$1" in
    -u|--user)
      USER="$2"
      shift 2
      ;;
    -h|--host)
      HOST="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

set -e

echo "Syncing source files to remote..."
rsync -avz --delete \
    --exclude "_site" \
    --exclude ".git" \
    . ${USER}@${HOST}:/var/www/jekyll-source/

echo "Triggering build..."
ssh ${USER}@${HOST} "/var/www/jekyll-source/build.sh"

echo "Deployment successful!"

