var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var gnf         = require('gulp-npm-files');
var reload      = browserSync.reload;

var src = {
    root: 'app',
    lib:  'app/lib',
    scss: 'app/scss/*.scss',
    html: 'app/**/*.html',
    templ:'app/templates/**/*.html',
    js:   'app/js/*.js'
};
var dist = {
    root: 'dist',
    lib:  'dist/lib',
    css:  'dist/css',
    templ:'dist/templates',
    js:   'dist/js/*.js'
}

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// Static Server + watching scss/html files
gulp.task('serve', ['html','sass', 'js', 'lib'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js, ['js-watch']);
});


//Compile

// process HTML files and return the stream
gulp.task('html', function () {
    gulp.src(src.root + "/index.html")
        .pipe(gulp.dest(dist.root));
    return gulp.src(src.templ)
        .pipe(gulp.dest(dist.templ));
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(src.js)
        .pipe(concat('vodstv.js'))
        .pipe(gulp.dest(dist.root));
        // .pipe(browserify())
});

// get lib JS files fron npm
// Copy dependencies to build/node_modules/ by 
// value in './path/to/package.json' file 
gulp.task('lib', function() {
    gulp.src(gnf(null, './package.json'), {base:'./'})
    .pipe(gulp.dest(src.lib));
    var libs =[
        src.lib +"/node_modules/jquery/dist/jquery.min.js",
        src.lib +"/node_modules/knockout/build/output/knockout-latest.js",
        src.lib +"/node_modules/knockout-mapping/dist/knockout.mapping.min.js",
        src.lib +"/node_modules/moment/min/moment.min.js",
        src.lib +"/node_modules/bootstrap/dist/js/bootstrap.min.js"
    ];
    gulp.src(libs)
    .pipe(gulp.dest(dist.lib));

});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(dist.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);

