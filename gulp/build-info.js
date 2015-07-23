'use strict';

var BUILD_INFO_FILENAME = '/build-info.json';

var gulp  = require('gulp');
var path  = require('path');
var git   = require('git-rev');
var async = require('async');
var conf  = require('./conf');

gulp.task('build-info:dist', function (done) {
  var filename = path.join(conf.paths.dist, BUILD_INFO_FILENAME);
  createBuildJson(filename, done);
});

gulp.task('build-info', function (done) {
  var filename = path.join(conf.paths.src, BUILD_INFO_FILENAME);
  createBuildJson(filename, done);
});

function createBuildJson(filename, done) {
  async.parallel({
      short: function(callback){
          git.short(function (hash) {
            return callback(null, hash);
          });
      },
      long: function(callback){
          git.long(function (hash) {
            return callback(null, hash);
          });
      },
      branch: function(callback){
          git.branch(function (branch) {
            return callback(null, branch);
          });
      },
      tag: function(callback){
          git.tag(function (tag) {
            return callback(null, tag);
          });
      }
  },
  function(err, results) {
    var buildInfo = {
      git: results
    };

    var contents = JSON.stringify(buildInfo, null, 2);

    require('fs').writeFileSync(filename, contents);
    done();
  });
}
