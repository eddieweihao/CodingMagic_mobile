var gulp = require('gulp'),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	minifyCss = require("gulp-minify-css"),
	browserSync = require("browser-sync");
	
var	reload = browserSync.reload;


gulp.task('default',function(){
    console.log('test-task');
});

gulp.task('compile-sass', function () {
    gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));
});

gulp.task('listen', function () {
    // 从这个项目的根目录启动服务器
    browserSync({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*").on("change", browserSync.reload);
});