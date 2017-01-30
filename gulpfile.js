var gulp         = require('gulp');
var minifyCss    = require('gulp-minify-css');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps   = require('gulp-sourcemaps');
// var notify       = require("gulp-notify");

gulp.task('style', function(){
   return gulp.src('web/scss/style.scss')
       // .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(autoprefixer('last 4 versions'))
       .pipe(minifyCss())
       // .pipe(sourcemaps.write())
       .pipe(gulp.dest('web/css'))
});

gulp.task('watcher',function(){
   gulp.watch('web/scss/style.scss', ['style']);
   gulp.watch('web/scss/partials/*.scss', ['style']);
});

//____________________________
gulp.task('default', ['watcher']);
