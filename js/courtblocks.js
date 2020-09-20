let courtBlocks = document.querySelectorAll('.court-block')
let searchBtn = document.getElementById('search')
let searchOverlay = document.querySelector('.searching-overlay')


searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    searchOverlay.style.display = "block";
    searchOverlay.classList.add("search-animation-overlay")
    setTimeout(function(){  
    searchOverlay.style.display = "none";
    }, 2000)
    let indoorOutdoor = document.querySelector('input[name="indoor/outdoor"]:checked')
    let freePaid = document.querySelector('input[name="free/paid"]:checked')
    let promoBlocksCheck = document.querySelector('input[name="promo"]')
    let availableBlocksCheck = document.querySelector('input[name="available-slots"]')
    let playersNeededBlocksCheck = document.querySelector('input[name="players-needed"]')
    let promoBlocks = document.querySelectorAll('.court-block-promo')
    let playersNeededBlocks = document.querySelectorAll('.court-block-players-needed')
    let availableBlocks = document.querySelectorAll('.court-block-available')
    courtBlocks.forEach(block => {
        block.style.display="none";
        if (block.getAttribute('inOut') != indoorOutdoor.value || block.getAttribute('type') != freePaid.value) {
            block.style.display="none";
        } else {
            block.style.display="block";
        }
       
    })
   
})