import gulp from 'gulp';

gulp.task('watch', (done) => {
  console.log('Started');
  gulp.watch(['.vscode/tasks.json', '**/*'], (event) => {
    console.log(event.path, event.type);
  });
});
