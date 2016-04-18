if [[ -z $(docker ps -q -f name=traviscontainer) ]]; then
  echo "It's empty"
else
  echo "It's not empty"
fi
