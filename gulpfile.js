var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

//css文件压缩
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));
});
 
//js文件压缩
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
    //.pipe(livereload());
});

//sass的编译
gulp.task('compile-sass', function () {
    gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
//监控变更，自动刷新
gulp.task('watch', function() {
  gulp.watch('sass/*.sass', ['minify-css','compile-sass']);
  gulp.watch('js/*.js', ['minify-js']);
});
