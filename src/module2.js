import { tab1, tab2, tab3 } from "./module1";

export function addHeaderAndNav() {
    
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab1Button = document.createElement('button');
    const tab2Button = document.createElement('button');
    const tab3Button = document.createElement('button');

    const headerHeading = document.createElement('h1');
    header.appendChild(headerHeading);
    
    header.classList.add('flex', 'column', 'center', 'width-80', 'margin-0-auto');
    

    headerHeading.textContent = `Lewis & Son's`

    tab1Button.textContent = 'Home';
    tab2Button.textContent = 'Menu';
    tab3Button.textContent = 'About';
    
    tab1Button.onclick = tab1;
    tab2Button.onclick = tab2;
    tab3Button.onclick = tab3;

    
    nav.appendChild(tab1Button);
    nav.appendChild(tab2Button);
    nav.appendChild(tab3Button);



    header.appendChild(nav);

    return header;
}

export function addContentContainer() {
    const content = document.createElement('div');
    content.id = 'content';
    content.classList.add('center', 'width-80', 'margin-0-auto');
    
  
    return content;
  
  }