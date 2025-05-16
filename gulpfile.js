const gulp = require('gulp'); //importação do gulp
const sass = require('gulp-sass')(require('sass')); //importação do sass

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'})) //função para comprimir o sass (deixar ele mais leve)
    .pipe(gulp.dest('./dist/css')) //função para mandar o arquivo ja comprimido ao "dist/css"
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))  //função para o watch
}