'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('dart-sass');


/**
 * @Main func for sass compile
 * @project     - Project Name
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 02-10-2021
 * @modified_by -
 */
function buildStyles() {
  return gulp.src('./app/assets/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'));
};


/**
 * @Set watcher for auto sass compile
 * @project     - Project Name
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 02-10-2021
 * @modified_by -
 */
exports.watch = function () {
  gulp.watch('./app/assets/scss/*.scss', buildStyles);
};


// exports sass compile func
exports.buildStyles = buildStyles;