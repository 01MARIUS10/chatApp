<template>
	<DashboardLayer>
		<h1>Hello {{ name }}!</h1>
		<button @click="() => deconnection()">Deconnection</button>
	</DashboardLayer>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue'
import { signout } from '@/services/auth';
import DashboardLayer from './Layout/DashboardLayer.vue';
import { useUserStore } from '@/stores/user';

let name = ref("")
let userStore = useUserStore();

const deconnection = async () => {
	signout().then((r) => {
		console.log(r);
		if (r.status) router.push("/")
	})
}

</script>