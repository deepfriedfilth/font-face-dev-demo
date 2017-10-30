var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var cssMqPacker = require('css-mqpacker');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var supported = [
    'last 2 versions',
    'safari >= 8',
    'ie >= 10',
    'ff >= 20',
    'ios 6',
    'android 4'
];

gulp.task('styles', function() {
	/* Sass it up, pack it up */
	gulp.src('sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./'));

	// minimy & autoprefix if possible?
	/*.pipe(cssnano({
		autoprefixer: {browsers: supported, add: true}
	}))*/

	/*return gulp.src('style.css')
		.pipe(sourcemaps.init())
		.pipe(cssnano({
			discardComments: {removeAll: true}
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./'));*/

});

gulp.task('default', ['styles'], function() {
	browserSync.init({
		
		proxy: 'at-font-face.dev',
		browser: 'google chrome'
	});
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('**/*.html',reload);
	gulp.watch('js/**/*.js',reload);
});