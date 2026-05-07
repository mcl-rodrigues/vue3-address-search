import { openDB } from 'idb'

const DB_NAME = 'vue3-address-search'
const DB_VERSION = 1
const STORE_NAME = 'addresses'

async function initDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      })
    },
  })

  return db
}

export async function saveAddress(address) {
  const db = await initDB()

  await db.add(STORE_NAME, address)
}

export async function getAllAddresses() {
  const db = await initDB()

  return db.getAll(STORE_NAME)
}

export async function deleteAddress(id) {
  const db = await initDB()

  return db.delete(STORE_NAME, id)
}
