<template>

<div class="flex xl:flex-row flex-col items-center justify-center gap-10 my-16">
  <div>
    <h1 class="text-3xl text-pink-900 font-bold mb-7">Desserts</h1>
    <div class="xl:grid xl:grid-cols-3 flex flex-col gap-5">
      <Dessert 
        v-for="(dessert, index) in desserts"
        :key="index"
        :dessert="dessert"
        :carts="carts"
        @increment="incrementAmount"
        @decrement="decrementAmount"
        @item="addItem"
      />

    </div>
  </div>
  <div class="flex flex-col p-6 bg-white rounded-xl xl:self-start self-auto sticky top-5 w-[90%] sm:w-[400px]">
    <h3 class="text-2xl text-red font-bold">Your Cart ({{ Object.keys(carts).length }})</h3>
      <div v-if="Object.keys(carts).length === 0" class="flex items-center flex-col gap-3 px-10 pb-3 pt-7">
        <img src="/assets/images/illustration-empty-cart.svg" alt="Empty cart illustration" class="w-28">
        <p class="text-pink-500 font-semibold text-sm text-center">Your added items will appear here</p>
      </div>
      <div class="max-h-[280px] mt-4 overflow-y-auto" v-else>
        <ListOrder
          v-for="item in Object.values(carts)"
          :type="'cart'"
          :item="item" 
          @item="removeItem"
        />
      </div>
      <div v-if="Object.keys(carts).length > 0" class="flex flex-col gap-5">
        <TotalPrice :total-price="totalPrice" />
        <div class="flex items-center justify-center bg-pink-100 gap-2 w-full py-3 text-sm rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
          <p>This is a <span class="font-semibold">carbon-neutral</span> delivery</p>
        </div>
        <Button @click="orderReady = true">
          Confirm Order
        </Button>
      </div>
      
  </div>

  <Modal v-if="orderReady" :width="'sm:w-[550px]'">
      <img src="/assets/images/icon-order-confirmed.svg" alt="order confirmed icon" class="mb-5 w-11">
      <h1 class="font-bold text-4xl mb-2">Order Confirmed</h1>
      <h2 class="text-pink-400 my-2">We hope you enjoy your meal!</h2>
      <div class="bg-pink-50 pb-3 pt-1 rounded-xl mt-6">
        <div class="max-h-[299px] overflow-y-scroll p-5 pb-0">
          <ListOrder 
            v-for="item in Object.values(carts)"
            :type="'order'"
            :item="item" 
            @item="removeItem"
          />
        </div>
        <div class="p-5 pb-0 pt-1">
          <TotalPrice :total-price="totalPrice" />
        </div>
      </div>
      <div class="mt-5">
        <Button @click="reset()"><span class="text-sm">Start New Order</span></Button>
      </div>
  </Modal>
</div>


</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Dessert from './components/Dessert.vue';
import ListOrder from './components/ListOrder.vue';
import Button from './components/Button.vue';
import Modal from './components/Modal.vue';
import TotalPrice from './components/TotalPrice.vue';

const desserts = ref(null);
const carts = ref({});
const totalPrice = ref(0);
const orderReady = ref(false)

watch(orderReady, (newValue) => {
  if(newValue) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
})

function reset(){
  orderReady.value = false;
  totalPrice.value = 0;
  carts.value = {};
}

function addItem(article){
  if(carts.value[article.name] === undefined){
    carts.value[article.name] = {
      'name': article.name,
      'price': article.price,
      'thumbnail': article.image.thumbnail,
      'amount': 1,
    }
  } else {
    carts.value[article.name].amount++;
  }
  totalPrice.value += article.price;
}

function removeItem(name){
  totalPrice.value -= carts.value[name].price * carts.value[name].amount;
  delete carts.value[name];
}

function incrementAmount(name){
  carts.value[name].amount++;
  totalPrice.value += carts.value[name].price;
}

function decrementAmount(name){
  carts.value[name].amount--;
  totalPrice.value -= carts.value[name].price;
  if(carts.value[name].amount == 0){
    delete carts.value[name]
  }
}

onMounted(() => {
  fetch('data.json')
    .then(res => res.json())
    .then(data => desserts.value = data)
    .catch(e => console.log("Error when fetching dessert: ", e))
});

</script>