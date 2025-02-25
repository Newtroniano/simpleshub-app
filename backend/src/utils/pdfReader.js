const fs = require('fs');
const pdf = require('pdf-parse');
const cpfValidator = require('../utils/cpfValidator');

class PdfService {
  static async extractCpfFromPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
    const cpfs = data.text.match(cpfRegex) || [];
    return cpfs.filter(cpf => cpfValidator.validateFormat(cpf));
  }
}

module.exports = PdfService;