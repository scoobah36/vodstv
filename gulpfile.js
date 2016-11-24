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
    scss: 'app/scss/**/*.scss',
    assets: 'app/assets',
    templ:'app/templates/**/*.html',
    js:   'app/js/**/*.js'
};
var dist = {
    root: 'dist',
    lib:  'dist/lib',
    assets: 'dist/assets',
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
gulp.task('serve', ['html','sass', 'js', 'lib', 'assets'], function() {

    browserSync.init({
        server: "./dist",
        open: false
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.templ).on('change', reload);
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
        src.lib + "/node_modules/jquery/dist/jquery.min.js",
        src.lib + "/node_modules/knockout/build/output/knockout-latest.js",
        src.lib + "/node_modules/knockout-mapping/dist/knockout.mapping.min.js",
        src.lib + "/node_modules/moment/min/moment.min.js",
        src.lib + "/node_modules/bootstrap/dist/js/bootstrap.min.js",
        src.lib + "/vendor/pace/pace.min.js",
        src.lib + "/vendor/slimScroll/jquery.slimscroll.min.js",
        src.lib + "/vendor/fastclick/fastclick.js",
        src.lib + "/vendor/adminLTE/app.min.js"
    ];
    gulp.src(libs)
    .pipe(gulp.dest(dist.lib));

});

gulp.task('assets', function() {

    //get vendor css
    var css =[
        src.lib + "/vendor/pace/pace.min.css"
    ];
    gulp.src(css)
    .pipe(gulp.dest(dist.assets + "/css"));
    
    return gulp.src(src.assets + "/**/*.*")
        .pipe(gulp.dest(dist.assets));
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(concat('vodstv.css'))
        .pipe(gulp.dest(dist.root))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);

