module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'dharness@107.170.2.166',
      key: 'deploy_key.pem',
    }
  });


  shipit.blTask('deploy', function () {
    return shipit
        .remoteCopy('deploy.sh', '/home/dharness')
        .then(()=> shipit.remote('sh deploy.sh'))
        .then(()=> shipit.remote('docker pull bablot/travis-test'))
        .then(()=> shipit.remote('docker run -d -p 8080:8080 --name traviscontainer bablot/travis-test'));
  });

};
