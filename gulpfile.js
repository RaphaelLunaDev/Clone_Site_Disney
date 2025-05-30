const gulp = require('gulp'); //importação do gulp
const sass = require('gulp-sass')(require('sass')); //importação do sass
const imagemin = require('gulp-imagemin'); //importação do imagemin
const uglify = require('gulp-uglify')   //importação do uglifly (serve pra minificar)

function scripts() {
    return gulp.src('./src/scripts/*.js')        //função para minificar o conteudo js
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))

}

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

exports.default = gulp.parallel(styles, images, scripts);   //execussão paralela das duas funçãos

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))  //função para o watch
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}