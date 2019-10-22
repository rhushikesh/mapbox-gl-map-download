const { src, dest, parallel } = require("gulp");
const minifyCSS = require("gulp-csso");
const concat = require("gulp-concat");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function css() {
  return src("src/*.css")
    .pipe(minifyCSS())
    .pipe(dest("dist/"));
}

function js() {
  return src("src/*.ts", { sourcemaps: true })
    .pipe(tsProject())
    .pipe(concat("mapbox-gl-map-download.js"))
    .pipe(dest("dist/"));
}

exports.default = parallel(css, js);
