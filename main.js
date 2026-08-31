// Burger menu

const menuBtn = document.getElementById('menu-btn');
const mainMenu = document.getElementById('main-menu');
const menuIcon  = document.querySelector('#menu-btn img');
const homeLogo = document.getElementById('home-logo')



function handleMenuClick(){
    mainMenu.classList.toggle('hidden');
    if (!mainMenu.classList.contains('hidden')){
        menuBtn.setAttribute('aria-expanded', 'true');
        menuIcon.setAttribute('src', './images/icon-close.svg');
        menuBtn.setAttribute('aria-label', 'Close the menu');
        homeLogo.classList.remove('text-blue-950');
        homeLogo.classList.add('text-white');

    } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('src', './images/icon-hamburger.svg');
        menuBtn.setAttribute('aria-label' , 'Open the menu');
        homeLogo.classList.remove('text-white');
        homeLogo.classList.add('text-blue-950');
    }
    
}

menuBtn.addEventListener('click', handleMenuClick)

// Tabs

const tabs = document.querySelectorAll('[role="tab"');
const panels = document.querySelectorAll('[role="tabpanel"]')

tabs.forEach( tab => tab.addEventListener('click', ()=>{
    tabs.forEach( tab => tab.setAttribute( "aria-selected" , "false"));
    tab.setAttribute( 'aria-selected', 'true');

    panels.forEach (p => p.classList.toggle( 'hidden' , p.id !== tab.getAttribute('aria-controls')));
    panels.forEach (p => p.classList.toggle( 'flex' , p.id === tab.getAttribute('aria-controls')));
}))

// Sign up form

const signUp = document.getElementById('sign-up');
const emailError = document.getElementById('email-error');
const emailGroup = document.getElementById('email-field-group');
const email = document.getElementById('email')

function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(signUp);

    console.log(data.get('email'))
    if(!validator.isEmail(data.get('email'))){
        console.log('email invalid')
        email.setAttribute('aria-invalid', 'true');
        emailError.innerHTML = `Whoops, make sure it's an email`;
        emailGroup.classList.add('bg-red-400');
    } else { 
        email.setAttribute('aria-isvalid', 'false');
        emailError.innerHTML = `Thanks, your on our list!`;
        emailGroup.classList.remove('bg-red-400');
        email.value = ``;


    }
}

signUp.addEventListener('submit' , handleSubmit)