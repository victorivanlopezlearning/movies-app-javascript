import { MoviesApp } from './src/movies-app';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="content container" id="content"></div>
`;

const element = document.querySelector('.content');

MoviesApp(element);