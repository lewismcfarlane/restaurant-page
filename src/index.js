import './style.css';
import { addHeaderAndNav, addContentContainer } from './module2.js';
import { tab1 } from './module1.js';





document.body.appendChild(addHeaderAndNav());
document.body.appendChild(addContentContainer());

window.onload = () => {
  console.log('Page has loaded.')
  tab1();
}