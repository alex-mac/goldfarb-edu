var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('build', function() {
  browserify({
    entries: 'src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('public'))
  .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    notify: false,
    ui: false
  });
});

gulp.task('sass', function() {
  return gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream: true}));
});

gulp.task('watch-sass', function() {
  gulp.watch('sass/**/*.sass', ['sass'])
  // gulp.watch('public/index.html').on('change', reload({stream: true}));
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.jsx', ['build']);
});

gulp.task('default', ['browser-sync', 'build', 'sass', 'watch', 'watch-sass']);
