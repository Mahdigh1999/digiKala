mobileSearch.onclick = function(){
    console.log('mobileSearch')
    searchModal.style.bottom = '0';
    mobileHeader.style.display = 'none';
}
exitSearchModal.onclick = function(){
    searchModal.style.bottom = '-100%';
    mobileHeader.style.display = 'flex';
}