gulp.task("css", () => {
    return gulp.src(CONFIG.SRC.CSS)
                .pipe($.sass())
                .pipe($.autoprefixer())
                .pipe($.cssnano())
                .pipe($.rename('main.min.css'))
                .pipe(gulp.dest(CONFIG.DIST.CSS))
})