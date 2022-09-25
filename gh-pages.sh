#!/bin/sh

npm run build-gh-pages
rm ./dist/*.txt
git subtree push --prefix dist origin gh-pages