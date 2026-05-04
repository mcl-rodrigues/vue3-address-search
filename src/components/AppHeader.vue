<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue3 Address Search</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/enderecos"
            >Endereços</router-link
          >
          <router-link class="nav-link" exact-active-class="active" to="/sobre">Sobre</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
