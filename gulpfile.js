const gulp = require('gulp'); //importação do gulp
const sass = require('gulp-sass')(require('sass')); //importação do sass
const imagemin = require('gulp-imagemin'); //importação do imagemin

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'})) //função para comprimir o sass (deixar ele mais leve)
    .pipe(gulp.dest('./dist/css')) //função para mandar o arquivo ja comprimido ao "dist/css"
}
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin()) //função para comprimir as imagens (deixarem elas mais leves)
    .pipe(gulp.dest('./dist/images')) //função para mandar o arquivo ja comprimido ao "dist/css"
}

exports.default = gulp.parallel(styles, images);   //execussão paralela das duas funçãos

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))  //função para o watch
}