var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoPrefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');


gulp.task('jade', function() {
  return gulp.src('_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});
gulp.task('jade1', function() {
  return gulp.src('service/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./service/'))
  .pipe(browserSync.stream())
});
gulp.task('jade2', function() {
  return gulp.src('about/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./about/'))
  .pipe(browserSync.stream())
});
gulp.task('jade3', function() {
  return gulp.src('category/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./category/'))
  .pipe(browserSync.stream())
});
gulp.task('jade4', function() {
  return gulp.src('template/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./template/'))
  .pipe(browserSync.stream())
});
gulp.task('jade5', function() {
  return gulp.src('login/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./login/'))
  .pipe(browserSync.stream())
});
gulp.task('jade6', function() {
  return gulp.src('signup/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./signup/'))
  .pipe(browserSync.stream())
});
gulp.task('jade7', function() {
  return gulp.src('domain-help/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./domain-help/'))
  .pipe(browserSync.stream())
});
gulp.task('jade8', function() {
  return gulp.src('logos/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./logos/'))
  .pipe(browserSync.stream())
});
gulp.task('jade9', function() {
  return gulp.src('pricing/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./pricing/'))
  .pipe(browserSync.stream())
});
gulp.task('jade10', function() {
  return gulp.src('about/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./about/'))
  .pipe(browserSync.stream())
});
gulp.task('jade11', function() {
  return gulp.src('customers/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./customers/'))
  .pipe(browserSync.stream())
});
gulp.task('jade12', function() {
  return gulp.src('term-of-policy/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./term-of-policy/'))
  .pipe(browserSync.stream())
});
gulp.task('jade13', function() {
  return gulp.src('term-of-use/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./term-of-use/'))
  .pipe(browserSync.stream())
});
gulp.task('jade14', function() {
  return gulp.src('privacy-policy/_jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./privacy-policy/'))
  .pipe(browserSync.stream())
});
gulp.task('sass', function(){
  return gulp.src('css/_sass/*.sass')
  .pipe(sass())
  .pipe(autoPrefixer())
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream())
});

gulp.task('minifyCss', function() {
  return gulp.src('css/style.css')
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('css/'))
});

gulp.task('image', function() {
  return gulp.src('img/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('imgo/'))
});

gulp.task('concat', function() {
  return gulp.src(['bower_components/jquery/dist/jquery.min.js','js/_js/script.js'])
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('js/'))
});

gulp.task('uglify', function() {
  return gulp.src('js/main.min.js')
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: true
  });

  gulp.watch('css/_sass/*.sass' ,['sass']);
  gulp.watch(['_jade/*.jade',
              'service/_jade/index.jade',
              'about/_jade/index.jade',
              'category/_jade/index.jade',
              'template/_jade/index.jade',
              'login/_jade/index.jade',
              'signup/_jade/index.jade',
              'domain-help/_jade/index.jade',
              'logos/_jade/index.jade',
              'pricing/_jade/index.jade',
              'about/_jade/index.jade',
              'customers/_jade/index.jade',
              'term-of-policy/_jade/index.jade',
              'term-of-use/_jade/index.jade',
              'privacy-policy/_jade/index.jade'
              ],

              ['jade',
              'jade1',
              'jade2',
              'jade3',
              'jade4',
              'jade5',
              'jade6',
              'jade7',
              'jade8',
              'jade9',
              'jade10',
              'jade11',
              'jade12',
              'jade13',
              'jade14'
              ]
            );
  gulp.watch('css/style.css', ['minifyCss']);
  gulp.watch('js/_js/*.js', function() {
    browserSync.reload()
  })
});

gulp.task('default', ['serve']);
