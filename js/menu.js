let hamBtn = document.querySelector('.hambtn')
let sideMenu = document.querySelector('.side-menu')
let openMenu = false;
hamBtn.addEventListener('click', ()=> {
    if(openMenu==false) {
        openMenu=true
    } else {
        openMenu = false;
    }
document.querySelector('.side-menu').classList.toggle('toggle-menu');
})


let expandUl = document.querySelectorAll('.expand-list')
expandUl.forEach(item => {
    item.addEventListener('click', event => {
        if (item.getAttribute('listTarget') == 'expand-profile') {
            item.classList.toggle('pGreen')
            document.querySelector('.profile-mobile-nav').classList.toggle('expandList')
            $('.header').addClass('header-sticky')
            
        }
        else if (item.getAttribute('listTarget') == 'expand-games') {
            item.classList.toggle('pGreen')
            document.querySelector('.my-games-mobile-nav').classList.toggle('expandList')
            $('.header').addClass('header-sticky')
        }
        else if (item.getAttribute('listTarget') == 'expand-courts') {
            item.classList.toggle('pGreen')
            document.querySelector('.courts-mobile-nav').classList.toggle('expandList')
            $('.header').addClass('header-sticky')
        }
        
    })
})

let footerMyGamesBtn= document.getElementById('myGamesFooter');
let footerProfileBtn= document.getElementById('profileFooter');;
footerMyGamesBtn.addEventListener('click', ()=>{
    hamBtn.click();
    expandUl[0].click();
})
footerProfileBtn.addEventListener('click', () => {
    hamBtn.click();
    expandUl[2].click();
})
var lastScrollTop = 0;

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
     
        if (st > lastScrollTop && openMenu==false){
         $('.header').removeClass('header-sticky')
         $('.footer-container').addClass('footer-sticky')
        } else {
            $('.footer-container').removeClass('footer-sticky')
            $('.header').addClass('header-sticky')
        }
        lastScrollTop = st;
     });






