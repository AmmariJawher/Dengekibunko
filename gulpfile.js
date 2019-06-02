'use strict';
    
// Include gulp
const gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglifyjs = require('uglify-es');
var composer = require('gulp-uglify/composer');
var pump = require('pump');

var minify = composer(uglifyjs, console);

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
});

// Live-reloading with Browser Sync
gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "yourlocal.dev"
  });
});

// Minify JavaScript with UglifyJS3.
gulp.task('handleJs', function (cb) {
  var options = {};

  pump([
      gulp.src('src/scripts/app.js'),
      minify(options),
      gulp.dest('dist/scripts')
    ],
    cb
  );
});

// Watch Sass & Serve
gulp.task('default', function() {
  browserSync.init({
    server: "./dist"
  });
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('src/scripts/app.js', gulp.series('handleJs'));
  gulp.watch("dist/**/*").on('change', browserSync.reload);
});
