const PdfService = require('../services/PdfService');
const CpfService = require('../services/CpfService');

class UploadController {
  static async uploadPdf(req, res) {
    try {
      const filePath = req.file.path;
      const cpfs = await PdfService.extractCpfFromPdf(filePath);
      await CpfService.saveCpfs(cpfs);
      res.status(200).json({ cpfs });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar o PDF' });
    }
  }

  static async listCpfs(req, res) {
    try {
      const cpfs = await CpfService.getAllCpfs();
      res.status(200).json({ cpfs });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar CPFs' });
    }
  }
}

module.exports = UploadController;