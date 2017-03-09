gulp.task("js", () => {
    return gulp.src(CONFIG.SRC.JS)
                .pipe($.uglify())
                .pipe($.rename('main.min.js'))
                .pipe(gulp.dest(CONFIG.DIST.JS))
})
