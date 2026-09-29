#!/bin/zsh

cd "$(dirname "$0")"

git add .

if git diff --cached --quiet; then
  exit 0
fi

git commit -m "auto: $(date '+%Y-%m-%d %H:%M:%S')"

git push origin main