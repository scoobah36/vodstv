var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var gnf         = require('gulp-npm-files');
var reload      = browserSync.reload;

var src = {
    root: 'app/',
    lib:  'app/lib',
    scss: 'app/scss/*.scss',
    css:  'app/css',
    html: 'app/*.html',
    js:   'app/js/*.js'
};

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js', 'lib'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js, ['js-watch']);
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(src.js)
        .pipe(concat('vodstv.js'))
        .pipe(gulp.dest(src.root));
        // .pipe(browserify())
});

// get lib JS files fron npm
// Copy dependencies to build/node_modules/ by 
// value in './path/to/package.json' file 
gulp.task('lib', function() {
  gulp
    .src(gnf(null, './package.json'), {base:'./'})
    .pipe(gulp.dest(src.lib));
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);

