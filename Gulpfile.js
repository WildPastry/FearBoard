// INSTALL PLUGINS
var gulp = require('gulp');
less = require('gulp-less');
livereload = require('gulp-livereload');
connect = require('gulp-connect');
useref = require('gulp-useref');
cssnano = require('gulp-cssnano');
uglify = require('gulp-uglify');
gulpIf = require('gulp-if');
imagemin = require('gulp-imagemin');
cache = require('gulp-cache');
del = require('del');
jshint = require('gulp-jshint');
runSequence = require('run-sequence');
htmlv = require('gulp-html-validator');

//LOCAL SERVER
gulp.task('serve', function (event) {
  connect.server({
    root: '',
    port: 1988,
    livereload: true
  });
  event();
});

// LESS
gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({  paths: [
      '.',
      './node_modules/bootstrap-less'
  ]}))
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload());
});

//HTML
gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(connect.reload());
});

// HTML VALIDATION
gulp.task('htmlv', function () {
 return gulp.src('src/*.html')
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./error'));
});

// JSHINT
gulp.task('lint', function() {
	return gulp.src('src/js/app.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(connect.reload());
});

// SCRIPT BUILD
gulp.task('script', function () {
  return gulp.src('src/js/**/*.js|*.map')
    .pipe(gulp.dest('dist/js'))
});

//IMAGE BUILD
gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'))
});

//FONT BUILD
gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

//FRAMEWORK JS + CSS BUILD
gulp.task('frameworkjs', function () {
  return gulp.src('src/framework/js/**/*')
    .pipe(gulp.dest('dist/framework/js'))
});

gulp.task('frameworkcss', function () {
  return gulp.src('src/framework/css/**/*')
    .pipe(gulp.dest('dist//framework/css'))
});

//COMPILERS
gulp.task('useref', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//WATCHERS
gulp.task('watch', function (event) {
  gulp.watch('src/scss/**/*.less', gulp.series('less'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/js/*.js', gulp.series('lint'));
  event();
});

//LOAD
gulp.task('default',
  gulp.series('serve', 'less', 'html', 'lint', 'watch')
);

//CLEAN
gulp.task('clean', function (event) {
  del.sync('dist');
  event();
});

// CLEAR
gulp.task('clear', function (callback) {
  return cache.clearAll(callback)
});

// BUILD
gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel('less', 'useref', 'images', 'script', 'fonts', 'frameworkjs', 'frameworkcss')
  )
);