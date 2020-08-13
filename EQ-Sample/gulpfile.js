"use strict";

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var config = {
    scriptSrc: ['Scripts/**/*.js', '!Scripts/**/*.min.js'],
    cssSrc: ['Styles/**/*.scss', '!Styles/**/*.min.css']
};

gulp.task('clean-scripts', function () {
    return del(['wwwroot/js/**.js', 'wwwroot/js/**.min.js']);
});

gulp.task('clean-styles', function () {
    return del(['wwwroot/css/**.css', 'wwwroot/css/**.min.css']);
});

gulp.task('scripts', gulp.parallel('clean-scripts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('wwwroot/js/'));
}));

gulp.task('styles', gulp.parallel('clean-styles', function () {
    return gulp.src(config.cssSrc)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('wwwroot/css/'));
}));

gulp.task('default', gulp.parallel(gulp.series('scripts', 'styles'), function () { }));