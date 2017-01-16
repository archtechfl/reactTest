var gulp = require("gulp");

var sourcemaps = require("gulp-sourcemaps");
var less = require('gulp-less-sourcemap');
var rename = require("gulp-rename");

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var merge = require('utils-merge');

var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('watchify', function () {
  var args = merge(watchify.args, { debug: true })
  var bundler = watchify(browserify('app/index.jsx', args)).transform(babelify)
  bundle_js(bundler)

  bundler.on('update', function () {
    bundle_js(bundler)
  })
})

function bundle_js(bundler) {
  return bundler.bundle()
    .pipe(source('app/index.js'))
    .pipe(buffer())
    .pipe(rename("bundle.js"))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

gulp.task('compile-less', function () {
  gulp.src('app/styles/app.less')
    .pipe(less({
        sourceMap: {
            sourceMapRootpath: '' // Optional absolute or relative path to your LESS files 
        }
    }))
    .pipe(gulp.dest("dist/styles"));
});

gulp.task('watch-less', function () {
   gulp.watch('app/styles/**/*.less', ['compile-less']);
});

gulp.task('watch-jsx', function () {
   gulp.watch('app/**/*.jsx', ['watchify']);
});

gulp.task('default', ['watchify', 'compile-less', 'watch-less'],
    function () {
});