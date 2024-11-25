<script setup>
// import Home from '../components/Home.vue'
import AuthLayerVue from "../Layout/AuthLayer.vue";
import Modal from "@/components/molecules/Modal.vue";
import NumberForm from "@/components/molecules/NumberForm.vue";
import { RouterLink } from "vue-router";
import router from "@/router";
import { signup } from "@/services/auth";
import { ref } from "vue";
import { verifyEmailOtp } from "@/services/auth";

function sinscrire() {
	let n = name.value.trim();
	let e = email.value.trim();
	let pwd = password.value.trim();
	let pwd2 = confirmpassword.value.trim();
	if (pwd != pwd2) {
		errorMssg.value = "veuillez verifier votre mot de passe";
		return -1;
	} else {
		signup(e, pwd, { nom: n }).then((t) => {
			console.log(t);
			if(!t.status){
				errorMssg.value = t.error
			}
			else {
				isAuthSignUp.value = true;
			}
		});
	}
}


function verifyOtpCode() {
	let n = optCode.value.trim();
	let e = email.value.trim();
	verifyEmailOtp(e, n)
	.then((t) => {
			if(!t.status){
				errorMssg.value = t.error
			}
			else {
				isAuthSignUp.value = false;
				router.push('/about')
			}
		});	
}

const isAuthSignUp = ref(false);
const errorMssg = ref("");

const email = ref("");
const name = ref("");
const confirmpassword = ref("");
const password = ref("");
const optCode = ref("");
</script>

<template>
	<AuthLayerVue v-if="!isAuthSignUp">
		<template v-slot:image>
			<img
				class="h-full"
				src="/public/image/logoM.png"
				alt=""
			/>
		</template>
		<template v-slot:content>
			<h1 class="text-center text-xl font-bold">Welcome to M</h1>
			<div class="flex flex-col py-4 gap-3">
				<div class="flex flex-col">
					<label
						for="name"
						class="text-sm px-1 pt-1"
					>Name</label>
					<input
						type="text"
						placeholder="Your name ......."
						class="placeholder-gray-600 bg-[rgb(15,15,15)] rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400"
						name="name"
						v-model="name"
					/>
				</div>

				<div class="flex flex-col">
					<label
						for="email"
						class="text-sm px-1 pt-1"
					>Email</label>
					<input
						type="text"
						placeholder="Your email ......."
						class="placeholder-gray-600 bg-[rgb(15,15,15)] rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400"
						name="email"
						v-model="email"
					/>
				</div>

				<div class="flex flex-col">
					<label
						for="password"
						class="text-sm px-1 pt-1"
					>password</label>
					<input
						placeholder="password ......."
						type="text"
						class="placeholder-gray-600 bg-[rgb(15,15,15)] rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400"
						name="password"
						v-model="password"
					/>
				</div>

				<div class="flex flex-col">
					<label
						for="confirmPasswd"
						class="text-sm px-1 pt-1"
					>Confirm password</label>
					<input
						type="text"
						placeholder="retape password ......."
						class="placeholder-gray-600 bg-[rgb(15,15,15)] rounded-md h-[28px] text-sm p-4 font-medium outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400"
						name="confirmPasswd"
						v-model="confirmpassword"
					/>
				</div>
			</div>
			<button
				@click="sinscrire()"
				class="my-2 bg-blue-600 w-full rounded-md p-2 text-sm font-semibold"
			>
				Sign Up
			</button>
			<p
				v-if="errorMssg"
				class="text-red-300 text-center font-sm"
			>
				{{ errorMssg }}
			</p>
		</template>
	</AuthLayerVue>

	<AuthLayerVue v-else>
		<template v-slot:image>
			<img
				class="h-full"
				src="/public/image/fete.png"
				alt=""
			/>
		</template>
		<template v-slot:content>
			<p>
				Merci de vous être inscrit sur MnM ! Avant de commencer, nous
				avons
				besoin que vous confirmiez votre adresse email
				<span class="text-blue-600"> {{ email }}. </span>
			</p>
			<p class="text-center mt-4">
				<NumberForm :code="optCode">
					 <input 
					 type="string" 
					 name="optCode" id=""
					 class="text-white opacity-0 bg-black border border-blue-600 h-full p-2"
					 @keypress.enter="()=>verifyOtpCode()"
					  v-model="optCode" 
					  >
				 </NumberForm>
			</p>
		</template>
	</AuthLayerVue>
</template>


<style></style>
