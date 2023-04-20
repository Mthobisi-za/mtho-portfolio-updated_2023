function displayMenu() {
    // document.querySelector('.mobile-menu').style.display = 'block';
    $(".mobile-menu").animate({
        display: 'block'
    }, 500);
}

function hideMenu() {
    document.querySelector('.mobile-menu').style.display = 'none'
}