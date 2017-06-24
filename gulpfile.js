var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var concat = require('gulp-concat-css');



gulp.task('stylus', function(){
	gulp.src('src/stylus/*.styl')
	    .pipe(stylus())
	    .pipe(gulp.dest('src/css'));
});

gulp.task('pug', function(){
	gulp.src('src/pug/*.pug')
	    .pipe(pug())
	    .pipe(gulp.dest('src/site/'));
});

gulp.task('concat', function() {
	return gulp.src('src/css/*.css')
		   .pipe(concat("bundle.css"))
		   .pipe(gulp.dest('src/app/'));	
})

gulp.task('watch', function () {
	gulp.watch('src/stylus/*.styl', ['stylus']);
	gulp.watch('src/pug/*.pug', ['pug']);
    gulp.watch('src/css/*.css', ['concat']);
})

