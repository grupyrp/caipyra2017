gulp.task('default', ["webserver", "build"], () => {
    gulp.watch('./src/sass/**/*', ['css', 'mobile_css'])
    gulp.watch(CONFIG.SRC.JS, ['js'])
    gulp.watch('./src/templates/**/*', ['templates'])
    gulp.watch(CONFIG.SRC.IMAGES, ['images'])
})
