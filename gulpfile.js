var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src(['app/sass/**/*.scss', 'app/sass/**/*.sass']) // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/magnific-popup/dist/magnific-popup.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/'));
});

gulp.task('css-libs', ['sass'], function(){
  return gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('app/css/'));
})

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('clean', function () {
  return del.sync('dist');
});

gulp.task('img', function(){
  return gulp.src('app/img/**/*')
  .pipe(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/img'));
})

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch(['app/sass/**/*.scss', 'app/sass/**/*.sass'], ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});


gulp.task('build', ['clean','img','sass','scripts'], function(){

  var buildCss = gulp.src([
      'app/css/main.css',
      'app/css/libs.min.css',
      'app/css/reset.css',
    ])
    .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});
