#clear
for root in "$1/*"; do
  for group in $root/; do
    cd "$group"
    printf "\n============================\n"
    printf $group
	# Do stuff here
	git push origin master
    cd ../
  done  
done