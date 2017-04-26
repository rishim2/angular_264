//require tells node to look into node_modules folder for a package named gulp and assign to gulp
var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var plumber = require('gulp-plumber');

var webserver = require('gulp-webserver');
var opn = require('opn');

var mocha = require('gulp-mocha');
var KarmaServer = require('karma').Server;


gulp.task('minify', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost'
            , port: '8001'
            , livereload: true
            , directoryListing: false
        }));
});

gulp.task('openbrowser', function () {
    opn('http://localhost:8001');
});

gulp.task('test', function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
        , singleRun: true
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    }).start();
});

// fo running the task in command line, use  gulp task_name
gulp.task('default', ['minify', 'webserver', 'openbrowser']);