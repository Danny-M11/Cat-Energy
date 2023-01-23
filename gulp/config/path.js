//import { src } from 'gulp';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    images: `${srcFolder}/img/*.*`,
    fonts: `${srcFolder}/fonts/*.*`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/*.*`,
    fonts: `${srcFolder}/fonts/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}