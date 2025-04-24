import './style.scss';
import './sidenav.scss';
import HomeController from './controllers/home.js';
import HomeView from './components/homeView/homeView.js';

document.addEventListener('DOMContentLoaded', () => {
  // Create view and controller
  const view = new HomeView('#root');
  const controller = new HomeController(view);

  // Load data and render the page
  controller.init();
});