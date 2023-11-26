const bestSellings = [
                    {id:1 ,image:"./images/bestSelling/01.webp",link:"#",info:'آیتم اول............................... ................................'},
                    {id:2 ,image:"./images/bestSelling/02.webp",link:"#",info:'آیتم دوم............................... ........................'},
                    {id:3 ,image:"./images/bestSelling/03.webp",link:"#",info:'آیتم سوم.............................. .............................................'},
                    {id:4 ,image:"./images/bestSelling/04.webp",link:"#",info:'آیتم چهارم............................ ..............................'},
                    {id:5 ,image:"./images/bestSelling/05.webp",link:"#",info:'آیتم پتجم............................. ...................................'},
                    {id:6 ,image:"./images/bestSelling/06.webp",link:"#",info:'آیتم ششم.............................. .........................'},
                    {id:7 ,image:"./images/bestSelling/07.webp",link:"#",info:'آیتم هفتم............................. ........................'},
                    {id:8 ,image:"./images/bestSelling/08.webp",link:"#",info:'آیتم هشتم.............................. ...........................'},
                    {id:9 ,image:"./images/bestSelling/09.webp",link:"#",info:'آیتم نهم.............................. ................................'},
                    {id:10 ,image:"./images/bestSelling/10.webp",link:"#",info:'آیتم دهم............................. ...........................'},
                    {id:11 ,image:"./images/bestSelling/11.webp",link:"#",info:'آیتم یازدهم.......................... ....................'},
                    {id:12 ,image:"./images/bestSelling/12.webp",link:"#",info:'آیتم دوازدهم......................... .................................'},
                    {id:13 ,image:"./images/bestSelling/13.webp",link:"#",info:'آیتم سیزدهم.......................... .................................'},
                    {id:14 ,image:"./images/bestSelling/14.webp",link:"#",info:'آیتم چهاردهم......................... ......................................'},
                    {id:15 ,image:"./images/bestSelling/15.webp",link:"#",info:'آیتم پانزدهم......................... .......................................'},
                    {id:16 ,image:"./images/bestSelling/16.webp",link:"#",info:'آیتم شانزدهم......................... ...................................'},
                    {id:17 ,image:"./images/bestSelling/17.webp",link:"#",info:'آیتم هفدهم........................... .............................'},
                    {id:18 ,image:"./images/bestSelling/18.webp",link:"#",info:'آیتم هجدهم............................ .....................................'},
                    {id:19 ,image:"./images/bestSelling/01.webp",link:"#",info:'آیتم نوزدهم.......................... ...............................'},
                    {id:20 ,image:"./images/bestSelling/03.webp",link:"#",info:'آیتم بیستم........................... .............................................'},
];
let sizeOfBestSellingHolder = Math.ceil(bestSellings.length / 3) * 25;

bestSellingHolder.style.width = sizeOfBestSellingHolder + '%';
let bestSellingHolderInnerHtml = ``;

const mappedBestSelling = bestSellings.map(bestSelling => `<a style='width:100% ' href=${bestSelling.link}>
                                                            <img src=${bestSelling.image} alt="">
                                                            <span>${bestSelling.id}</span>
                                                            <div><p>${bestSelling.info}</p></div>
                                                            </a>`);
let triad; 
for(let i = 0;i<mappedBestSelling.length; i+=3){
   triad = `<div style='width:25% 'class="triad" > ${mappedBestSelling[i]} ${mappedBestSelling[i+1]} ${mappedBestSelling[i+2]}</div>`;
   bestSellingHolderInnerHtml += triad;
}
bestSellingHolder.innerHTML = bestSellingHolderInnerHtml;
// console.log(mappedBestSelling);




// let oneTriadSizeOfAll =  (25 * 100)/sizeOfBestSellingHolder



let bestSellingsHolderPosition = 0;
bestSellingGoLeft.addEventListener('click',bestSellingClickLeft);
bestSellingGoRight.addEventListener('click',bestSellingClickRight);
function bestSellingClickLeft(){
   console.log(bestSellingsHolderPosition)
   bestSellingsHolderPosition < sizeOfBestSellingHolder -100?bestSellingsHolderPosition+=25:bestSellingsHolderPosition=bestSellingsHolderPosition;
   bestSellingHolder.style.right = `${-bestSellingsHolderPosition}%`;
   bestSellingsHolderPosition-sizeOfBestSellingHolder  === 0 ? bestSellingGoLeft.className = 'hiden' : bestSellingGoLeft.className = 'show' ;
   bestSellingsHolderPosition  > 1 ? bestSellingGoRight.className ='show'  : bestSellingGoRight.className = 'hiden' ;
}
function bestSellingClickRight(){
   console.log(bestSellingsHolderPosition)
   bestSellingsHolderPosition > 0 ?bestSellingsHolderPosition-=25:bestSellingsHolderPosition=bestSellingsHolderPosition;
   bestSellingHolder.style.right = `${-bestSellingsHolderPosition}%`;
   bestSellingsHolderPosition-sizeOfBestSellingHolder  === 0 ? bestSellingGoLeft.className = 'hiden' : bestSellingGoLeft.className = 'show' ;
   bestSellingsHolderPosition  > 1 ? bestSellingGoRight.className ='show'  : bestSellingGoRight.className = 'hiden' ;
 
}








