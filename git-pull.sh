#clear
for root in "$1/*"; do
  for group in $root/; do
    cd "$group"
    echo "============================"
    echo $group
    git status
    git pull origin master --no-edit
    cd ../
  done
done