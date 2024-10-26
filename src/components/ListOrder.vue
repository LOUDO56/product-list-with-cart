<template>
    <div class="flex justify-between items-center mt-3">
        <div class="flex gap-4 items-center">
            <div v-if="type === 'order'">
                <img :src="item.thumbnail" :alt="`${item.name} illustration`" class="w-12 rounded-lg">
            </div>
            <div class="text-sm">
                <p class="text-pink-900 font-semibold mb-2">{{ item.name }}</p>
                <div class="flex">
                    <p class="text-red font-semibold mr-3">{{ item.amount }}x</p>
                    <div class="flex gap-2">
                        <p class="text-pink-400 font-light">@ ${{ item.price.toFixed(2) }}</p>
                        <p v-if="type === 'cart'" class="text-pink-500 font-semibold">${{ (item.amount * item.price).toFixed(2) }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="emitRemoveItem" v-if="type === 'cart'" class="ml-auto mr-4 opacity-50 hover:opacity-100 transition duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="p-[2px] border-2 border-pink-500 rounded-full" width="18" height="18" fill="none" viewBox="0 0 10 10"><path class="fill-pink-500" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
        </button>
        <p v-else class="font-semibold text-pink-900 text-sm">${{ (item.amount * item.price).toFixed(2) }}</p>
    </div>
    <hr class="my-5 fill-pink-300">
</template>

<script setup>
const props = defineProps({
    type: String,
    item: Object
})

const emits = defineEmits(['item'])

const emitRemoveItem = () => {
    emits('item', props.item.name)
}
</script>
