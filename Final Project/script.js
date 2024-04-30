import Swup from 'https://unpkg.com/swup@4?module';
import SwupParallelPlugin from 'https://unpkg.com/@swup/parallel-plugin@0?module';

// setup transition
// https://replit.com/@philippdaun/Swup-Demo-Reveal#swup.js
// const swup = new Swup({
//   containers: ["#swup"],
//   plugins: [new SwupParallelPlugin()]
// });

// swup.hooks.on('visit:start', (context) => {
//   let x = 0.5;
//   let y = 0.5;
//   const event = context.trigger.event;
//   if (event && typeof event.clientX === 'number') {
//     x = event.clientX / window.innerWidth;
//     y = event.clientY / window.innerHeight;
//   }
//   document.documentElement.style.setProperty('--click-x', x);
//   document.documentElement.style.setProperty('--click-y', y);
// });




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

    box.addEventListener('click',function(){
        box.setAttribute('data-swup-animation', 'circle');
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






