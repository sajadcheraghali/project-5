window.onload=function (){
    let currentslide = 1
    let slidepicture = document.getElementsByClassName('slide-picture')
  for(let i=0; i<slidepicture.length; i++){
        slidepicture[i].style.display='none'
        slidepicture[0].style.display='block'
  }
    function displaypicture(n){

    for(let i=0; i<slidepicture.length; i++){
        slidepicture[i].style.display='none'
    }
    if(currentslide>slidepicture.length){
        currentslide=1
    }
    if(currentslide<1){
        currentslide=1
    }
    slidepicture[currentslide-1].style.display='block'
}

document.getElementById('next').addEventListener('click',function(){
    currentslide++
    displaypicture(currentslide)
})
document.getElementById('prev').addEventListener('click',function(){
    currentslide--
    displaypicture(currentslide)
})
}


