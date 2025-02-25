const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json'); // Chave do Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<seu-database>.firebaseio.com'
});

const db = admin.database();
const cpfsRef = db.ref('cpfs');

class CpfRepository {
  static async saveCpf(cpf) {
    await cpfsRef.push({ cpf, timestamp: Date.now() });
  }

  static async getAllCpfs() {
    const snapshot = await cpfsRef.once('value');
    return snapshot.val();
  }
}

module.exports = CpfRepository;