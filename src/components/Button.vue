<template>
    <button @click="emits('click')" class="w-full bg-red text-white px-6 py-3 font-semibold rounded-full border-2 border-transparent transition duration-200 hover:bg-red-dark">
        <slot></slot>
    </button>
</template>

<script setup>

const emits = defineEmits('click')

</script>