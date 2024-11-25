import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({})

  const fullname = computed(() =>"full name")

  function initUser(data) {
    user.value = data
    console.log("PINIA STORE",user)
  }

  return { initUser, user }
})
