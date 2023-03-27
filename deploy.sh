#!/usr/bin/env sh

# abort on errors
set -e

#build
npm run build 

# navigate into the build output directory
cd dist

# place .nojekyll to bypass jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<username>.github.io
# git push -f git@github.com:<username>/<username>.github.io.git main

# if you are deploying to https://<username>.github.io<REPO>
# git push -f git@github.com:Fernando17253/CV.git main:gh-pages

cd -