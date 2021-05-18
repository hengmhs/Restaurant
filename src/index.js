import { renderAbout } from './aboutpage';
import { renderMenu } from './menupage';
import { renderContact } from './contactpage';

const clearInfo = () => {
  const info = document.getElementById('info');
  info.innerHTML = '';
  document.getElementById('about').classList.remove('navselect');
  document.getElementById('menu').classList.remove('navselect');
  document.getElementById('contact').classList.remove('navselect');
}

const navAddEventListener = () => {
  document.getElementById('about').addEventListener('click', () => { clearInfo(); renderAbout() });
  document.getElementById('menu').addEventListener('click', () => { clearInfo(); renderMenu() });
  document.getElementById('contact').addEventListener('click', () => { clearInfo(); renderContact() });
}

// renderAbout();
// clearInfo();
navAddEventListener();
renderMenu();
