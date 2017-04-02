var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');

var style_dir = 'src/scss/**/*.scss';

gulp.task('sass', function(){
		sass('src/scss/**/*.scss')
		.on('error', sass.logError)
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./'))
})

gulp.task('watch', function(){
	gulp.watch('src/scss/**/*.scss', ['sass'])
})
