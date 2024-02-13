<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useServiceStore, type Service } from '../stores/services'
import { useRoute } from 'vue-router'

const route = useRoute()
const svcStore = useServiceStore()
const id = route.params.id
const svc = ref<Service>(svcStore.services.find(s => s.name === id)!)

const selectedIdx = ref(0)

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
  if (selectedIdx.value > svc.value.items.length - svc.value.items.length % 4 - 1) {
    selectedIdx.value = svc.value.items.length - 1
    return
  }

  selectedIdx.value = selectedIdx.value + svc.value.items.length % 4
}

const moveUp = () => {
  if (selectedIdx.value < svc.value.items.length % 4) {
    selectedIdx.value = 0
    return
  }

  selectedIdx.value = selectedIdx.value - svc.value.items.length % 4
}

watch(selectedIdx, (newIdx, oldIdx) => {
  const el = document.querySelectorAll('.service')[newIdx]
  console.log('newIdx', newIdx, oldIdx, el)
})

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
  }
}

</script>

<template>
  <div class="m-auto mt-20 w-4/5 grid grid-cols-4 gap-10">
      <div
      class="h-64 w-64 text-center cursor-pointer
        rounded-lg border-solid border border-neutral-600 border-t-neutral-200
        shadow-xl backdrop-blur-lg backdrop-brightness-75
        hover:border-t-amber-200 hover:border-amber-900
        hover:backdrop-brightness-110 hover:backdrop-sepia"
        v-for="item in svc.items" :key="item.title">
        <a :href="item.url" class="w-full h-full inline-block align-middle font-bold subpixel-antialiased font-sans tracking-widest text-zinc-200">
          {{ item.title }}
        </a>
      </div>
  </div>
</template>
