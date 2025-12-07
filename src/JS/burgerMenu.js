// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu__overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    // Открыть меню
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = 'hidden' ; // Блокируем скролл
    });
    

    // Закрыть меню
    const closeMenu = () => {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Разблокируем скролл
    };

    
    overlay.addEventListener('click', closeMenu);
    /* if(burgerBtn.classList.contains==='active'){
        burgerBtn.addEventListener('dblclick', ()=>{
            burgerBtn.classList.remove('active')
        })
    } */
    
    
    // Закрыть при клике на ссылку
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Закрыть при нажатии ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Адаптивность при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});


