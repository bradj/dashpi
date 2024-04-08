<script setup lang="ts">
import { ref } from 'vue';
import { useServiceStore, type ServiceItem } from '../stores/services'
import { useRoute } from 'vue-router';
import GridList from '@/components/GridList.vue';

const route = useRoute()
const svcStore = useServiceStore()
const id = route.params.id
const items = ref<ServiceItem[]>(svcStore.services.find(s => s.name === id)!.items)
</script>

<template>
  <GridList
    :items="items.map(s => ({ title: s.title, image: s.image, url: s.url }))"
    :columns="4" />
</template>
