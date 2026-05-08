<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
import { getAllAddresses, deleteAddress } from '../services/addressStorageService'

const route = useRoute()
const allAddresses = ref([])
const showUpdatedMessage = ref(false)

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
                  <RouterLink
                    :to="`/enderecos/editar/${address.id}`"
                    title="Editar endereço"
                    class="btn btn-sm btn-warning"
                  >
                    Editar
                  </RouterLink>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    title="Excluir endereço"
                    @click="handleDelete(address.id)"
                  >
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
  </CenteredCardLayout>
</template>
