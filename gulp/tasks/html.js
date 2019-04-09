var gulp         = require('gulp'),
    paths        = require('../config').paths,
    errorHandler = require('../config').swallowError

gulp.task('html', function() {
  return gulp.src(paths.src.html + "/**/*.html")
    .pipe(gulp.dest(paths.dist.html))
    .on('error', errorHandler);
});
