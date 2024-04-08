<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedIdx = ref(0)

type GridItem = {
  title: string
  image: string,
  url: string,  
}

interface Props {
  items: GridItem[];
  routeLinks?: boolean;
  columns?: number;
}

const props = withDefaults(defineProps<Props>(), {
  routeLinks: false,
  columns: 3,
})

onMounted(() => {
  window.addEventListener('keyup', handleKeyup)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', handleKeyup)
})

const moveRight = () => {
  if (selectedIdx.value >= props.items.length - 1) {
    selectedIdx.value = 0
  } else {
    selectedIdx.value = selectedIdx.value + 1
  }
}

const moveLeft = () => {
  if (selectedIdx.value === 0) {
    selectedIdx.value = props.items.length - 1
  } else {
    selectedIdx.value = selectedIdx.value - 1
  }
}

const moveDown = () => {
  if (selectedIdx.value + props.columns >= props.items.length - 1) {
    selectedIdx.value = props.items.length - 1
    return
  }

  selectedIdx.value = selectedIdx.value + props.columns
}

const moveUp = () => {
  if (selectedIdx.value - props.columns < 0) {
    selectedIdx.value = 0
    return
  }

  selectedIdx.value = selectedIdx.value - props.columns
}

const handleKeyup = (e: KeyboardEvent) => {
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
    router.push({ name: 'service', params: { id: props.items[selectedIdx.value].url } })
  }
}
</script>

<template>
  <div>
    <div v-if="props.routeLinks" class="m-auto mt-20 w-4/5 grid grid-cols-3 gap-10">
      <div 
        v-for="item, idx in props.items" :key="item.title"
        onkeypress=""
        class="w-full max-h-52 flex
        rounded-lg border-solid border border-neutral-600 border-t-neutral-200
        drop-shadow-xl shadow-lg backdrop-blur-lg backdrop-brightness-75" 
        :class="{'border-t-amber-200 border-amber-900 shadow-amber-200/40 backdrop-sepia backdrop-brightness-100': selectedIdx === idx}">
        <RouterLink :to="{ name: 'service', params: { id: item.title }}" class="service w-5/6 h-5/6 m-auto">
          <img class="h-full m-auto" :src="item.image" :alt="item.title">
        </RouterLink>
      </div>
    </div>
    <div v-else class="m-auto mt-4 w-4/5 grid grid-cols-2 gap-2 md:mt-20 md:grid-cols-4 md:gap-10">
      <div class="h-96 text-center cursor-pointer"
        v-for="item, idx in props.items" :key="item.title">
        <a :href="item.url" 
          class="h-full inline-block align-middle font-bold subpixel-antialiased 
            font-sans tracking-widest text-zinc-200"
          :class="[selectedIdx === idx ? 'brightness-100 shadow-2xl shadow-white' : 'brightness-50']">
          <img class="h-full m-auto rounded-lg shadow-xl" :src="item.image" :alt="item.title">
        </a>
      </div>
    </div>
  </div>
</template>
