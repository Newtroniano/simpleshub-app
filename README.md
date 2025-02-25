# Teste Técnico SimplesHub

## Instalação

### Sem Docker

1. **Backend**:
   - Navegue até a pasta `backend` e instale as dependências:
     ```bash
     npm install
     ```
   - Configure o Firebase no arquivo `firebaseConfig.js`.
   - Inicie o servidor:
     ```bash
     npm start
     ```

2. **Frontend**:
   - Navegue até a pasta `frontend` e instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run serve
     ```

### Com Docker

1. Certifique-se de ter o Docker e o Docker Compose instalados.

2. No diretório raiz do projeto, execute:
   ```bash
   docker-compose up --build
