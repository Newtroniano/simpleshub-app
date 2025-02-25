const CpfRepository = require('../repositories/CpfRepository');

class CpfService {
  static async saveCpfs(cpfs) {
    for (const cpf of cpfs) {
      await CpfRepository.saveCpf(cpf);
    }
  }

  static async getAllCpfs() {
    return await CpfRepository.getAllCpfs();
  }
}

module.exports = CpfService;