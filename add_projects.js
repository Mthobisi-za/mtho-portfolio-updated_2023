const data_projects = [
    { project: 'KST', skills: ['Jquery', 'CSS', 'JavaScript', 'Wankypages', 'HTML', 'BootStrap'], github: 'https://github.com/Mthobisi-za/kst_2', site: 'https://mthobisi-za.github.io/kst_2/', status: 'in-progress', image: './src/projects/7.png' },
    { project: 'Ocean App', skills: ['Jquery', 'CSS', 'JavaScript', 'HTML', 'BootStrap'], github: 'https://github.com/Mthobisi-za/ocean-responsive', site: 'https://mthobisi-za.github.io/ocean-responsive/', status: 'done', image: './src/projects/3.png' },
    { project: 'Soweto Fast Food', skills: ['Jquery', 'CSS', 'JavaScript', 'HTML', 'BootStrap', 'NodeJs', 'Handlebars', 'Express'], github: 'https://github.com/Mthobisi-za/soweto-fast-food-market', site: 'https://sowetoffmarket.netlify.app/', status: 'in-progress', image: './src/projects/4.png' },
    { project: 'Tswara Ekac Security', skills: ['Jquery', 'CSS', 'JavaScript', 'HTML', 'BootStrap', 'Express', 'Firebase Firestore'], github: 'https://github.com/Mthobisi-za/tswara-community-website', site: 'https://tswaraekacsecurity.co.za/', status: 'done', image: './src/projects/5.png' },
    //{ project: 'Tswara Ekac Security APP', skills: [] },
    // { project: 'KST', skills: [] },
    // { project: 'KST', skills: [] },
    // { project: 'KST', skills: [] }
];

function AddProjects(obj) {
    var strName = obj.project.trim(' ').replace(/\s/g, "");

    function createP(txt) {
        var p = document.createElement('p');
        p.innerHTML = txt
        document.querySelector('.' + strName).appendChild(p)
    }
    var str = `<div class="project-item">
    <img src="${obj.image}" >
    <br>
    <p class="text-p">Tech Skills</p>
    <div class="project-skills ${strName}">
      
    </div>
    <div class="btns_projects">
    <p>
        <a target="_blank" href="${obj.site}" style="color: #fff;text-decoration: none;">View</a> </p>
    <p>
        <a target="_blank" href="${obj.github}" style="color: #fff;text-decoration: none;">Github</a> </p>
</div>
</div>`
    document.querySelector('.actual-container').insertAdjacentHTML('beforeend', str);
    obj.skills.forEach(ele => {
        createP(ele)
    })
}
data_projects.forEach(ele => { AddProjects(ele) });

function Open(txt) {
    document.querySelector('.' + txt).style.display = 'block'
}

function close_x(txt) {
    document.querySelector('.' + txt).style.display = 'none'

}