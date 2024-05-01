// Transition
window.onload = () => {
  const transition_el = document.querySelector('.transition');
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 200);
}


// Load the album covers
document.addEventListener("DOMContentLoaded",loadCover);

function loadCover(){
    const basePath = 'resources';
    const boxes = document.querySelectorAll('.container .box');

    // set the album covers for each album box
    boxes.forEach((box,index) =>{
        let albumFolder = "album"+(index+1)
        let imagePath = basePath+"/"+albumFolder+"/Cover.JPG";
        // set the style dynamically
        box.style.backgroundImage = `url("${imagePath}")`;
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
    })
}

const boxes = document.querySelectorAll('.box')
boxes.forEach(box =>{
    box.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    })
    box.addEventListener('mouseenter',(event)=>{
        const prevSibling = event.target.previousElementSibling;
        const prevPrevSibling = prevSibling?.previousElementSibling;

        const nextSibling = event.target.nextElementSibling;
        const nextNextSibling = nextSibling?.nextElementSibling;

        event.target.classList.add('hovered')

        // add prev2 class to the element before previous
        if(prevPrevSibling){
            prevPrevSibling.classList.add('prev2');  
        }
        // add prev1 class to the element to the previous element
        if(prevSibling){
            prevSibling.classList.add('prev1');  
        }
        // add next2 class to the element after next
        if(nextNextSibling){
            nextNextSibling.classList.add('next2');  
        }
        // add next1 class to the element to the next element
        if(nextSibling){
            nextSibling.classList.add('next1');  
        }
    })
    
    box.addEventListener('mouseleave',(event)=>{
        const parent = event.target.parentElement;
        const siblings = parent.querySelectorAll('.next1,.next2,.prev1,.prev2,.hovered');
        siblings.forEach(sibling => sibling.classList.remove('next1','next2','prev1','prev2','hovered'));
    } )
})


// load About page
const aboutPage=document.querySelector(".about-page")
aboutPage.addEventListener('click',function(){
  window.location.href = this.getAttribute('data-url');
})
