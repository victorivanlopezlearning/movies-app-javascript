import { RenderMovies } from './presentation/render-movies';

let page = 1;

const content = document.querySelector('#content');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

btnPrev.addEventListener('click', () => {
  if(page <= 1) return;
  page--;
  RenderMovies(content, page);
});

btnNext.addEventListener('click', () => {
  if(page >= 10) return;
  page++;
  RenderMovies(content, page);
});

document.addEventListener('DOMContentLoaded', () => {
  RenderMovies(content, page);
});