class CpfValidator {
    static validateFormat(cpf) {
      const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return regex.test(cpf);
    }
  }
  
  module.exports = CpfValidator;