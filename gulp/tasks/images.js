var gulp              = require('gulp'),
    paths             = require('../config').paths;

gulp.task('images', function() {
  gulp.src(paths.src.images + "/**/*.{gif,jpg,png,svg}")
    .pipe(gulp.dest(paths.dist.images));
});
