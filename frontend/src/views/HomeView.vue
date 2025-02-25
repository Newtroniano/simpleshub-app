<template>
  <div>
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <h1 class="text-center">Encontrar CPFs em PDF</h1>
          <p class="text-muted text-center">Faça o upload de um PDF para extrair CPFs.</p>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col md="6" offset-md="3">
          <b-card class="shadow-lg border-0">
            <UploadForm @cpfs-extracted="handleCpfsExtracted" />
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col md="6" offset-md="3">
          <b-card title="CPFs Encontrados" class="shadow-lg border-0" v-if="cpfs.length > 0">
            <b-list-group>
              <b-list-group-item
                v-for="cpf in cpfs"
                :key="cpf"
                class="d-flex justify-content-between align-items-center"
              >
                {{ cpf }}
                <b-badge variant="primary" pill>{{ cpf.length }}</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>

          <!-- Mensagem de carregamento -->
          <b-alert variant="info" show v-if="loading">
            <b-spinner small></b-spinner> Carregando CPFs...
          </b-alert>

          <!-- Mensagem de erro -->
          <b-alert variant="danger" show v-if="error">
            Erro ao carregar CPFs. Tente novamente mais tarde.
          </b-alert>

          <!-- Mensagem de lista vazia -->
          <b-alert variant="warning" show v-if="!loading && cpfs.length === 0">
            Nenhum CPF encontrado.
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UploadForm from '../components/UploadForm.vue';
import ApiService from '../services/ApiService';

export default {
  components: {
    UploadForm,
  },
  data() {
    return {
      cpfs: [],
      loading: false, // Estado de carregamento
      error: false,   // Estado de erro
    };
  },
  methods: {
    handleCpfsExtracted(cpfs) {
      this.cpfs = cpfs; // Atualiza a lista de CPFs após o upload
    },
    async fetchCpfs() {
      this.loading = true; // Ativa o estado de carregamento
      this.error = false;  // Reseta o estado de erro

      try {
        const response = await ApiService.getCpfs(); // Busca os CPFs do backend

        // Extrai os CPFs do objeto retornado
        const cpfsObject = response.data.cpfs;
        this.cpfs = Object.values(cpfsObject).map(item => item.cpf);
      } catch (error) {
        console.error('Erro ao buscar CPFs:', error);
        this.error = true; // Ativa o estado de erro
      } finally {
        this.loading = false; // Desativa o estado de carregamento
      }
    },
  },
  async created() {
    await this.fetchCpfs(); // Carrega os CPFs ao abrir a página
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-weight: bold;
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(41, 10, 219, 0.1);
  border-radius: 15px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
</style>