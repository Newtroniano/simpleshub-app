const PdfService = require('../services/PdfService');
const CpfService = require('../services/CpfService');

class CpfController {

    static async listCpfs(req, res) {
        try {
          const cpfs = await CpfService.getAllCpfs();
          res.status(200).json({ cpfs });
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar CPFs' });
        }
      }

}

module.exports = CpfController;