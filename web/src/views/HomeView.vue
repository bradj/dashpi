<script setup lang="ts">
import { ref } from 'vue';
import GridList from '@/components/GridList.vue';
import { useServiceStore, type Service } from '../stores/services'

const svcStore = useServiceStore()
const services = ref<Service[]>(svcStore.services.filter(x => x.enabled))
</script>

<template>
  <main>
    <GridList
      :items="services.map(s => ({ title: s.name, image: s.logo, url: s.name }))"
      :routeLinks="true" />
  </main>
</template>
