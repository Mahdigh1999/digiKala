const interstingThingItems = [ 
                    
                    {id :0 ,iname:'دسته بندی کالاها',link:'',icon:'images/interstingThingIcons/menu_icons.png'},
                    
                    {id :1 ,iname:'شگفت‌انگیزها',link:'https://www.digikala.com/incredible-offers/',icon:'images/interstingThingIcons/discount.png'},
                    {id :2 ,iname:'سوپرمارکت',link:'https://www.digikala.com/main/food-beverage/',icon:'images/interstingThingIcons/shopping-cart.png'},
                    {id :3 ,iname:'کارت‌هدیه',link:'https://www.digikala.com/main/dk-ds-gift-card/',icon:'images/interstingThingIcons/gift-card.png'},
                    {id :4 ,iname:'پرفروش‌ترین‌ها',link:'https://www.digikala.com/best-selling/',icon:'images/interstingThingIcons/fire.png'},
                    {id :5 ,iname:'تخفیف‌ها و پیشنهاد‌ها',link:'https://www.digikala.com/promotion-center/',icon:'images/interstingThingIcons/voucher.png'},
                    {id :6 ,iname:'سوالی دارید ؟',link:'https://www.digikala.com/faq/',icon:' '},
                    {id :7,iname:'در دیجی‌کالا بفروشید!',link:'https://www.digikala.com/landings/seller-introduction/',icon:' '},

];

const maped = interstingThingItems.map(item => `<li >
                                                    <a style = 'background : url("${item.icon}") no-repeat 98% 50% ;background-size:15px' href = ${item.link}>
                                                     ${item.iname}
                                                     </a>
                                                </li>`);
const interstingThingTag = maped.join('\n');
console.log(interstingThingTag);
interstingThings.innerHTML = interstingThingTag

