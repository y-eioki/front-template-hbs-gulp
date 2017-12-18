const _gzip = require('gulp-gzip');
const _merge = require('gulp-merge');

module.exports = (gulp, PATH, $) => {

  //let css = () => {
    let task_css = gulp.src(`${ PATH.dist }${ PATH.output.css }/*.min.css`)
      .pipe(_gzip({
        append: true,
        gzipOptions: {
          level: 9
        }
      }))
      .pipe(gulp.dest(`${ PATH.dist }${ PATH.output.css }/`))
  //};

  //let js = () => {
    let task_js = gulp.src(`${ PATH.dist }${ PATH.output.js }/*.min.js`)
      .pipe(_gzip({
        append: true,
        gzipOptions: {
          level: 9
        }
      }))
      .pipe(gulp.dest(`${ PATH.dist }${ PATH.output.js }/`))
  //};

  // css();
  // js();
  let compress_task = () => {
    _merge(task_js, task_css);
  };

  return compress_task;
}