sudo git add .
sudo git commit -m "updated" --no-verify
sudo git push -u origin master

# if want to deploy to netflify, need a file in public folder by name is _redirects and contains below
# /* /index.html 200