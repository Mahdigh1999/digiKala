fakeDivSearch.addEventListener("click",showSearch);
exitFromSearch.addEventListener("click",hideSearch);

function showSearch(){
    divSearch.className = "show";
}
function hideSearch(){
    // divSearch.className = '';
    divSearch.className = "hiden";
    console.log('clicked');
}