const logIn_button = document.querySelector("#login_button")
const logOut_button = document.querySelector("#logout_button")
const log_in_for_tourists_button = document.querySelector('#log_in_as_tourist')
const log_in_for_tour_guides_button = document.querySelector('#log_in_as_tour_guide')
const avatarIconSpot = document.querySelector('#avatar-icon-spot')


log_in_for_tourists_button.addEventListener('click', e => {
    console.log('log in')
    signInWithGoogle('tourist')
})

log_in_for_tour_guides_button.addEventListener('click', e => {
    console.log('log in')
    signInWithGoogle('guide')
})
// logIn_button.addEventListener('click', e =>{

//     //signInWithGoogle()
// })
logOut_button.addEventListener('click', e => {
    signOutWithGoogle()
})

const navBar = document.querySelector("#navBar")

function updateSignIn(avatarSrc) {
avatarIconSpot.classList.remove('hidden') 
avatarIconSpot.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}"/></i>`
    logIn_button.classList.add('hidden')
    // logIn_button.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}" /></i>`
    logOut_button.classList.remove('hidden')
}

function updateSignOut() {
    logIn_button.classList.remove('hidden')
    logOut_button.classList.add('hidden')
    avatarIconSpot.classList.add('hidden')
    // logIn_button.innerHTML = 
    // `
    // <a href="#" class="dropdown-toggle" data-toggle="dropdown">LOG IN</a>
    // <ul class="dropdown-menu">
    //     <li><a href="#" id="log_in_as_tourist">LOG IN AS TOURIST</a></li>
    //     <li><a href="#" id="log_in_as_tour_guide">LOG IN AS TOUR GUIDE</a></li>
    // </ul>     
    // `
}
