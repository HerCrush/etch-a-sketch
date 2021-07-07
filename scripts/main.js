const container = document.querySelector('#container');

const clr_btn = document.querySelector('#clear');

const pixel = [];

makeGrid(16);

function makeGrid(size) {
    //check passed values
    if(size>100) return alert('I said no more than 100 bruh...');
    if(size===null) return;
    //clean canvas
    pixel.forEach( pxl => pxl.remove());
    pixel.length = 0;
    //creating canvas
    for(let i=0;i<size*size;i++){
        pixel[i] = document.createElement('div');
        pixel[i].classList.add('pixel');
        container.appendChild(pixel[i]);
        container.style.gridTemplateColumns = `repeat(${size},auto)`;
    }
    console.log(pixel);
    //painting
    pixel.forEach( pxl => pxl.addEventListener('mouseover', (e) => {
        pxl.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        console.log(e.target.attributes.style.value);
    }));
}

clr_btn.addEventListener('click', () => makeGrid(prompt('Set canvas size (max: 100)')));