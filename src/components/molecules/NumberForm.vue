<script setup>
const props = defineProps({
	code: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="relative flex justify-center p-2">
		<div class="absolute top-0 bottom-0">
			<slot></slot>
		</div>
		<div class="flex gap-1">
			<span
				v-for="(i, n) in props.code"
				:key="n+10"
				class="border border-blue-600 rounded-sm p-2 w-[29px] h-[42px]"
			>{{ i }}</span>
			<span
				v-for="i in 6 - props.code.length"
				:key="16+i"
				class="border border-blue-800 rounded-sm p-2 w-[29px] h-[42px]"
			>{{
				}}</span>
		</div>
	</div>
</template>