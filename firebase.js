// Using a popup.
const database = firebase.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function() {
    initializeApp()
}

function initializeApp() {
    auth.onAuthStateChanged(function(user) {
        if (user) {
            // updateForSignIn()
            const avatarSrc = user.photoURL
            const name = user.displayName
            const email = user.email
            const userId = user.uid
            const userInfo = {
                name: name,
                id: userId,
                photoURL: avatarSrc,
                email: email
            }
            addUserToDatabase(userInfo, userId)
        }
        else {
            // updateforSignOut()
        }
    })

}

function signInWithGoogle() {
    auth.signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken
            // The signed-in user info.
            var user = result.user
            const avatarSrc = user.photoURL
            const name = user.displayName
            const email = user.email
            const userId = user.uid
            const userInfo = {
                name: name,
                id: userId,
                photoURL: avatarSrc,
                email: email
            }
            addUserToDatabase(userInfo, userId)
            updateSignIn(avatarSrc)
        })
}


function addUserToDatabase(userInfo, userId) {
    //get a refrence to the collection you need
    const userCollectionRef = database.collection('users')
    //create a document in that collection
    const newUserRef = userCollectionRef.doc(userId)
    //set the info equal to what you want
    newUserRef.set(userInfo)
}

function signOutWithGoogle() {
    auth.signOut()
    console.log('sign out')
}
