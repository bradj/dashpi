<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'
import { useServiceStore, type Service } from '../stores/services'

const router = useRouter()
const svcStore = useServiceStore()
const services = ref<Service[]>(svcStore.services)

const selectedIdx = ref(0)

onMounted(() => {
  window.addEventListener('keyup', hanelKeyup)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', hanelKeyup)
})

const moveRight = () => {
  if (selectedIdx.value === services.value.length - 1) {
    selectedIdx.value = 0
  } else {
    selectedIdx.value = selectedIdx.value + 1
  }
}

const moveLeft = () => {
  if (selectedIdx.value === 0) {
    selectedIdx.value = services.value.length - 1
  } else {
    selectedIdx.value = selectedIdx.value - 1
  }
}

const moveDown = () => {
  if (selectedIdx.value + 3 > services.value.length - 1) {
    selectedIdx.value = services.value.length - 1
  } else {
    selectedIdx.value = selectedIdx.value + 3
  }
}

const moveUp = () => {
  if (selectedIdx.value - 3 < 0) {
    selectedIdx.value = 0
  } else {
    selectedIdx.value = selectedIdx.value - 3
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
    selectedIdx.value = 0
  } else if (e.key === 'Enter' || e.key === ' ') {
    router.push({ name: 'service', params: { id: services.value[selectedIdx.value].name } })
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
      :class="{'border-t-amber-200 border-amber-900 shadow-amber-200/40 backdrop-sepia backdrop-brightness-100': selectedIdx === idx}">
      <RouterLink :to="{ name: 'service', params: { id: service.name }}" class="service w-5/6 h-5/6 m-auto">
        <img class="h-full m-auto" :src="service.logo" :alt="service.name">
      </RouterLink>
    </div>
  </div>
</template>
