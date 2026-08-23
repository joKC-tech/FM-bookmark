const menuBtn = document.getElementById('menu-btn');
const mainMenu = document.getElementById('main-menu');
const menuIcon  = document.querySelector('#menu-btn img')


function handleMenuClick(){
    mainMenu.classList.toggle('hidden');
    if (!mainMenu.classList.contains('hidden')){
        menuBtn.setAttribute('aria-expanded', 'true');
        menuIcon.setAttribute('src', './images/icon-close.svg');
        menuBtn.setAttribute('aria-label', 'Close the menu')
    } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('src', './images/icon-hamburger.svg');
        menuBtn.setAttribute('aria-label' , 'Open the menu')
    }
    
}

menuBtn.addEventListener('click', handleMenuClick)


const tabs = document.querySelectorAll('[role="tab"');
const panels = document.querySelectorAll('[role="tabpanel"]')

tabs.forEach( tab => tab.addEventListener('click', ()=>{
    tabs.forEach( tab => tab.setAttribute( "aria-selected" , "false"));
    tab.setAttribute( 'aria-selected', 'true');

    panels.forEach (p => p.classList.toggle( 'hidden' , p.id !== tab.getAttribute('aria-controls')));
    panels.forEach (p => p.classList.toggle( 'flex' , p.id === tab.getAttribute('aria-controls')));
}))

