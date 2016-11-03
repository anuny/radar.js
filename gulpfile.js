'use strict';

var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');


var BASE = {
	SRC    : './src/**/*.js',
	DIST   : './dist'
};


gulp.task('dist', function () {
    gulp.src(BASE.SRC)
		.pipe(gulp.dest(BASE.DIST))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(BASE.DIST))
});

gulp.task('default',['dist'],function(){
	gulp.watch(BASE.SRC, ['dist']);
});

