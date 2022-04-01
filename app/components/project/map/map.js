const templateDiv = document.querySelector('.map__template');
const template = document.querySelector('#svg-template');
const completeDiv = document.querySelector('.map__complete');


template.style.width = `${template.clientWidth*0.85}px`;
template.style.height = `${template.clientHeight*0.85}px`;
templateDiv.style.opacity = '1';

[templateDiv,completeDiv].forEach((el)=> {
    el.style.width = `${template.clientWidth}px`;
    el.style.height = `${template.clientHeight}px`;
});
// completeDiv.style.width = `${template.clientWidth}px`;
// completeDiv.style.height = `${template.clientHeight}px`;

const partsDiv = document.querySelectorAll('.map__part');
const parts = document.querySelectorAll('img');

const tCoord = template.getBoundingClientRect();

Array.from(parts).forEach((el,id)=> {
    let w = el.offsetWidth;
    let h = el.offsetHeight;
    let x = partsDiv[id].dataset.xxx;
    let y = partsDiv[id].dataset.yyy;
    console.log("x",x)

    el.style.width = `${w*0.85}px`;
    el.style.height = `${h*0.85}px`;
    partsDiv[id].style.top = `${y}px`;
    partsDiv[id].style.left = `${x}px`;
});


document.addEventListener('mousedown', function (event) {
    const target = event.target.closest('.map__part');
    if(target === null) return;

    console.log('target',target)
    let shiftX = event.clientX - target.getBoundingClientRect().left;
    let shiftY = event.clientY - target.getBoundingClientRect().top;
    target.style.position = 'absolute';
    target.style.zIndex = '100';


    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        // target.style.left = pageX + 'px';
        // target.style.top = pageY + 'px';
        target.style.left = pageX - tCoord.left - shiftX + 'px';
        target.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

    }

    document.addEventListener('mousemove', onMouseMove);

    target.onmouseup = function() {
        console.log("top", target.getBoundingClientRect().top)
        console.log("left", target.getBoundingClientRect().left - tCoord.left)
        target.style.zIndex = '1';
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
    };

});







