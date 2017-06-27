const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();



// // Create User Ref when new user is created;
// // https://firebase.google.com/functions/write-firebase-functions

 exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const email = event.data.email || "";
    const phone = event.data.phoneNumber || "";
    const photo = event.data.photoURL || "https://ac-app-2a741.firebaseapp.com/images/user.jpg";
    const name = event.data.displayName || "";

    const newUserRef = ref.child('users/' + uid);
    return newUserRef.set({
        photoURL: photo,
        email: email,
        phoneNumber: phone,
        displayName: name,
        active: false
    })
})
