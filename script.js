let tablinks = document.querySelectorAll(".tab-links")
let tabcontents = document.querySelectorAll(".tab-contents")
/*let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")*/

function clickme(tabname){
    for(item of tablinks){
        item.classList.remove("active-links")
    }
    for(items of tabcontents){
        items.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-links")
    let name = document.getElementById(tabname).classList.add("active-tab")//once you click on experience and education tab, all the informations will be displaying
    }