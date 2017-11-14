var gulp = require('gulp'),
    addsrc = require("gulp-add-src"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    minCss = require('gulp-minify-css'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');

// scripts task
// uglifies
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});


// sass task
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

// copy files
gulp.task('copy', function () {
  gulp.src('plugins/**/*')
      .pipe(addsrc('dist/**/*', { base: '.'}))
      .pipe(gulp.dest('dist'));
});


// images task
// compress
gulp.task('image', function(){
  gulp.src('img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});

// server livereload
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// watch task
// watches JS
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'image', 'copy', 'watch', 'webserver']);
