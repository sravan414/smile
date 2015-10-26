var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// JS task with sourcemaps
gulp.task('js', function(){
	gulp.src('src/**/**/*.js')
		.pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

// SASS task with sourcemaps
gulp.task('css', function () {
  gulp.src('src/**/**/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

// Watch task
gulp.task('watch', function(){
	gulp.watch('src/**/**/*.js',['js']);
	gulp.watch('src/**/**/*.scss',['css']);
});

gulp.task('default',['js','css']);