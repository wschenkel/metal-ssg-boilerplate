const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

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

gulp.task('default', ['css', 'html', 'server']);