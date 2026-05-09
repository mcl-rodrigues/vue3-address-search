<script setup>
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
</script>

<template>
  <CenteredCardLayout>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title m-0">Sobre o projeto</h5>
      </div>

      <div class="card-body">
        <p class="mb-3">
          Este é um projeto de estudo desenvolvido com Vue 3, com o objetivo de simular um sistema simples de gerenciamento de endereços.
        </p>

        <h6>📌 Objetivo</h6>
        <p>
          Aplicar conceitos fundamentais do ecossistema Vue, como composição de componentes, roteamento e persistência de dados no navegador.
        </p>

        <h6>🧰 Tecnologias utilizadas</h6>
        <ul>
          <li>Vue 3.5.32</li>
          <li>Vue Router 5.0.4</li>
          <li>Vite 8.0.8</li>
          <li>Bootstrap 5.3.8</li>
          <li>Bootstrap Icons 1.13.1</li>
          <li>IndexedDB (idb 8.0.3)</li>
          <li>API ViaCEP</li>
          <li>Node.js 20+</li>
        </ul>

        <h6>⚙️ Funcionalidades</h6>
        <ul>
          <li>Busca de endereço por CEP</li>
          <li>Cadastro de endereços</li>
          <li>Listagem, edição e exclusão</li>
          <li>Persistência local no navegador</li>
        </ul>

        <h6>📚 O que foi praticado</h6>
        <ul>
          <li>Composition API</li>
          <li>Reatividade (ref e reactive)</li>
          <li>Vue Router (rotas dinâmicas + query params)</li>
          <li>CRUD com IndexedDB</li>
          <li>Organização por services</li>
          <li>Tratamento de loading e erros</li>
        </ul>

        <h6>🔗 Links</h6>
        <ul>
          <li>
            GitHub:
            <a href="https://github.com/mcl-rodrigues/vue3-address-search" target="_blank">
              Repositório do projeto
            </a>
          </li>
        </ul>

        <hr />

        <p class="text-muted mb-0">
          Projeto desenvolvido para fins de estudo.
        </p>
      </div>
    </div>
  </CenteredCardLayout>
</template>
