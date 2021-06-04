clear
for root in "$1/*"; do
  for group in $root/; do
    cd "$group"
    # echo "$group"
    origin=$(git remote get-url --push origin)
    case "$origin" in *token*)
      repo_url=${origin:167}
      new_origin="https://github.com/${repo_url}"
      echo $new_origin
      git remote remove origin
      git remote add origin $new_origin
      ;;
    esac
    cd ../
  done  
done


