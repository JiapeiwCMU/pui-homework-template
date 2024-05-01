
window.onload = () => {
  const transition_el = document.querySelector('.transition');
  // const anchors = document.querySelectorAll('a')
  // console.log("anchors:",anchors)

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  // for(let i=0;i<anchors.length;i++){
  //   const anchor = anchors[i];
  //   anchor.addEventListener('click',e => {
  //     e.preventDefault();
  //     let target = e.target.href;
  //     console.log(target)
  //   })
  // }
}

function makeAlbumPaths(albumCount, totalImages) {
  const albums = {};
  for (let i=1; i<=albumCount; i++) {
    const albumNumber = `album${i}`;
    const imagePaths = [];
    let currentAlbum=albumAltTexts[i-1]
    for (let img = 1; img <= totalImages; img++) {
      // let thisImage = "resources/"+albumNumber+"/"+img+".JPG"
      let imagePath = {
        src:"resources/"+albumNumber+"/"+img+".JPG",
        alt:currentAlbum[img-1]
      }
      imagePaths.push(imagePath)
    }
    albums[albumNumber] = imagePaths;
  }
  return albums;
}

const mainPage=document.querySelector(".main-page")
mainPage.addEventListener('click',function(){
  window.location.href = this.getAttribute('data-url');
})
const aboutPage=document.querySelector(".about-page")
aboutPage.addEventListener('click',function(){
  window.location.href = this.getAttribute('data-url');
})

// Make the albums using the function
const albums = makeAlbumPaths(7, 12);

// Editing the html to display the albums chosen
function generateAlbumHTML(albumImages) {
  const container = document.createElement('div');

  container.className = 'container';

  albumImages.forEach((image, index) => {
    const photoDiv = document.createElement('div');
    photoDiv.className = "photo img"+(index+1);
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
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
imgContainer.forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-img').style.display='block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
    document.querySelector('.popup-img img').src = image.getAttribute('alt');


  }
  document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display='none';
  }

})


const albumName= document.querySelector('.album-title')
albumName.innerHTML=currentAlbum