module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'dharness@107.170.2.166',
      key: 'deploy_key.pem',
    }
  });


  shipit.task('ls', function () {
    return shipit.remote('ls');
  });
};
