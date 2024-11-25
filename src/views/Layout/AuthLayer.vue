<script setup></script>

<template>
    <div id="auth" class="w-screen h-screen bg-[url('/image/bg-auth.png')] bg-cover bg-center flex items-center justify-center text-white">
        <main class="flex flex-col max-w-[30%] max-h-[65%] min-w-[350px] min-h-[250px] bg-neutral-900  rounded-lg p-5">
            <div class="flex justify-center mt-3 p-3 h-[70px]">
                <slot name="image"></slot>
            </div>
            <div class="grow">
                <slot name="content"></slot>
            </div>
        </main>
    </div>
</template>

<style >
main{
  box-shadow: inset rgb(42,42,42) 0px 2px;
  background: rgb(25,25,25);
}
</style>