// Using a popup.
const database = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function() {
    initializeApp()
}

function initializeApp() {
    auth.onAuthStateChanged(function(user) {
        if (user) {
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
            // getUserInfo(userId)
        }
        else {
            updateSignOut()
        }
    })

}

function signInWithGoogle(type) {
    console.log('sign in')
    auth.signInWithPopup(provider)
        .then(function(result) {
            // // This gives you a Google Access Token.
            // var token = result.credential.accessToken
            // // The signed-in user info.
            // var user = result.user
            // const avatarSrc = user.photoURL
            // const name = user.displayName
            // const email = user.email
            // const userId = user.uid
            // const userInfo = {
            //     name: name,
            //     id: userId,
            //     photoURL: avatarSrc,
            //     email: email
            // }
            // addUserToDatabase(userInfo, userId, type)
            // updateSignIn(avatarSrc)
        })
        .catch(err => console.log())
}


function addUserToDatabase(userInfo, userId, type) {
    if (type) {
        userInfo[type] = true
    }
    //get a refrence to the collection you need
    const userCollectionRef = database.collection('users')
    //create a document in that collection
    const newUserRef = userCollectionRef.doc(userId)
    //set the info equal to what you want
    newUserRef.set(userInfo, {merge: true})
}

function signOutWithGoogle() {
    auth.signOut()
    console.log('sign out')
}
