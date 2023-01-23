import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

//импорт задач
import { copy } from './gulp/task/copy.js';
import { fonts } from './gulp/task/fonts.js';
import { reset } from './gulp/task/reset.js';
import { html } from './gulp/task/html.js';
import { server } from './gulp/task/server.js';
import { scss } from './gulp/task/scss.js';
import { js } from './gulp/task/js.js';

//watcher's
function watcher() {
    gulp.watch(path.watch.images, copy);
    gulp.watch(path.watch.fonts, fonts)
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);

}

//main Tasks
const mainTasks = gulp.parallel(copy, fonts, html, scss, js);

//сценарий выполнения
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//выполнение сценария по умолчанию
gulp.task('default', dev)