<template>
  <div>
    <b-form @submit.prevent="uploadFile">
      <b-form-group label="Selecione um arquivo PDF:" label-for="file-input">
        <b-form-file
          id="file-input"
          v-model="file"
          :state="Boolean(file)"
          placeholder="Escolha um arquivo ou arraste aqui..."
          drop-placeholder="Arraste o arquivo aqui..."
          accept=".pdf"
          required
        ></b-form-file>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        :disabled="!file"
        class="upload-button"
      >
        <b-icon-upload></b-icon-upload> Upload
      </b-button>

      <b-alert v-if="error" variant="danger" dismissible class="mt-3">
        {{ error }}
      </b-alert>
    </b-form>
  </div>
</template>

<script>
import ApiService from '../services/ApiService';

export default {
  data() {
    return {
      file: null,
      error: '',
    };
  },
  methods: {
    async uploadFile() {
      if (!this.file) {
        this.error = 'Por favor, selecione um arquivo PDF.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await ApiService.uploadPdf(formData);
        this.$emit('cpfs-extracted', response.data.cpfs);
        this.error = '';
      } catch (error) {
        this.error = 'Erro ao processar o PDF. Tente novamente.';
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

.upload-button {
  margin-top: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.upload-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}
</style>