<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useServiceStore, type Service } from '../stores/services'
import { useRoute } from 'vue-router'

const route = useRoute()
const svcStore = useServiceStore()
const id = route.params.id
const svc = ref<Service>(svcStore.services.find(s => s.name === id)!)

const selectedIdx = ref(0)
const columns = 4

onMounted(() => {
  window.addEventListener('keyup', hanelKeyup)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', hanelKeyup)
})

const moveRight = () => {
  if (selectedIdx.value === svc.value.items.length - 1) {
    selectedIdx.value = 0
    return
  }

  selectedIdx.value = selectedIdx.value + 1
}

const moveLeft = () => {
  if (selectedIdx.value === 0) {
    selectedIdx.value = svc.value.items.length - 1
    return
  }

  selectedIdx.value = selectedIdx.value - 1
}

const moveDown = () => {
  if (selectedIdx.value + columns > svc.value.items.length - 1) {
    selectedIdx.value = svc.value.items.length - 1
    return
  }

  selectedIdx.value = selectedIdx.value + columns
}

const moveUp = () => {
  if (selectedIdx.value - columns < 0) {
    selectedIdx.value = 0
    return
  }

  selectedIdx.value = selectedIdx.value - columns
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
    window.location.href = svc.value.items[selectedIdx.value].url
  }
}

</script>

<template>
  <div class="m-auto mt-4 w-4/5 grid grid-cols-2 gap-2 md:mt-20 md:grid-cols-4 md:gap-10">
      <div class="h-96 text-center cursor-pointer"
        v-for="item, idx in svc.items" :key="item.title">
        <a :href="item.url" 
          class="h-full inline-block align-middle font-bold subpixel-antialiased 
            font-sans tracking-widest text-zinc-200"
          :class="[selectedIdx === idx ? 'brightness-100 shadow-2xl shadow-white' : 'brightness-50']">
          <img class="h-full m-auto rounded-lg shadow-xl" :src="item.image" :alt="item.title">
        </a>
      </div>
  </div>
</template>
