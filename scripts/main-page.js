filterSelection('all')

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
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }

    element.className = arr1.join(" ");
}