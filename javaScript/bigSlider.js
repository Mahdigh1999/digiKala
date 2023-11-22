let sliderPostion;
let lastSwitched = 0;
const bigSlider = [
    {id:0, imageAddress:'./images/bigSlider/01.jpg' , link : '#'},
    {id:1, imageAddress:'./images/bigSlider/02.jpg' , link : '#'},
    {id:2, imageAddress:'./images/bigSlider/03.gif' , link : '#'},
    {id:3, imageAddress:'./images/bigSlider/04.jpg' , link : '#'},
    {id:4, imageAddress:'./images/bigSlider/05.jpg' , link : '#'},
    {id:5, imageAddress:'./images/bigSlider/06.jpg' , link : '#'},
    {id:6, imageAddress:'./images/bigSlider/07.jpg' , link : '#'},
    {id:7, imageAddress:'./images/bigSlider/08.jpg' , link : '#'},
    {id:8, imageAddress:'./images/bigSlider/09.jpg' , link : '#'},
    {id:9, imageAddress:'./images/bigSlider/10.jpg' , link : '#'},
    
]
const mappedFromBigSlider = bigSlider.map(e => `<a href = ${e.link}><img src = ${e.imageAddress}> </a>`)
bigSliderGallery.innerHTML = mappedFromBigSlider.join('\n');
bigSliderGallery.style.width = (bigSlider.length * 100) + '%';
bigSliderGallery.style.right = (bigSlider.length - 1 ) *100 +'%';



const divSwitched = bigSlider.map(e => `<div class = 'circle' id = BSS${e.id} onclick = bigSliderChanger(${e.id})></div>`);

console.log(divSwitched);
switcherSlider.innerHTML = divSwitched.join('');
console.log(divSwitched.join('\n'));

function bigSliderChanger(number){
    sliderPostion = number * 100;
    bigSliderGallery.style.right = sliderPostion +'%';
    console.log(sliderPostion);

    
    eval('BSS' + lastSwitched).className = 'circle'
    eval('BSS' + number).className = 'circle switched'
    lastSwitched = number;
}














sliderPostion = (bigSlider.length - 1) * 100;


console.log(sliderPostion);
bigSliderGoRight.onclick = moveRight4BigSlider;
bigSliderGoLeft.onclick = moveLeft4BigSlider;
let animationSilder;

playBigSlider();
function playBigSlider(){
    animationSilder = setInterval('moveLeft4BigSlider()',3000);
}
function pauseBigSlider(){
    clearInterval(animationSilder)
}
bigSliderGoRight.onmouseover = function(){pauseBigSlider()};
bigSliderGoRight.onmouseout = function(){playBigSlider()};
bigSliderGoLeft.onmouseover = function(){pauseBigSlider()};
bigSliderGoLeft.onmouseout = function(){playBigSlider()};

bigSliderGallery.onmouseover = function(){
    pauseBigSlider();
}
bigSliderGallery.onmouseout = function(){
    playBigSlider();
}


function moveRight4BigSlider(){


    console.log(sliderPostion);
    sliderPostion === ((bigSlider.length -1 ) * 100 ) ? sliderPostion =0 : sliderPostion +=100;
    bigSliderGallery.style.right = sliderPostion + '%';
    eval('BSS' + lastSwitched).className = 'circle'
    eval('BSS' + sliderPostion / 100).className = 'circle switched'
    lastSwitched = sliderPostion /100;
}
function moveLeft4BigSlider(){    
    console.log(sliderPostion);
    sliderPostion === 0 ? sliderPostion =  ((bigSlider.length -1 ) * 100): sliderPostion -=100;
    bigSliderGallery.style.right = sliderPostion + '%';
    eval('BSS' + lastSwitched).className = 'circle'
    eval('BSS' + sliderPostion / 100).className = 'circle switched'
    lastSwitched = sliderPostion /100;
}

switcherSlider.onmouseover = function(){
    pauseBigSlider();
}
switcherSlider.onmouseout = function(){
    playBigSlider();
}