<template>
  <div>
  
    <input
      type="file"
      @change="onFileChanged($event)"
      accept="application/pdf"
      capture
      class="form-control mb-3" 
    />


    <button 
      @click="uploadFile" 
      :disabled="!file" 
      class="btn btn-success btn-lg w-100"  
    >
      <b-icon-upload></b-icon-upload> Upload
    </button>
    
    
    <p v-if="error" class="text-danger mt-3">{{ error }}</p>

  
    <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
  </div>
</template>

<script>
import ApiService from '../services/ApiService';

export default {
  data() {
    return {
      file: null,
      error: '',
      successMessage: '',
    };
  },
  methods: {
    onFileChanged(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        this.error = '';
      }
    },
    
    async uploadFile() {
      if (!this.file) {
        this.error = 'Por favor, selecione um arquivo.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await ApiService.uploadPdf(formData);
        this.successMessage = response.data.msg;
        this.error = '';

        setTimeout(() => {
          window.location.reload();
        }, 1500);

      } catch (error) {
        this.error = 'Erro ao enviar o arquivo.';
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-lg {
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.form-control {
  border-radius: 0.375rem;
  box-shadow: none;
}
</style>
