<script setup>
import AuthLayerVue from '../Layout/AuthLayer.vue'
import router from '@/router';
import { RouterLink } from 'vue-router'
import { getAllUser } from '@/services/user';
import { signin,signup,signout,currentUser } from '@/services/auth';
import { useAsyncState } from '@vueuse/core';
import { ref,onMounted } from 'vue';


const errorMsg = ref("")
const email = ref("");
const password = ref("");


//
  // const { state:users,isLoading:isLoadingUsers } = useAsyncState(
  //   getAllUser().then(t => t),
  //   []
  // )

  // const { state:user, isLoading:isLoadingUser } = useAsyncState(
  //   signin("admin@admin.com","12345678").then(t => t),
  //   {}
  // )

  // const { state:user2, isLoading:isLoadingUser2 } = useAsyncState(
  //   signup("admin22@yopmail.com","12345678").then(t => t),
  //   {}
  // )
  // const { state:sessionOutUser, isLoading:isLoadingUserOutSession } = useAsyncState(
  //   signout().then(t => t),
  //   {}
  // )

  // const { state:sessionUser, isLoading:isLoadingUserSession } = useAsyncState(
  //   currentUser().then(t => t),
  //   {}
  // )
//

function login(){
  const  e  = email.value.trim()
  const pwd = password.value.trim()
  signin(e,pwd).then((t) => {
    errorMsg.value = ""

    if(t.status){
      router.push('/about')
    }
    else{
      errorMsg.value = t.error
    }
  });
}

onMounted(() => {
  console.log("mounter LOGIN")
})


</script>

<template>
  <AuthLayerVue>
    <template v-slot:image>
      <img class="h-full" src="/image/logoM.png" alt="">
    </template>

    <template v-slot:content>
      <h1 class="text-center text-xl font-bold">Welcome Back</h1>
      <p class="text-center p-1 text-zinc-500 text-xs">Don't have an account yet ? 
        <span class="text-white">
          <RouterLink to="/signup">
            Sign Up
          </RouterLink>
        </span>
      </p>
      <div class="flex flex-col py-4 gap-3">
        <input 
          type="text" 
          placeholder="Your email ......."
          class="placeholder-gray-600 rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out  focus:ring-2 focus:ring-blue-400" 
          name="email"
          v-model="email"
        >
        <input 
          placeholder="password ......."
          type="text" 
          class=" placeholder-gray-600 rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400" 
          name="password"
          v-model="password"
        >
      </div>
      <button @click="()=>login()" class="my-2 bg-blue-600 w-full rounded-md p-2 text-sm font-semibold">Log In</button>
      <p
        v-if="errorMsg"
        class="text-red-300 text-center font-sm "
      >{{ errorMsg }}</p>
    </template>
  </AuthLayerVue>
</template>


<style scoped>
input{
  background: rgb(15,15,15);
}
</style>
