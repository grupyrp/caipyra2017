const srcPath = (r) => process.cwd() + "/src/" + r;
const distPath = (r) => process.cwd() + "/static/" + r;

module.exports = {
    SRC: {
        CSS: srcPath('sass/main.sass'),
        JS: srcPath('js/main.js'),
        IMG: srcPath('images/**/*'),
        PAGE: srcPath('templates/index.hbs')
    },
    DIST: {
        CSS: distPath('css/'),
        JS: distPath('js/'),
        IMG: distPath('images/'),
        PAGE: process.cwd()
    },
    TASK: {
        TEMPLATE: {
            HBS: {
                batch : [srcPath('templates/partials/')],
                helpers : require('../src/templates/helpers')
            },
            TMP_DATA: {},
            RENAME: { extname: '.html' }
        },
        IMAGES: {
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }
    }
}
