document.addEventListener("DOMContentLoaded",loadCover);

function loadCover(){
    const basePath = 'resources';
    const boxes = document.querySelectorAll('.container .box');
    boxes.forEach((box,index) =>{
        let albumFolder = `album${index+1}`;
        let imagePath = `${basePath}/${albumFolder}/Cover.JPG`;
        box.style.backgroundImage = `url("${imagePath}")`;
        box.style.backgroundSize = `cover`;
        box.style.backgroundPosition = `center`;
    })
}



const boxes = document.querySelectorAll('.box')
boxes.forEach(box =>{
    box.addEventListener('mouseover',(event)=>{

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
    box.addEventListener('mouseout',(event)=>{
        const parent = event.target.parentElement;
        const siblings = parent.querySelectorAll('.next1,.next2,.prev1,.prev2,.hovered');
        siblings.forEach(sibling => sibling.classList.remove('next1','next2','prev1','prev2','hovered'));
    } )
})