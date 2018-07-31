const logIn_button = document.querySelector("#log-in-button")
const logOut_button = document.querySelector("#log-out-button")

logIn_button.addEventListener('click', e =>{
    signInWithGoogle()
})
logOut_button.addEventListener('click', e =>{
    signOutWithGoogle()
})

const navBar = document.querySelector("#navBar")
function updateSignIn(avatarSrc){
    logIn_button.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}" /></I>`
}
function updateSignOut(){
    navBar.innerHTML = `<i class="material-icons">more_vert</i>`
}