// dependecies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Compile SCCS
gulp.task('sass', function() {
  return gulp.src(['./src/Assets/scss/**/*.scss'])
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest('./src/Assets/css/'));
});

// detect change in CSS
gulp.task('serve', ['sass'], function(){
  gulp.watch(['./src/Assets/scss/**/*.scss'], ['sass']);
});

// run task
gulp.task('default', ['serve']);
