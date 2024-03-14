<script setup>
import IndexData from '@/views/pages/tables/IndexData.vue';
</script>

<template>
  <VRow>

    <VCol cols="12">
      <VCard title="Data Pemohon">
        <VBtn :to="{ name: 'permohonans.create'}" class="ml-5 v-btn btn-primary">
          <i class="mdi icon-lg mdi-plus"></i>Tambah Pemohon
        </VBtn>
        <IndexData />
      </VCard>
    </VCol>

  </VRow>
</template>
