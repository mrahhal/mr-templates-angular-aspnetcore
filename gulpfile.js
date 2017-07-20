const concat = require('gulp-concat');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const rimraf = require('gulp-rimraf');
const run = require('gulp-run');

gulp.task('clean:js', () => {
	return gulp.src('./wwwroot/js/')
		.pipe(rimraf());
});

gulp.task('clean:wwwroot', () => {
	const paths = [
		'./wwwroot/js/',
		'./wwwroot/css/',
		'./wwwroot/fonts/',
	];

	return gulp.src(paths).pipe(rimraf());
});

gulp.task('clean', ['clean:wwwroot']);

gulp.task('copy', ['clean'], () => {
	const paths = [
		'./node_modules/font-awesome/fonts/*',
	];

	return gulp.src(paths).pipe(gulp.dest('./wwwroot/fonts'));
});

gulp.task('default', ['clean', 'copy']);
