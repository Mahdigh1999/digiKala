const stories =[{idName :'traveltoolsStory' ,id:0, sName:'تجهیزات سفر', image:'./images/story/1.png',icon:'', link:'#',storySpeed:1},
                {idName :'poodrStory' ,id:1, sName:'مکمل غذایی',  image:'./images/story/2.png',icon:'', link:'#',storySpeed:1},
                {idName :'lapTopStory' ,id:2, sName:'خرید لپ تاپ', image:'./images/story/3.png',icon:'', link:'#',storySpeed:1},
                {idName :'carsStory' ,id:3, sName:'ماشین بازها', image:'./images/story/4.png',icon:'', link:'#',storySpeed:1},
                {idName :'forSkinStory' ,id:4, sName:'پوست لطیف',   image:'./images/story/5.png',icon:'', link:'#',storySpeed:1},
                {idName :'babycloudStory' ,id:5, sName:'پوشاک کودک',  image:'./images/story/6.png',icon:'', link:'#',storySpeed:1},
                {idName :'fastSend' ,id:6, sName:'ارسال سریع',  image:'./images/story/7.png',icon:'', link:'#',storySpeed:1},
                {idName :'matchStory' ,id:7, sName:'مسابقه',      image:'./images/story/8.png',icon:'', link:'#',storySpeed:1},
                
                ];
// const divsForShowHtml = document.getElementsByClassName('initionalezor')[0].children;
const divsForShowHtml = stories.map(item => `<div class= 'circle' id = '${item.idName}'> <img  class= 'circle' src = ${item.image}> </div>`);
const innerInitionizer = divsForShowHtml.join('\n');
initionalezor.innerHTML = innerInitionizer;


const divsForShow = [];
stories.forEach(element => divsForShow.push(element.idName));
for(let div of divsForShowHtml){
    divsForShow.push(div.id);
}
// console.log(divsForShow)


let opened =false;
let rotateDeg = 90;
let pos = 0;
let storyId = {value : 0} ;
let giveMePos = 0 ;
let storiesSpeed = 0.8;
let animation;

for (let indexOfDivShow = 0 ; indexOfDivShow < divsForShow.length ; indexOfDivShow ++ ){
    for(let indexOfStory = 0 ; indexOfStory < stories.length ; indexOfStory ++ )
        if (indexOfDivShow  === indexOfStory)
            eval(divsForShow[indexOfDivShow]).onclick = function(){
                storyId.value = stories[indexOfStory].id;
                openStory();
                createFirstStory(stories[storyId.value]) ;
                console.log(indexOfDivShow , opened ,storyId)
            }
}
console.log()


function changeStory(current){
    let pre , next ; 
    if(current.id + 1  === stories.length)
        next = null;
    else{
        next = stories.find(story => story.id  === current.id + 1 );
    }
    if(current.id === storyId && storyId === 0)
        pre = null;
    // else
    else
        pre = stories.find(story => story.id === current.id - 1);
    if(next){
        if(giveMePos === 0)
            rightStory.innerHTML = htmlReturn(next);
        if(giveMePos === 1 || giveMePos === -3)
            backStory.innerHTML = htmlReturn(next);
        if(giveMePos === 2 ||   giveMePos === -2)
            leftStory.innerHTML = htmlReturn(next);
        if(giveMePos === 3 || giveMePos === -1)
            frontStory.innerHTML = htmlReturn(next);
    }
    if(pre){
        if(giveMePos === 0)
            leftStory.innerHTML = htmlReturn(pre);
        if(giveMePos === 1 || giveMePos === -3)
            frontStory.innerHTML = htmlReturn(pre);
        if(giveMePos === 2 ||   giveMePos === -2)
            rightStory.innerHTML = htmlReturn(pre);
        if(giveMePos === 3 || giveMePos === -1)
            backStory.innerHTML = htmlReturn(pre);
    }
    console.log(pre,next);


} 
function htmlReturn(object){
    return (`<div>
                <div class="exitStories" onclick = closeStory()></div>
                <div class="circleStoryInfo"><img src="${object.image}" alt="" /></div>
                <span>${object.sName}</span>
            </div>
            
            <div class="emptyTimer">
            <div class="timer"></div>
            </div>
            <a href = ${object.link}><img src = ${object.image}></a>`)
}








function createFirstStory(object){
    
    if(giveMePos === 0)
        frontStory.innerHTML = htmlReturn(object);
    if(giveMePos === 1 || giveMePos === -3)
        rightStory.innerHTML = htmlReturn(object);
    if(giveMePos === 2 ||   giveMePos === -2)
        backStory.innerHTML = htmlReturn(object);
    if(giveMePos === 3 || giveMePos === -1)
        leftStory.innerHTML = htmlReturn(object);

    //     topInfoHolder = document.createElement('div');
    //     frontStory.appendChild(topInfoHolder);
    //         exitStories = document.createElement('div');
    //         // exitStories.innerHTML = '123'
    //         exitStories.className = 'exitStories'
    //         topInfoHolder.appendChild(exitStories);
    //         circleStoryInfo = document.createElement('div');
    //         circleStoryInfo.className = 'circleStoryInfo';
    //         topInfoHolder.appendChild(circleStoryInfo);
    //             circleStoryInfoImage = document.createElement('img')
    //             circleStoryInfoImage.src = obj.image;
    //             circleStoryInfo.appendChild(circleStoryInfoImage);
    //         someInfoCircle = document.createElement('span');
    //         someInfoCircle.innerHTML = obj.sName;
    //         topInfoHolder.appendChild(someInfoCircle);
        

    //         emptyTimer = document.createElement('div');
    //         emptyTimer.className = 'emptyTimer';
    //             timer = document.createElement('div');
    //             timer.className = 'timer';
    //             emptyTimer.appendChild(timer);
    //     frontStory.appendChild(emptyTimer)

    //         anker = document.createElement('a');
    //         anker.href = obj.link;
    //             mainImage = document.createElement('img');
    //             mainImage.src = obj.image;
    //         anker.appendChild(mainImage);

    //     frontStory.appendChild(anker);
    //     frontStory.onclick = closeStory;





}    
function playStory(){
    animation = setInterval(clickRight4Story , 5000);
}
function pauseStory(){
    clearInterval(animation);
}


closeStory();
rightClick4Story.addEventListener('click',clickRight4Story);
function clickRight4Story(){
        if (opened){
        pauseStory();
        playStory();
        if(storyId.value  +1 < stories.length  ){  
            changeStory(stories[storyId.value]);
            storyId.value++;
            giveMePos >= 3 ? giveMePos = 0 :giveMePos ++ ;
            pos = pos + rotateDeg ;
            imgHolder.style =  `transform : rotateY(${-pos}deg);
                                transition: transform ${storiesSpeed}s`;
            console.log(pos ,giveMePos);}
    }
}    


leftClick4Story.addEventListener('click',clickLeftt4Story);
    
function clickLeftt4Story(){
    pauseStory();
    playStory();
    if(storyId.value > 0){
        changeStory(stories[storyId.value]);
        storyId.value--;
        // imgHolder.style.transition= 'transform 5s ease-in-out; '
        giveMePos <= -3 ? giveMePos = 0 : giveMePos--  ;
        pos = pos - rotateDeg ;
        imgHolder.style =  `transform : rotateY(${-pos}deg);
                            transition: transform ${storiesSpeed}s`;
        console.log(pos,giveMePos);
    }
}

function openStory(){
    storyHolder.style.display = 'block';
    opened = true;
    playStory();
    // console.log('clicked close');
}
function closeStory(){
    pauseStory()
    storyHolder.style.display = 'none';
    opened = false;
    console.log(storyId.value);
}






