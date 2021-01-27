const admin = require('firebase-admin')
//var serviceAccount = require("path/to/serviceAccountKey.json");
const serviceAccount = require('./firebase-secret.json')
const {GeoFirestore} = require('geofirestore')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://protech-637f7.firebaseio.com"
})

const db = admin.firestore()
const dbgeo = new GeoFirestore(db)

dbgeo
    .collection('test')
    .add({
        test: 1,
        coordinates: new admin.firestore.GeoPoint(-18.919517, -48.258867)
    })
    .then(() => {
        console.log('OK')

    })

    