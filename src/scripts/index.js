/* eslint-disable import/no-useless-path-segments */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

// Api key 4313ad19d10dff5eb25b38cd673e3386
// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#menuDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
