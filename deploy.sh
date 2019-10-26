npm run build
cd dist/
git init
git add -A
git commit -m "updated" --no-verify
git push -f https://github.com/ikhsanrahman/fe-paroha master:gh-pages

