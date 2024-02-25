import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectedStore = defineStore('selected', () => {
  const selectedServiceIdx = ref(0)

  function setIdx(n: number) {
    selectedServiceIdx.value = n
  }

  return { selectedServiceIdx, setIdx}
})
