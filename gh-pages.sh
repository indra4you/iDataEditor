#!/bin/sh

npm run build-gh-pages
rm ./dist/*.txt
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages