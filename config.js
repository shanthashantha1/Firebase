
var admin = require("firebase-admin");

var serviceAccount = require("./jiolll-firebase-adminsdk-3tiy2-40b262b4fb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  dbURL:  "http://console.firebase.google.com/project/jiolll/firestore/data/~2F"
});

module.exports = {
  admin: admin,
  db: admin.firestore()
};

