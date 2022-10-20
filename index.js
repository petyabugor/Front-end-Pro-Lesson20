let square = document.querySelector('.square')
let offsetX;
let offsetY;

square.addEventListener('dragstart', function (event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
});


square.addEventListener('dragend', function (event) {
    square.style.top = (event.pageY-offsetY) + 'px';
    square.style.left = (event.pageX-offsetX) + 'px';  
});

square.addEventListener('dblclick', function () {
    square.style.cssText = `
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ` 
});



