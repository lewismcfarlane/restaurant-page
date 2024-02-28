import './style.css';
import consoleLog from './module1';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    
    element.innerHTML = 'test'
    element.classList.add('hello');

    btn.innerHTML ='Click me';
    btn.onclick = consoleLog;

    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());