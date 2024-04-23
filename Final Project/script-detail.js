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
