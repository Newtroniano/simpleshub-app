const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASEURL
});

const db = admin.database();
const cpfsRef = db.ref('cpfs');

class CpfRepository {
  static async saveCpf(cpf) {
    await cpfsRef.push({ cpf, timestamp: Date.now()});
  }

  static async getAllCpfs() {
    const snapshot = await cpfsRef.once('value');
    return snapshot.val();
  }
}

module.exports = CpfRepository;