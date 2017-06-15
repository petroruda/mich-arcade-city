const functions = require('firebase-functions');
const admin = requir('firebase-admin');
admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();



// // Create User Ref when new user is created;
// // https://firebase.google.com/functions/write-firebase-functions

 exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const email = event.data.email;
    const photo = event.data.photoURL;
    const name = event.data.displayName || "https://ac-app-2a741.firebaseapp.com/images/user.jpg";

    const newUserRef = ref.child('users/${uid}');
    return newUserRef.set({
        photoURL: photo,
        email: email,
        name: name,
    })
})
