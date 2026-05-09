# 📍 Busca de Endereço Vue 3

Este é um projeto de estudo desenvolvido com **Vue 3 + Vite**, simulando um sistema simples de gerenciamento de endereços utilizando busca por CEP brasileiro.

O objetivo é praticar conceitos do ecossistema Vue e simular um fluxo frontend mais próximo de aplicações reais para criação, listagem e edição de dados.

---

## 🚀 Funcionalidades

- Busca de endereços utilizando CEPs brasileiros através da API ViaCEP
- Cadastro de novos endereços
- Listagem de endereços salvos
- Edição de endereços existentes
- Remoção de registros
- Persistência de dados no navegador utilizando IndexedDB

---

## 🧠 Objetivo do Projeto

Este projeto foi desenvolvido como um exercício prático para consolidar habilidades de desenvolvimento frontend, com foco em:

- Arquitetura baseada em componentes com Vue 3 (Composition API)
- Reatividade utilizando `ref` e `reactive`
- Vue Router com rotas dinâmicas
- Operações completas de CRUD no frontend
- IndexedDB para persistência local
- Organização de código utilizando services
- Tratamento de estados de carregamento, erros e feedback visual

---

## 🛠️ Tecnologias utilizadas

- Vue 3.5.32
- Vue Router 5.0.4
- Vite 8.0.8
- Bootstrap 5.3.8
- IndexedDB (idb 8.0.3)
- ViaCEP API
- Node.js 20+

---

## 📸 Demonstração

- Tela de busca por CEP
- Formulário dinâmico de endereço
- Lista de endereços salvos
- Edição e remoção de registros

---

## 🧪 Como utilizar

Este projeto utiliza CEPs brasileiros para buscar automaticamente dados de endereço através da API ViaCEP.

Para testar a aplicação:

1. Abra a página inicial
2. Digite um dos CEPs de exemplo abaixo
3. Clique no botão de busca
4. Os campos do endereço serão preenchidos automaticamente
5. Salve o endereço e visualize-o na página de endereços cadastrados
6. Os dados ficam salvos localmente no navegador utilizando IndexedDB

---

## 🇧🇷 CEPs de exemplo

| Localização | CEP |
|---|---|
| Avenida Paulista — São Paulo | `01310-100` |
| Avenida Faria Lima — São Paulo | `04538-132` |
| Praia de Copacabana — Rio de Janeiro | `22070-002` |
| Pelourinho — Salvador | `40026-280` |
| Esplanada dos Ministérios — Brasília | `70050-000` |

> Estes são CEPs reais associados a locais conhecidos do Brasil.

## ▶️ Como executar o projeto

### ⚠️ Requisitos

- Node.js 20+ instalado
- npm (ou yarn/pnpm)
- Navegador moderno (Chrome, Firefox, Edge)

---

### 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/mcl-rodrigues/vue3-address-search.git
cd vue3-address-search
```

Instale as dependências:

```bash
npm install
```

---

### 🚀 Executando em desenvolvimento

```bash
npm run dev
```

O projeto ficará disponível em:

http://localhost:5173

---

### 📦 Build de produção

```bash
npm run build
```

---

### 👀 Pré-visualizar build

```bash
npm run preview
```

---

### 💡 Observações

- Os dados são salvos no navegador via IndexedDB
- Não há necessidade de backend para execução
- Recomendado usar Chrome para melhor compatibilidade


## 🔗 Links

- Repositório: https://github.com/mcl-rodrigues/vue3-address-search
- Demo: https://vue3-address-search.vercel.app

---

## 📌 Observações

Projeto desenvolvido para fins de estudo.

---

## 📄 Licença

Projeto livre para fins de estudo.
