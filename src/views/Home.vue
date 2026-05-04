<script setup>
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
import { ref, reactive, onMounted } from 'vue'
import IMask from 'imask'

const cep = ref('')
const cepInput = ref(null)
const addressLoaded = ref(false)
const address = reactive({
  street: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  state: ''
})

onMounted(() => {
  IMask(cepInput.value, {
    mask: '00000-000'
  })
})

function handleSubmit() {
  //
}
</script>

<template>
  <CenteredCardLayout>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Busca CEP</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="input-group mb-3">
            <input
              ref="cepInput"
              v-model="cep"
              type="text"
              class="form-control"
              placeholder="CEP"
            >
            <button class="btn btn-success" type="button" id="cep-search-btn">Buscar CEP</button>
          </div>
          <div
            v-if="addressLoaded"
          >
            <div class="mb-3">
              <label for="text-address" class="form-label">Endereço</label>
              <input
                v-model="address.street"
                type="text"
                class="form-control"
                id="text-address"
                placeholder="Endereço"
                disabled
              >
            </div>
            <div class="mb-3">
              <label for="text-address-number" class="form-label">Número</label>
              <input
                v-model="address.number"
                type="text"
                class="form-control"
                id="text-address-number"
                placeholder="Número"
              >
            </div>
            <div class="mb-3">
              <label for="text-address-complement" class="form-label">Complemento</label>
              <input
                v-model="address.complement"
                type="text"
                class="form-control"
                id="text-address-complement"
                placeholder="Complemento"
              >
            </div>
            <div class="mb-3">
              <label for="text-district" class="form-label">Bairro</label>
              <input
                v-model="address.district"
                type="text"
                class="form-control"
                id="text-district"
                placeholder="Bairro"
                disabled
              >
            </div>
            <div class="mb-3">
              <label for="text-city" class="form-label">Cidade</label>
              <input
                v-model="address.city"
                type="text"
                class="form-control"
                id="text-city"
                placeholder="Cidade"
                disabled
              >
            </div>
            <div class="mb-3">
              <label for="text-state" class="form-label">Estado</label>
              <input
                v-model="address.state"
                type="text"
                class="form-control"
                id="text-state"
                placeholder="Estado"
                disabled
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </CenteredCardLayout>
</template>
