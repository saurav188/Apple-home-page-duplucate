const search_btn=document.querySelector('#search-btn');
const exit_btn=document.querySelector('.exit-btn');
const links=Array.from(document.querySelector('.links').children);
const dark_overlay=document.querySelector('.dark-overlay');
const footer_show_btn=Array.from(document.querySelectorAll('.footer-links-show'))
const ham=document.querySelector('.ham');

search_btn.addEventListener('click',event=>{
    search_btn.parentNode.children[3].classList.remove('hider');
    links.forEach(each=>{each.classList.add('nav-animator')});
    search_btn.parentNode.children[3].classList.add('show-search-animator');
    dark_overlay.classList.remove('hider');
});
exit_btn.addEventListener('click',event=>{
    console.log
    if(ham.parentNode.classList.contains('show-ham-links')){
        ham.parentNode.classList.remove('show-ham-links');
    }else{
        search_btn.parentNode.children[3].classList.add('hider'); 
        links.forEach(each=>{each.classList.remove('nav-animator')});
        search_btn.parentNode.children[3].classList.remove('show-search-animator');
        dark_overlay.classList.add('hider');
    };
});
ham.addEventListener('click',event=>{
    ham.parentNode.classList.add('show-ham-links');
});

footer_show_btn.forEach(each_btn=>{
    each_btn.addEventListener('click',event=>{
        Array.from(event.target.parentNode.nextElementSibling.children).forEach(each=>{
            if(each.classList.contains('shower')){
                each_btn.style.transform="rotateZ(0deg)";
                each.classList.remove('shower');
            }else{
                each_btn.style.transform="rotateZ(45deg)";
                each.classList.add('shower');
            };
        });
    });
});