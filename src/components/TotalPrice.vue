<template>
     <div class="flex my-3 justify-between items-center text-pink-900">
        <p class="text-sm">Order Total</p>
        <p class="text-2xl font-bold">${{ totalPrice.toFixed(2) }}</p>
    </div>
</template>

<script setup>

defineProps({
    totalPrice: Number
})

</script>