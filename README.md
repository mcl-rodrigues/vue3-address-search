🇧🇷 Este README também está disponível em Português: [README em PT-BR](README.pt-br.md)

# 📍 Vue 3 Address Search

This is a study project built with **Vue 3 + Vite**, simulating a simple address management system using Brazilian postal code (CEP) lookup.

The goal is to practice Vue ecosystem concepts and simulate a real-world frontend flow for creating, listing, and editing data.

---

## 🚀 Features

- Address lookup using Brazilian postal codes (CEP) via ViaCEP API
- Create new addresses
- List saved addresses
- Edit existing addresses
- Delete records
- Data persistence in the browser using IndexedDB

---

## 🧠 Project Purpose

This project was developed as a hands-on exercise to consolidate frontend development skills, focusing on:

- Vue 3 component-based architecture (Composition API)
- Reactivity with `ref` and `reactive`
- Vue Router with dynamic routes
- Full CRUD operations on the frontend
- IndexedDB for local persistence
- Code organization using services
- Handling loading states, errors, and UI feedback

---

## 🛠️ Technologies used

- Vue 3.5.32
- Vue Router 5.0.4
- Vite 8.0.8
- Bootstrap 5.3.8
- IndexedDB (idb 8.0.3)
- ViaCEP API
- Node.js 20+

---

## 📸 Demo

- Postal code search screen
- Dynamic address form
- Saved addresses list
- Edit and delete records

---

## 🧪 How to use

This project uses Brazilian postal codes (**CEP**) to automatically fetch address data using the ViaCEP API.

To test the application:

1. Open the home page
2. Enter one of the example postal codes below
3. Click the search button
4. The address fields will be automatically filled
5. Save the address and check it in the addresses list page
6. Saved addresses are persisted locally in the browser using IndexedDB

---

## 🇧🇷 Example postal codes

| Location | Postal Code (CEP) |
|---|---|
| Avenida Paulista — São Paulo | `01310-100` |
| Avenida Faria Lima — São Paulo | `04538-132` |
| Copacabana Beach — Rio de Janeiro | `22070-002` |
| Pelourinho — Salvador | `40026-280` |
| Esplanada dos Ministérios — Brasília | `70050-000` |

> These are real Brazilian postal codes commonly associated with well-known locations.

## ▶️ How to run the project

### ⚠️ Requirements

- Node.js 20+ installed
- npm (or yarn/pnpm)
- Modern browser (Chrome, Firefox, Edge)

---

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/mcl-rodrigues/vue3-address-search.git
cd vue3-address-search
```

Install dependencies:

```bash
npm install
```

---

### 🚀 Run in development mode

```bash
npm run dev
```

The project will be available at:

http://localhost:5173

---

### 📦 Production build

```bash
npm run build
```

---

### 👀 Preview production build

```bash
npm run preview
```

---

### 💡 Notes

- Data is stored in the browser using IndexedDB
- No backend is required to run this project
- Chrome is recommended for best compatibility

---

## 🔗 Links

- Repository: https://github.com/mcl-rodrigues/vue3-address-search
- Demo: https://vue3-address-search.vercel.app

---

## 📌 Notes

This project was developed for learning purposes.

---

## 📄 License

Free to use for study purposes.