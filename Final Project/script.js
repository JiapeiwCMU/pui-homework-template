import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup({
  containers: ["#swup"]
});

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
        // box.setAttribute('data-swup-transition', );
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



// Album Detail, Displaying photos

function makeAlbumPaths(albumCount, totalImages) {
  const albums = {};
  for (let i=1; i<=albumCount; i++) {
    const albumNumber = `album${i}`;
    const imagePaths = [];
    for (let img = 1; img <= totalImages; img++) {
      let thisImage = "resources/"+albumNumber+"/"+img+".JPG"
      imagePaths.push(thisImage)
    }
    albums[albumNumber] = imagePaths;
  }
  return albums;
}

const mainPage=document.querySelector(".main-page")
mainPage.addEventListener('click',function(){
  window.location.href = this.getAttribute('data-url');
})

// Make the albums using the function
const albums = makeAlbumPaths(7, 12);
console.log("albums:",albums);

// Editing the html to display the albums chosen
function generateAlbumHTML(albumImages) {
  const container = document.createElement('div');

  container.className = 'container';
  console.log("albumImages:",albumImages)

  albumImages.forEach((imageSrc, index) => {
    const photoDiv = document.createElement('div');
    photoDiv.className = "photo img"+(index+1);
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.objectFit = 'cover';
    img.style.borderRadius = '10px';
    photoDiv.appendChild(img);
    container.appendChild(photoDiv);
  });
  return container;
}

// Get the current album displayed
function getCurrentAlbum(){
  const queryString = window.location.search;
  const album = queryString.substring(1)
  console.log("current album:",album)
  return album
}

// load the current images in the current album
const currentAlbum = getCurrentAlbum(); 
let currentImages = albums[currentAlbum]
const albumHTML = generateAlbumHTML(currentImages);
const photoDisplay = document.querySelector('.photo-display');
photoDisplay.appendChild(albumHTML);

// Displaying the popup image when clicking onto one page, and close when clicking the X
let imgContainer = document.querySelectorAll('.container img')
console.log("container:",imgContainer)
imgContainer.forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-img').style.display='block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');

  }
  document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display='none';
  }

})
