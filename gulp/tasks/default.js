gulp.task('default', ["webserver", "build"], () => {
    gulp.watch('./src/sass/**/*', ['css'])
    gulp.watch(CONFIG.SRC.JS, ['js'])
    gulp.watch('./src/templates/**/*', ['templates'])
    gulp.watch(CONFIG.SRC.IMAGES, ['images'])
})
