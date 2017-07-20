const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const rimraf = require('gulp-rimraf');
const run = require('gulp-run');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('clean:js', () => {
	return gulp.src('./wwwroot/js/')
		.pipe(rimraf());
});

gulp.task('clean:css', () => {
	return gulp.src('./wwwroot/css/')
		.pipe(rimraf());
});

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('copy', ['clean'], () => {
	return gulp.src('./node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest('./wwwroot/fonts'));
});

// gulp.task('compile:sass', () => {
// 	return gulp.src('./src/app/sass/main.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(concat('app.css'))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('./wwwroot/css'));
// });

// gulp.task('compile:sass:prod', ['clean:css'], () => {
// 	return gulp.src('./src/app/sass/main.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(concat('app.css'))
// 		.pipe(autoprefixer(['last 2 versions']))
// 		.pipe(cssmin())
// 		.pipe(gulp.dest('./wwwroot/css'));
// });

// gulp.task('watch:sass', ['compile:sass'], () => {
// 	return watch(['./src/app/sass/**/*.scss'], () => {
// 		gulp.start('compile:sass');
// 	});
// });

// gulp.task('watch', ['watch:sass']);

// gulp.task('default', ['clean', 'compile:sass:prod']);

gulp.task('default', ['clean', 'copy']);
