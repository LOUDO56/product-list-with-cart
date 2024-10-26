<template>
    <div class="flex modal-open justify-center items-center fixed left-0 top-0 overflow-auto bg-black bg-opacity-30 h-screen w-screen z-30">
        <div :class="`bg-white py-9 px-7 rounded-xl mx-4 ${width} w-full sm:static absolute bottom-0 animate-modal-appear sm:animate-none`">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

defineProps({
    width: String
})

</script>