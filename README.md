
# SimplesHub Test - Upload e Extração de CPFs

Este projeto é uma Single-Page Application (SPA) desenvolvida para processar arquivos PDF, extrair CPFs válidos e armazená-los no Firebase Realtime Database. A aplicação foi construída seguindo os princípios SOLID e utiliza Docker para facilitar a execução em diferentes ambientes.

## Tecnologias Utilizadas

-   **Frontend:** Vue 2 (Options API) + SCSS
    
-   **Backend:** Node.js + Express
    
-   **Banco de Dados:** Firebase Realtime Database
    
-   **Docker:** Para conteinerização da aplicação
    

## Formato do Documento Lido

Para testar a extração de CPFs, utilize este [PDF de exemplo](https://drive.google.com/file/d/1TmRsgysAJQcEmffSSgoetTfDhyZTCeJ8/view?usp=sharing) para fazer o upload.

A aplicação processa documentos PDF e extrai CPFs que seguem o formato padrão brasileiro: `XXX.XXX.XXX-XX`. Exemplo de CPFs extraídos:

```
123.456.789-09
987.654.321-00
111.222.333-44
555.666.777-88
```

## Funcionalidades

-   **Upload de PDF:** O usuário pode fazer upload de um arquivo PDF.
    
-   **Extração de CPFs:** O backend processa o PDF e extrai todos os CPFs no formato `XXX.XXX.XXX-XX`.
    
-   **Validação de CPFs:** Os CPFs extraídos são validados quanto ao formato.
    
-   **Armazenamento no Firebase:** Os CPFs válidos são armazenados no Firebase Realtime Database.
    
-   **Listagem de CPFs:** A aplicação exibe os CPFs extraídos no upload atual e todos os CPFs já armazenados.
    

## Pré-requisitos

-   Docker e Docker Compose instalados.
    
-   Node.js (opcional, caso queira rodar localmente sem Docker).
    
-   Conta no Firebase e chave de serviço para configurar o Realtime Database.
    

## Configuração das Variáveis de Ambiente

Tanto para rodar com Docker quanto sem Docker, é necessário configurar as variáveis de ambiente no arquivo `.env`, seguindo este exemplo:

```
FIREBASEURL='https://projeto_fire_base.firebaseio.com/'
FIREBASE_SERVICE_ACCOUNT='{
    "type": "t",
    "project_id": "",
    "private_key_id": "",
    "private_key": "",
    "client_email": "",
    "client_id": "",
    "auth_uri": "",
    "token_uri": "",
    "auth_provider_x509_cert_url": "",
    "client_x509_cert_url": "",
    "universe_domain": ""
}'

```

## Como Executar o Projeto

### 1. Clone o Repositório

```
git clone https://github.com/Newtroniano/simpleshub-app.git
cd simpleshub-test
```

### 2. Suba os Containers com Docker Compose

Execute o seguinte comando na raiz do projeto:

```
docker-compose up --build
```

Isso irá:

-   Construir as imagens do frontend e backend.
    
-   Subir os containers.
    

### 3. Acesse a Aplicação

-   **Frontend:**  http://localhost:8080
    
-   **Backend:**  http://localhost:3000
    

----------

## Como Rodar Sem Docker

Caso prefira rodar o projeto manualmente, siga os passos abaixo:

### 1. Configure o Backend

#### Instale as Dependências

```
cd backend
npm install
```

#### Inicie o Backend

```
npm start
```

O backend estará rodando em **http://localhost:3000**.

### 2. Configure o Frontend

#### Instale as Dependências

```
cd ../frontend
npm install
```

#### Inicie o Frontend

```
npm run serve
```

O frontend estará rodando em **http://localhost:8080**.

----------

## Estrutura do Projeto

### **Frontend**

```
frontend/
├── src/
│   ├── assets/
│   ├── components/
|   |    ├── UploadForm.vue
│   ├── views/
|   |    ├── HomeView.vue
│   ├── services/
|   |    ├── ApiService.vue
│   ├── App.vue
│   ├── main.js
├── public/
|   |    ├── index.html
├── Dockerfile
├── package.json
├── vite.config.js
```

### **Backend**

```
backend/
├── src/
│   ├── controllers/
│   │   ├── UploadController.js
│   │   └── CpfController.js
│   ├── services/
│   │   ├── PdfService.js
│   │   └── CpfService.js
│   ├── repositories/
│   │   └── CpfRepository.js
│   ├── routes/
│   ├── utils/
│   │   ├── pdfReader.js
│   │   └── cpfValidator.js
│   ├── index.js
├── Dockerfile
├── package.json
```