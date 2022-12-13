
//filter
function filterSelection(c) {
    console.log(c);
    var x,i;
    x=document.getElementsByClassName('card');
    
    for(i=0; i<x.length; i++){
        removeCard(x[i], "hide")
        if(x[i].className.indexOf(c) >-1) addCard(x[i],"hide")
        console.log(x[i].className);
    }

}

function addCard(element,name)
{
    var i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i]) ==-1 )
        {
            element.className += " " + arr2[i];
        }
    }

}

function removeCard(element,name){
    var i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1)
        {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }

    element.className = arr1.join(" ");
}

/*to top button*/

//get the button
let topBtn = document.getElementsByClassName("aButton");

//move page to chosen destination

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toAboutUs(){
    document.body.scrollTop = 650;
    document.documentElement.scrollTop = 650;
}

function toGames(){
    document.body.scrollTop = 1195;
    document.documentElement.scrollTop = 1195;
}

function toTournament(){
    document.body.scrollTop = 2480;
    document.documentElement.scrollTop = 2480;
}

function toContact(){
    document.body.scrollTop = 3502;
    document.documentElement.scrollTop = 3502;
}


