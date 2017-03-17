gulp.task("images", () => {
    return gulp.src(CONFIG.SRC.IMG)
                // .pipe($.gopt())
                .pipe(gulp.dest(CONFIG.DIST.IMG))
})
