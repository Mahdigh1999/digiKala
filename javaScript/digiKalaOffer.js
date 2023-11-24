
// const digiOffers =[
//                 {id:0 ,link:'#',image:'./images/digikalaOffer/airobic.jpg',name:'ایروبیک'},
//                 {id:1 ,link:'#',image:'./images/digikalaOffer/computer.jpg',name:'کیس و مادربورد<'},
//                 {id:2 ,link:'#',image:'./images/digikalaOffer/console.jpg',name:'کنسول خانگی'},
//                 {id:3 ,link:'#',image:'./images/digikalaOffer/daroo.jpg',name:'مکمل دارویی'},
//                 {id:4 ,link:'#',image:'./images/digikalaOffer/headphone.jpg',name:'هدفون'},
//                 {id:5 ,link:'#',image:'"./images/digikalaOffer/mobile.jpg',name:'موبایل'},
//                 {id:6 ,link:'#',image:'./images/digikalaOffer/mokamel.jpg',name:'مکمل پروتِنی'},
//                 {id:7 ,link:'#',image:'./images/digikalaOffer/refregrator.jpg',name:'یخچال'},
//                 {id:8 ,link:'#',image:'./images/digikalaOffer/rishTarash.jpg',name:'اصلاح صورت'},
//                 {id:9 ,link:'#',image:'./images/digikalaOffer/speaker.jpg',name:'اسپیکر'},
//                 {id:10 ,link:'#',image:'./images/digikalaOffer/tablet.jpg',name:'تبلت'},
//                 {id:11 ,link:'#',image:'./images/digikalaOffer/thing.jpg',name:'یهچیزایی'},
//                 {id:12 ,link:'#',image:'./images/digikalaOffer/tv.jpg',name:'تلویزیون'},
//                 {id:13 ,link:'#',image:'./images/digikalaOffer/watch.jpg',name:'ساعت'},
// ];


let offerPos = 0 ;
// offersHolder.style.width = digiOffers.length * 6.5 + '%';
leftClickOffer.onclick = function(){
    offerPos === 40 ? offerPos = 40 : offerPos+=10;
    offersHolder.style= `transform : translateX(${offerPos}%);`; 
        
    console.log('offersLeft')
}
rightClickOffer.onclick = function(){
    offerPos === 0 ? offerPos = 0 : offerPos-=10;

    offersHolder.style= `transform : translateX(${offerPos}%);`; 
    console.log('offersright')
}

const mappedOffer = digiOffers.map(offer =>`<a href=${offer.link}>
                                                <div class = 'circle'>  
                                                    <img src=${offer.image} alt="">
                                                </div>
                                                <h3>${offer.name}</h3>
                                            </a>`

    )
offersHolder.innerHTML = mappedOffer.join('\n');

// function createOffer(offer){
//     a = document.createElement
// }




`            
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3></h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>/h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>/h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>/h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3></h3>
</a>
<a href="#">
 <div class = 'circle'><img src=" alt=""></div>
<h3></h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>مکمل پروتئینی</h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3></h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>/h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>اسپیکر</h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>تبلت</h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>یه چیزایی</h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>تلویزیون</h3>
</a>
<a href="#">
<div class = 'circle'><img src="" alt=""></div>
<h3>ساعت مچی</h3>
</a>
`