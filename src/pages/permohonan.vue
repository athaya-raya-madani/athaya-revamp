<script setup>
import IndexData from '@/views/pages/tables/IndexData.vue';
</script>

<template>
  <VRow>

    <VCol cols="12">
      <VCard title="Data Pemohon">
        <VBtn :to="{ name: 'permohonans.create'}" class="ml-5 v-btn btn-primary">Tambah Pemohon</VBtn>
        <IndexData />
      </VCard>
    </VCol>

  </VRow>
</template>
