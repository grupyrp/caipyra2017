gulp.task("templates", () => {
    return gulp.src(CONFIG.SRC.PAGE)
                .pipe($.compileHandlebars(CONFIG.TASK.TEMPLATE.TMP_DATA, CONFIG.TASK.TEMPLATE.HBS))
                .pipe($.rename(CONFIG.TASK.TEMPLATE.RENAME))
                .pipe(gulp.dest(CONFIG.DIST.PAGE))
})
