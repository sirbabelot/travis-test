if ! [ -z $(docker ps -aq -f name=bablotcontainer) ];
  then docker rm -f bablotcontainer
  else echo "No containers to delete!"
fi