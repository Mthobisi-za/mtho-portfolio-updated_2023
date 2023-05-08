var icon = 0;
const argList = [
    { name: 'Travis', industry: 'Back end developer' },
    { name: 'Heroku', industry: 'Back end developer' },
    { name: 'Firebase', industry: 'Back end developer' },
    { name: 'Netlify', industry: 'Back end developer' },
    { name: 'Figma', industry: 'Design' },
    { name: 'NodeJS', industry: 'Back end developer, Front end developer' },
    { name: 'React JS', industry: 'Front end developer' },
    { name: 'Postgresql', industry: 'Back end developer' },
    { name: 'Xampp Server', industry: 'Back end developer' },
    { name: 'Axios', industry: 'Back end developer' },
    { name: 'React Native', industry: 'Front end developer' },
    { name: 'Canva.com', industry: 'Design' },
    { name: 'Vuejs', industry: 'Front end developer' },
    { name: 'Divi wordpress child theme', industry: 'Front end developer' },
    { name: 'HTML', industry: 'Front end developer' },
    { name: 'CSS', industry: 'Front end developer' },
    { name: 'JavaScript', industry: 'Back end developer' },
    { name: 'Express js', industry: 'Front end developer, Back end developer' },
    { name: 'Unit testing', industry: 'Back end developer' },
    { name: 'Git & Github', industry: 'Back end developer' },
    { name: 'WordPress', industry: 'Front end developer' },
    { name: 'Namecheap', industry: 'Back end developer' },
    { name: 'GoDaddy', industry: 'Back end developer' },
    { name: 'Rest API', industry: 'Back end developer' },
    { name: 'PHP', industry: 'Back end developer' },
    { name: 'Jquery', industry: 'Back end developer' },
    { name: 'Bootstrap', industry: 'Front end developer' },
    { name: 'Advanced Custom Fields', industry: 'Back end developer' },
];

function createElement(content) {
    var p = document.createElement('p');
    p.classList.add('skill_item');
    p.innerText = content;
    document.querySelector('.all_skills_container').appendChild(p)
}


argList.forEach(ele => {
    createElement(ele.name);
});

function Close(txt) {
    console.log($(window).width())
    if (icon == 0) {
        icon++;
        document.querySelector('.' + txt).style.display = 'flex';
    } else if (icon == 1) {
        icon--;
        // if ($(window).width() <= 830) {
        //     document.querySelector('.' + txt).style.display = 'none';
        // } else {

        // }
        document.querySelector('.' + txt).style.display = 'none';
    }
}
// events
$('.select').on('change', function() {
    var val = this.value;
    console.log(val)
    $('.all_skills_container')[0].innerHTML = "";
    console.log(val)
    if (val === 'All') {
        argList.forEach(ele => {
            createElement(ele.name);
        })

    } else {
        argList.forEach(ele => {
            var industries = (ele.industry).split(',');
            var condition = industries.includes(val);
            // console.log(industries)
            // console.log(condition);

            if (condition) {
                createElement(ele.name);

            }
        });
    }

});