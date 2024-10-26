<template>
    <div class="flex flex-col gap-5">
        <div class="w-64 relative">
            <img :src="dessert.image.desktop" :alt="`${dessert.name} name illustration desktop`" :class="`w-full rounded-xl shadow-sm border-2 transition duration-200 ease-out ${carts[dessert.name] !== undefined ? 'border-red' : 'border-transparent'} hidden xl:block`">
            <img :src="dessert.image.mobile" :alt="`${dessert.name} name illustration desktop`" :class="`w-full rounded-xl shadow-sm border-2 transition duration-200 ease-out ${carts[dessert.name] !== undefined ? 'border-red' : 'border-transparent'} block xl:hidden`">
            <div class="flex justify-center">
                <div class="absolute -bottom-4">
                    <button v-if="carts[dessert.name] === undefined" @click="emits('item', dessert);" class="flex items-center gap-2 border border-pink-400 rounded-full bg-white px-6 py-3 text-sm transition duration-200 text-pink-900 hover:text-red hover:border-red shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                                <g class="fill-red" clip-path="url(#a)">
                                    <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                                    <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
                                </g>
                                <defs>
                                    <clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p class="font-semibold">Add to cart</p>
                    </button>

                    <div v-else class="flex w-40 items-center justify-between rounded-full bg-red px-4 py-3 text-sm text-white font-semibold shadow-lg">
                        <button @click="emits('decrement', dessert.name);" class="p-[2px] border-2 border-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                        </button>
                        <p>{{ carts[dessert.name].amount }}</p>
                        <button @click="emits('increment', dessert.name);" class="p-[2px] border-2 border-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-base">
            <p class="text-pink-400 text-sm">{{ dessert.category }}</p>
            <p class="text-pink-900 font-semibold">{{ dessert.name }}</p>
            <p class="text-red font-semibold">${{ dessert.price.toFixed(2) }}</p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    dessert: Object,
    addItem: Function,
    carts: Object
})

const emits = defineEmits(['item', 'increment', 'decrement'])


</script>
