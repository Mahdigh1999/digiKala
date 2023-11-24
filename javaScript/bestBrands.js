const brands = [
    {id:1,link:'#',image:'./images/bestBrands/active.jpg'},
    {id:2,link:'#',image:'./images/bestBrands/chiniZarrinIrran.jpg'},
    {id:3,link:'#',image:'./images/bestBrands/bioaqua.png'},
    {id:4,link:'#',image:'./images/bestBrands/daevoo.jpg'},
    {id:5,link:'#',image:'./images/bestBrands/euRho.png'},
    {id:6,link:'#',image:'./images/bestBrands/active.jpg'},
    {id:7,link:'#',image:'./images/bestBrands/siliconPover.png'},
    {id:8,link:'#',image:'./images/bestBrands/kale.png'},
    {id:9,link:'#',image:'./images/bestBrands/kingStar.png'},
    {id:10,link:'#',image:'./images/bestBrands/laFarrerr.png'},
    {id:11,link:'#',image:'./images/bestBrands/mahya.jpg'},
    {id:12,link:'#',image:'./images/bestBrands/my.png'},
    {id:13,link:'#',image:'./images/bestBrands/panter.jpg'},
    {id:14,link:'#',image:'./images/bestBrands/papco.png'},
    {id:15,link:'#',image:'./images/bestBrands/pegah.png'},
    {id:16,link:'#',image:'./images/bestBrands/persil.png'},
    {id:17,link:'#',image:'./images/bestBrands/pril.png'},
    {id:18,link:'#',image:'./images/bestBrands/samsubg.jpg'},
    {id:19,link:'#',image:'./images/bestBrands/shiaomi.png'},
    {id:20,link:'#',image:'./images/bestBrands/zarMakaron.png'},
]
let brandsPos = 0;
let brandSize = 11;
brandsHolder.style.width = brands.length * brandSize + '%'
const mappedBrands = brands.map(brand => `  <a width = '${brandSize}%' href=${brand.link}>
                                                <img src=${brand.image} alt="">
                                            </a>`);
brandsHolder.innerHTML = mappedBrands.join('\n');
leftClickBrands.addEventListener('click',goLeftBrands); 
rightClickBrands.onclick = goRightBrands;

function goRightBrands(){
    brandsPos <= 1 ? rightClickBrands.className = 'hiden': rightClickBrands.className = 'show';
    brandsPos < 0 ? brandsPos += brandSize :brandsPos = 0;
    brandsHolder.style.right = `${brandsPos}%`
    console.log(brandsPos);
}
function goLeftBrands(){
    rightClickBrands.className = 'show';
    (brandsPos > -(brands.length * brandSize -100)) ? brandsPos -= brandSize : brandsPos = -(brands.length * brandSize -100);
    brandsHolder.style.right = ` ${brandsPos}%`
    console.log(brandsPos);
}