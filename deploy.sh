sudo npm run build
cd /dist
sudo git init
sudo git add -A
sudo git commit -m "updated"
sudo git push -f https://github.com/ikhsanrahman/fe-paroha master:gh-pages

