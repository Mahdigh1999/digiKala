//get id from html dom
const leftHandMenuHtmlcollection = document.getElementsByClassName('leftHandMenu').leftHandMenu.children;
const rightHandMenuHtmlcollection = document.getElementsByClassName('rightHandMenu').rightHandMenu.children;
// const test = document.getElementById('leftHandMenu');
const rightHandMenu = [] ;
const leftHandMenu = [];
for(let ids of leftHandMenuHtmlcollection)
    leftHandMenu.push(ids.id)
for(let ids of rightHandMenuHtmlcollection)
    rightHandMenu.push(ids.id)

// ids.
// console.log(typeof leftHandMenuHtmlcollection[0].id);
// console.log(rightHandMenuHtmlcollection);
// console.log(leftHandMenu);
// console.log(rightHandMenu);
let zIndexCounter = 1;
//display 1 v 1 menu rightthand ----> lefthand
console.log(typeof mobile);
for (let i = 0 ; i<rightHandMenu.length;i++){
    // console.log(typeof eval(rightHandMenu[i]));
    eval(rightHandMenu[i]).onmouseover = function(){
        zIndexCounter ++ ;
        eval(leftHandMenu[i]).style.zIndex = zIndexCounter;
        console.log(zIndexCounter);
    }
}
