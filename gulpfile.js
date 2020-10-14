const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const uglify = require("gulp-uglify");
const del = require("del");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("docs/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("docs/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// ImageMin

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
}

exports.images = images;

// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("docs/img"))
}

exports.webp = createWebp;

// Sprites

const sprite = () => {
  return gulp.src("source/img/icon/**/*.svg")
    .pipe(svgstore())
    .pipe(rename("sptire.svg"))
    .pipe(gulp.dest("docs/img"))
}

exports.sprite = sprite;

// Uglify

const js = () => {
  return gulp.src(
    "source/js/**/*.js",
  )
    // .pipe(uglify())
    .pipe(gulp.dest("docs/js"))
}

exports.uglify = js;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "docs"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("source/js/**/*.js", gulp.series("uglify"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**/*",
    "source/*.ico",
  ], {
    base: "source"
  })
  .pipe(gulp.dest("docs"))
}

exports.copy = copy;

// clean

const clean = () => {
  return del("docs");
}

const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("docs"))
    .pipe(sync.stream());
}

exports.html = html;

const build = gulp.series(
  clean,
  styles,
  images,
  createWebp,
  sprite,
  copy,
  html,
  js
);

exports.build = build;

exports.start = gulp.series(build, server, watcher);
