
// =======================================================
const scrollBtn=document.createElement('button')
scrollBtn.classList.add('scroll');
scrollBtn.textContent='ВВЕРХ';
document.body.appendChild(scrollBtn);
scrollBtn.textContent='↑';

window.addEventListener('scroll',()=>{
    if(window.scrollY>1200){
        scrollBtn.classList.add('visible')
    }
    else{
        scrollBtn.classList.remove('visible')
    }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});