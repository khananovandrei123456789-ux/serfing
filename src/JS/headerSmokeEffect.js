const navHeader=document.querySelector('.navigationHead')
const headerSmoke=document.querySelector('.mainContainer')

navHeader.addEventListener('mouseenter',()=>{
    headerSmoke.classList.add('header-is-mouseenter')
    console.log('mouseenter good')
})

navHeader.addEventListener('mouseleave',()=>{
    headerSmoke.classList.remove('header-is-mouseenter')
    console.log('mouseenter good')
})

