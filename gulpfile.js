var gulp        = require('gulp');
// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'browserify'],
	replaceString: /\bgulp[\-.]/
});
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var src = {
    root: 'app',
    lib:  'app/lib',
    bower:  'bower_components',
    vend:  'app/vendor',
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
    gulp.watch([src.templ, src.root + "/index.html"], ['html']);
    gulp.watch(src.js, ['js-watch']);
});


//Compile

// process HTML files and return the stream
gulp.task('html', function () {
    gulp.src(src.root + "/index.html")
        .pipe(gulp.dest(dist.root));
    gulp.src(src.templ)
        .pipe(gulp.dest(dist.templ));

    reload();

});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(src.js)
        .pipe(plugins.concat('vodstv.js'))
        // .pipe(plugins.browserify())
        .pipe(gulp.dest(dist.root));
});

// get lib JS files fron bower and vendor dir to make a lib.js
gulp.task('lib', function() {
    var libs = [
        src.bower + "/jquery/dist/jquery.min.js",
        src.bower + "/knockout/dist/knockout.js",
        src.bower + "/knockout-mapping/build/output/knockout.mapping-latest.js",
        src.bower + "/moment/min/moment.min.js",
        src.bower + "/bootstrap/dist/js/bootstrap.min.js",
        src.bower + "/page/page.js",
        src.bower + "/underscore/underscore-min.js",
        src.bower + "/underscore.string/dist/underscore.string.min.js",
        src.vend + "/pace/pace.min.js",
        src.vend + "/slimScroll/jquery.slimscroll.min.js",
        src.vend + "/fastclick/fastclick.js",
        src.vend + "/adminLTE/app.min.js"
    ];

	gulp.src(libs)
		.pipe(plugins.concat('libs.js'))
		.pipe(gulp.dest(dist.root));
    return gulp.src(src.vend + "/datatables/**/*.*")
        .pipe(gulp.dest(dist.lib + "/datatables"));

});

gulp.task('assets', function() {

    //get vendor css
    var css =[
        src.vend + "/pace/pace.min.css"
    ];
    gulp.src(css)
    .pipe(gulp.dest(dist.assets + "/css"));

    return gulp.src(src.assets + "/**/*.*")
        .pipe(gulp.dest(dist.assets));
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(plugins.sass())
        .pipe(plugins.concat('vodstv.css'))
        .pipe(gulp.dest(dist.root))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);

