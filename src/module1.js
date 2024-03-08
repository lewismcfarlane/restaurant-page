export function tab1() {
  console.log('I get called from module1.js! tab1');

  const content = document.getElementById('content');
  content.innerHTML = '';

  const p = document.createElement('p');
  p.classList.add('center');
  p.textContent = 'hey'

  content.appendChild(p);

}

export function tab2() {
  console.log('tab2');

  const content = document.getElementById('content');
  content.innerHTML = '';

  const p = document.createElement('p');
  p.textContent = 'hi'

  content.appendChild(p);
}

export function tab3() {
  console.log('tab3');
}
