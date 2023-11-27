const bestSellings = [
                    {id:1 ,image:"./images/bestSelling/01.webp",link:"#",info:'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64'},
                    {id:2 ,image:"./images/bestSelling/02.webp",link:"#",info:'لامپ اس ام دی 12 وات سایروکس مدل A60 پایه E27 بسته دو عددی'},
                    {id:3 ,image:"./images/bestSelling/03.webp",link:"#",info:'صابون گلنار مدل روغن نارگیل بسته 6 عددی '},
                    {id:4 ,image:"./images/bestSelling/04.webp",link:"#",info:'دستمال توالت فول تایم مدل رولی بسته 24 عددی '},
                    {id:5 ,image:"./images/bestSelling/05.webp",link:"#",info:'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64'},
                    {id:6 ,image:"./images/bestSelling/06.webp",link:"#",info:'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64'},
                    {id:7 ,image:"./images/bestSelling/07.webp",link:"#",info:'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64'},
                    {id:8 ,image:"./images/bestSelling/08.webp",link:"#",info:'شامپو خفن ضد ریزش حجم دهنده و غیره و غیره '},
                    {id:9 ,image:"./images/bestSelling/09.webp",link:"#",info:'خودکار فوق روان نانو آنتی باکتریال پنتر مدل Dr.Panter کد DP-150'},
                    {id:10 ,image:"./images/bestSelling/10.webp",link:"#",info:'پنیرفتا دوشه هراز - 400 گرم'},
                    {id:11 ,image:"./images/bestSelling/11.webp",link:"#",info:'شامپو پرژگ مدل سیر حجم 450 میلی لیتر'},
                    {id:12 ,image:"./images/bestSelling/12.webp",link:"#",info:'کنسرو ماهی تن در روغن گیاهی طبیعت-180گرم بسته 4 عددی'},
                    {id:13 ,image:"./images/bestSelling/13.webp",link:"#",info:'کنسرو رب گوجه فرنگی طبیعت مقدار 800 گرم'},
                    {id:14 ,image:"./images/bestSelling/14.webp",link:"#",info:'پوشک بچه مولفیکس مدل اقتصادی سایز 4 بسته 72 عددی'},
                    {id:15 ,image:"./images/bestSelling/15.webp",link:"#",info:'مایع سفید کننده غلیظ سطوح دامستوس مدول Mountain Breeze'},
                    {id:16 ,image:"./images/bestSelling/16.webp",link:"#",info:'هدفون بوتوثی کیو سی وای مدل T13 ANC'},
                    {id:17 ,image:"./images/bestSelling/17.webp",link:"#",info:'کیسه فریزر پلانگتون کد 200451  بسته 1000 عددی'},
                    {id:18 ,image:"./images/bestSelling/18.webp",link:"#",info:'زعفران سرگل سحرخیز وزن 3 گرم'},
                    {id:19 ,image:"./images/bestSelling/01.webp",link:"#",info:'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64'},
                    {id:20 ,image:"./images/bestSelling/03.webp",link:"#",info:'صابون گلنار مدل روغن نارگیل بسته 6 عددی '},
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








