const container = document.querySelector('#container');

const pixel = [];

for(let i=0;i<256;i++){
    pixel[i] = document.createElement('div');
    pixel[i].classList.add('pixel');
    pixel[i].textContent = '0';
    container.appendChild(pixel[i]);
}