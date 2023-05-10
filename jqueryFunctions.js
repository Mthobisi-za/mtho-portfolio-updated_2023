function displayHomePage() {
    $(".home_page")[0].style.display = 'flex';
    $(".home_page").animate({
        maxWidth: '100%',
        opacity: 1
    }, 1000);
    console.log('displaying home');

}

function displayAboutPage() {
    $(".about_page")[0].style.display = 'flex'
    $(".about_page").animate({ maxWidth: '100%', opacity: 1 }, 1000);
    console.log('displaying About')
        // Class list toggle for animations
        // Class list toggle for animations
}

function displayServicesPage() {
    // $(".about_me").show();
    console.log('displaying Services')
}

function displayCotactPage() {
    // $(".about_me").show();
    console.log('displaying contact')
}

function ChangeBgBtn(event) {
    document.querySelector('.mobile-menu').style.display = 'none';
    var classes = document.querySelectorAll('.btn-menu');
    classes.forEach(ele => {
        ele.style.color = 'white';

    });
    var classesMobile = document.querySelectorAll('.m-bt');
    classes.forEach(ele => {
        ele.style.color = 'white';

    });
    document.querySelectorAll('.body-home').forEach(ele => {
        ele.style.display = 'none';
        ele.style.maxWidth = 0;
        ele.style.opacity = 0;
    });
    event.style.color = '#088395';
    console.log(event.innerText);
    if (event.innerText === 'HOME') displayHomePage()
    else if (event.innerText === 'ABOUT ME') displayAboutPage()
    else if (event.innerText === 'SERVICES') displayServicesPage()
    else if (event.innerText === 'CONTACT ME') displayCotactPage()
    document.querySelectorAll('.mobile-menu').style.display = 'none';
}