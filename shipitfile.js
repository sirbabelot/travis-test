module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'Moskalyk@107.170.2.166',
      key:'./tmp_keys/key'
    }
  });

  shipit.task('yank_deploy', function () {
    return shipit.remoteCopy('deploy.sh', '.')
    .then(function(){
      shipit.remote('sh deploy.sh')
    });
  });
};