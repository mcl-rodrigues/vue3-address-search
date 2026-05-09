<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
import { getAllAddresses, deleteAddress } from '../services/addressStorageService'

const route = useRoute()
const allAddresses = ref([])
const showUpdatedMessage = ref(false)
const selectedAddress = ref(null)

onMounted(async () => {
  allAddresses.value = await getAllAddresses()

  const updated = route.query.updated
  if (updated) {
    showUpdatedMessage.value = true
  }
})

async function handleDelete(id) {
  await deleteAddress(id)

  allAddresses.value = await getAllAddresses()
}

function handleView(address) {
  selectedAddress.value = address
}

</script>

<template>
  <CenteredCardLayout>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title m-0">Lista de Endereços</h5>
      </div>
      <div class="card-body">
        <div v-if="showUpdatedMessage" class="alert alert-success mt-3">
          Endereço atualizado com sucesso!
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Endereço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody v-if="allAddresses.length">
            <tr
              v-for="address in allAddresses"
              :key="address.id"
            >
              <td>{{ address.id }}</td>
              <td>{{ address.street }} {{ address.number }}</td>
              <td>
                <div class="d-grid gap-2 d-md-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    title="Visualizar endereço"
                    data-bs-toggle="modal"
                    data-bs-target="#viewAddressModal"
                    @click="handleView(address)"
                  >
                    <i class="bi bi-eye me-1"></i>
                    Visualizar
                  </button>
                  <RouterLink
                    :to="`/enderecos/editar/${address.id}`"
                    title="Editar endereço"
                    class="btn btn-sm btn-warning"
                  >
                    <i class="bi bi-pencil me-1"></i>
                    Editar
                  </RouterLink>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    title="Excluir endereço"
                    @click="handleDelete(address.id)"
                  >
                    <i class="bi bi-trash me-1"></i>
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3" class="text-center">
                Nenhum endereço cadastrado
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="modal fade"
      id="viewAddressModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" v-if="selectedAddress">
          <div class="modal-header">
            <h5 class="modal-title">
              Visualizar endereço
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              <strong>CEP:</strong>
              {{ selectedAddress.cep }}
            </p>
            <p>
              <strong>Endereço:</strong>
              {{ selectedAddress.street }}
            </p>
            <p>
              <strong>Número:</strong>
              {{ selectedAddress.number || 'Não informado' }}
            </p>
            <p>
              <strong>Complemento:</strong>
              {{ selectedAddress.complement || 'Não informado' }}
            </p>
            <p>
              <strong>Bairro:</strong>
              {{ selectedAddress.district }}
            </p>
            <p>
              <strong>Cidade:</strong>
              {{ selectedAddress.city }}
            </p>
            <p>
              <strong>Estado:</strong>
              {{ selectedAddress.state }}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i class="bi bi-x-circle me-1"></i>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </CenteredCardLayout>
</template>
