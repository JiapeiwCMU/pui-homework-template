window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 200);
  }

  const mainPage=document.querySelector(".main-page")
  mainPage.addEventListener('click',function(){
    window.location.href = this.getAttribute('data-url');
  })