module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'dharness@107.170.2.166',
      key: 'deploy_key.pem',
    }
  });


  shipit.blTask('deploy', function () {
    return shipit
        .remote(`
          if [[ -z $(docker ps -q -f name=traviscontainer) ]]; then
            echo "Nothing to remove"
          else
            docker rm -f $(docker ps -q -f name=traviscontainer)
          fi`)
        .then(()=> shipit.remote('docker pull bablot/travis-test'))
        .then(()=> shipit.remote('docker run -p 8080:8080 --name traviscontainer bablot/travis-test'));
  });

};
