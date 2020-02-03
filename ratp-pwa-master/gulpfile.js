const gulp = require('gulp');
gulp.task('generate-service-worker', function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'app';
  
    swPrecache.write(path.join(rootDir, 'sw.js'), {
      staticFileGlobs: [
      'index.html',
      'scripts/app.js',
      'styles/inline.css',
      'images/ic_add_white_24px.svg',
      'images/ic_refresh_white_24px.svg'],
      stripPrefix: rootDir
    }, callback);
  });

  const workboxBuild = require('workbox-build');
workboxBuild.generateSW({
  swDest: 'sw.js',
  globDirectory: './app',
  globPatterns: '**/*.{js,css,html,png}',
});