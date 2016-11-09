const connect = require('gulp-connect');
const gulp = require('gulp');
const registerTasks = require('metal-ssg').registerTasks;
const sass = require('gulp-sass');

registerTasks({
	gulp: gulp
});

// HTML ------------------------------------------------------------------------

gulp.task('html', () => {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({includePaths: ['node_modules']}))
		.pipe(gulp.dest('dist/styles'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	gulp.watch('src/styles/**/*.scss', ['css']);
	gulp.watch('src/**/*.html', ['html']);
});

// Build -----------------------------------------------------------------------

gulp.task('default', ['generate', 'css', 'html', 'server']);