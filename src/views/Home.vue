<script setup>
import { ref, reactive } from 'vue'
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
import { getAddressByCep } from '../services/viaCepService'

const cep = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const addressLoaded = ref(false)
const address = reactive({
  street: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  state: ''
})

function handleSubmitSave() {
  //
}

function fillAddress(data) {
  address.street = data.logradouro
  address.district = data.bairro
  address.city = data.localidade
  address.state = data.uf
}

function resetAddress() {
  address.street = ''
  address.number = ''
  address.complement = ''
  address.district = ''
  address.city = ''
  address.state = ''
}

function handleCancel() {
    cep.value = ''
    errorMessage.value = ''
    addressLoaded.value = false

    resetAddress()
}

async function handleBuscaCep() {
  const cepNum = cep.value.replace(/\D/g, '')

  if (cepNum.length !== 8) {
    errorMessage.value = 'CEP inválido'
    return
  }

  errorMessage.value = ''

  resetAddress()

  isLoading.value = true

  try {
    const data = await getAddressByCep(cepNum)

    fillAddress(data)

    addressLoaded.value = true
  } catch (error) {
    errorMessage.value = error.message
    addressLoaded.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <CenteredCardLayout>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Busca CEP</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleBuscaCep">
          <div class="input-group mb-3">
            <input
              v-model="cep"
              type="text"
              class="form-control"
              placeholder="CEP"
              v-mask="'00000-000'"
            >
            <button
              :disabled="isLoading"
              id="cep-search-btn"
              type="submit"
              class="btn btn-success"
            >
              {{ isLoading ? 'Buscando...' : 'Buscar CEP' }}
            </button>
          </div>
        </form>
        <form @submit.prevent="handleSubmitSave">
          <div
            v-if="errorMessage"
            class="alert alert-danger mt-3"
          >
            {{ errorMessage }}
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
              <label for="text-address-number" class="form-label">Número <span class="text-body-secondary">(opcional)</span></label>
              <input
                v-model="address.number"
                type="text"
                class="form-control"
                id="text-address-number"
                placeholder="Número"
                maxlength="10"
              >
            </div>
            <div class="mb-3">
              <label for="text-address-complement" class="form-label">Complemento <span class="text-body-secondary">(opcional)</span></label>
              <input
                v-model="address.complement"
                type="text"
                class="form-control"
                id="text-address-complement"
                placeholder="Complemento"
                maxlength="20"
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
            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-outline-danger" @click="handleCancel">
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
                Salvar Endereço
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </CenteredCardLayout>
</template>
