var gulp = require('gulp'),
		browsersync = require('browser-sync'),
		paths = require('../config').paths,
		fs = require('fs');

gulp.task('browsersync', function() {
  browsersync.use({
    plugin: function() {}
    // hooks: {
    //   'client:js': fs.readFileSync("./lib/closer.js", "utf-8")
    // }
  });

  browsersync.init([paths.dist.html, paths.dist.css, paths.dist.js], {
    server: {
      baseDir: paths.dist.html
    }
  });
});

gulp.task('watch', ['browsersync'], function() {
  var watching = true;
  gulp.watch(paths.src.html + "/**/*.html", ['html']);
  gulp.watch(paths.src.images + "/**/*.svg", ['html']);
  gulp.watch(paths.src.css + "/**/*", ['css']);
  // gulp.watch(paths.src.fonts + "/**/*", ['fonts']);
  gulp.watch(paths.src.js + "/**/*", ['js']);
  gulp.watch(paths.src.images + "/**/*.{gif,jpg,png,svg}", ['images']);
});