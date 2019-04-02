let imageIndex = 0;
window.onload = showImages(imageIndex);

function slide(index) {
  showImages(imageIndex += index);
}

function showImages(index) {
  const images = document.querySelectorAll('.images');
  const dots = document.querySelectorAll('.dots');

  // reset all display to none
  for(let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // reset image index if we hit either end
  if(imageIndex >= images.length) {
    imageIndex = 0;
  } else if(imageIndex < 0) {
    imageIndex = images.length - 1;
  }

  images[imageIndex].style.display = 'block';
  
  for(let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  dots[imageIndex].classList.add('active');
}

 

