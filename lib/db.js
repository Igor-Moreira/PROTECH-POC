const admin = require('firebase-admin')
//var serviceAccount = require("path/to/serviceAccountKey.json");
const serviceAccount = require('../firebase-secret.json')
const {GeoFirestore} = require('geofirestore')

//checagem da inicialização, length é a quantidade de apps que foi inicializado, 
//em caso de lenght = 0 irá inicializar o app, se não irá pular esse trecho de código
if(!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://protech-637f7.firebaseio.com"
    })
}
const firestore = admin.firestore()
const db = new GeoFirestore(firestore)

module.exports = {
    //db: db = db -> é a msm coisa que manter só db pois os nomes são iguais.
    db
}
