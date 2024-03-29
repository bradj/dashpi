<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'
import { useServiceStore, type Service } from '../stores/services'
import { useSelectedStore } from '../stores/selected'

const router = useRouter()
const svcStore = useServiceStore()
const selectedStore = useSelectedStore()
const services = ref<Service[]>(svcStore.services.filter(x => x.enabled))

onMounted(() => {
  window.addEventListener('keyup', hanelKeyup)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', hanelKeyup)
})

const moveRight = () => {
  if (selectedStore.selectedServiceIdx >= services.value.length - 1) {
    selectedStore.setIdx(0)
  } else {
    selectedStore.setIdx(selectedStore.selectedServiceIdx + 1)
  }
}

const moveLeft = () => {
  if (selectedStore.selectedServiceIdx === 0) {
    selectedStore.setIdx(services.value.length - 1)
  } else {
    selectedStore.setIdx(selectedStore.selectedServiceIdx - 1)
  }
}

const moveDown = () => {
  if (selectedStore.selectedServiceIdx + 3 > services.value.length - 1) {
    selectedStore.setIdx(services.value.length - 1)
  } else {
    selectedStore.setIdx(selectedStore.selectedServiceIdx + 3)
  }
}

const moveUp = () => {
  if (selectedStore.selectedServiceIdx - 3 < 0) {
    selectedStore.setIdx(0)
  } else {
    selectedStore.setIdx(selectedStore.selectedServiceIdx - 3)
  }
}

const hanelKeyup = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') {
    moveRight()
  } else if (e.key === 'ArrowLeft') {
    moveLeft()
  } else if (e.key === 'ArrowUp') {
    moveUp()
  } else if (e.key === 'ArrowDown') {
    moveDown()
  } else if (e.key === 'Escape') {
    selectedStore.setIdx(0)
  } else if (e.key === 'Enter' || e.key === ' ') {
    router.push({ name: 'service', params: { id: services.value[selectedStore.selectedServiceIdx].name } })
  }
}

</script>

<template>
  <div class="m-auto mt-20 w-4/5 grid grid-cols-3 gap-10">
    <div 
      v-for="service, idx in services" :key="service.name"
      class="w-full max-h-52 flex
      rounded-lg border-solid border border-neutral-600 border-t-neutral-200
      drop-shadow-xl shadow-lg backdrop-blur-lg backdrop-brightness-75" 
      :class="{'border-t-amber-200 border-amber-900 shadow-amber-200/40 backdrop-sepia backdrop-brightness-100': selectedStore.selectedServiceIdx === idx}">
      <RouterLink :to="{ name: 'service', params: { id: service.name }}" class="service w-5/6 h-5/6 m-auto">
        <img class="h-full m-auto" :src="service.logo" :alt="service.name">
      </RouterLink>
    </div>
  </div>
</template>
