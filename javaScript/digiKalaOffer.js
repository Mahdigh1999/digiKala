
const digiOffers =[
                {id:0 ,link:'#',image:'./images/digikalaOffer/airobic.jpg',name:'ایروبیک'},
                {id:1 ,link:'#',image:'./images/digikalaOffer/computer.jpg',name:'کیس و مادربورد'},
                {id:2 ,link:'#',image:'./images/digikalaOffer/console.jpg',name:'کنسول خانگی'},
                {id:3 ,link:'#',image:'./images/digikalaOffer/daroo.jpg',name:'مکمل دارویی'},
                {id:4 ,link:'#',image:'./images/digikalaOffer/headphone.jpg',name:'هدفون'},
                {id:5 ,link:'#',image:'./images/digikalaOffer/mobile.jpg',name:'موبایل'},
                {id:6 ,link:'#',image:'./images/digikalaOffer/mokamel.jpg',name:'مکمل پروتِنی'},
                {id:7 ,link:'#',image:'./images/digikalaOffer/refregrator.jpg',name:'یخچال'},
                {id:8 ,link:'#',image:'./images/digikalaOffer/rishTarash.jpg',name:'اصلاح صورت'},
                {id:9 ,link:'#',image:'./images/digikalaOffer/speaker.jpg',name:'اسپیکر'},
                {id:10 ,link:'#',image:'./images/digikalaOffer/tablet.jpg',name:'تبلت'},
                {id:11 ,link:'#',image:'./images/digikalaOffer/thing.jpg',name:'یهچیزایی'},
                {id:12 ,link:'#',image:'./images/digikalaOffer/tv.jpg',name:'تلویزیون'},
                {id:13 ,link:'#',image:'./images/digikalaOffer/watch.jpg',name:'ساعت'},
                // {id:12 ,link:'#',image:'./images/digikalaOffer/tv.jpg',name:'تلویزیون'},
                // {id:13 ,link:'#',image:'./images/digikalaOffer/watch.jpg',name:'ساعت'},
];
// var w = window.innerWidth;  
// console.log('Width',w)
let sizeOfPairs =198;
// w > 1000 ? sizeOfPairs = 14 : sizeOfPairs=30;
let pairOffers = [];
for(let i = 0 ; i < digiOffers.length;i+=2){
    pairOffers.push(`<div style='width:${sizeOfPairs}px;' class="pair">
                         <a href=${digiOffers[i].link}>
                            <div class = 'circle'>
                                <img src=${digiOffers[i].image} alt="">
                            </div>
                            <h3> ${digiOffers[i].name}</h3>
                        </a>
                        <a href=${digiOffers[i+1].link}>
                            <div class = 'circle'>
                                <img src=${digiOffers[i+1].image} alt="">
                             </div>
                            <h3> ${digiOffers[i+1].name}</h3>
                        </a>
</div>`)
}
// console.log(pairOffers);
offersHolder.innerHTML = pairOffers.join('\n');
offersHolder.style.width = (sizeOfPairs * Math.ceil(digiOffers.length /2)) + 'px';





let offerPos = 0 ;
// offersHolder.style.width = digiOffers.length * 6.5 + '%';
leftClickOffer.onclick = function(){
    offerPos >= sizeOfPairs * Math.ceil(digiOffers.length /2) - window.innerWidth ? offerPos : offerPos+=sizeOfPairs;
    offersHolder.style.transform= `translateX(${offerPos}px)`; 
    rightClickOffer.style.display = 'block'
    offerPos >= sizeOfPairs * Math.ceil(digiOffers.length /2) - window.innerWidth?leftClickOffer.style.display = 'none':leftClickOffer.style.display = 'block';
    console.log('offersLeft',offerPos)
}
rightClickOffer.onclick = function(){
    offerPos < 1  ? offerPos = 0 : offerPos -= sizeOfPairs;
    offersHolder.style.transform= `translateX(${offerPos}px)`; 
    leftClickOffer.style.display = 'block'
    offerPos >  0 ? rightClickOffer.style.display = 'block':rightClickOffer.style.display ='none' ;
    console.log('offersLeft',offerPos)
}
// rightClickOffer.onclick = function(){
//     offerPos === 0 ? offerPos = 0 : offerPos-=10;

//     offersHolder.style= `transform : translateX(${offerPos}%);`; 
//     console.log('offersright')
// }

// const mappedOffer = digiOffers.map(offer =>`<a href=${offer.link}>
//                                                 <div class = 'circle'>  
//                                                     <img src=${offer.image} alt="">
//                                                 </div>
//                                                 <h3>${offer.name}</h3>
//                                             </a>`

//     )
// offersHolder.innerHTML = mappedOffer.join('\n');

// // function createOffer(offer){
// //     a = document.createElement
// // }



