<script setup>
import { ref, reactive, onMounted } from 'vue'
import CenteredCardLayout from '../layouts/CenteredCardLayout.vue'
import { getAllAddresses, deleteAddress } from '../services/addressStorageService'

const allAddresses = ref([])

onMounted(async () => {
  allAddresses.value = await getAllAddresses()
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
        <h5 class="card-title">Lista de Endereços</h5>
      </div>
      <div class="card-body">
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
                    class="btn btn-sm btn-warning"
                    title="Editar endereço"
                  >
                    Editar
                  </button>
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
