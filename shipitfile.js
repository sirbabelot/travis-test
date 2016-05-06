module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'Moskalyk@107.170.2.166'
    }
  });

  shipit.task('yank_deploy', function () {
    return shipit.remote('docker pull bablot/travis-test && docker run -p 80:8888 --name morgtest bablot/travis-test');
  });
};