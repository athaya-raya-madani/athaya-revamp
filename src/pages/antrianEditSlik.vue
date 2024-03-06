<script setup>
import hasilSlik from '@/views/pages/form-layouts/hasil-slik.vue';
import '@mdi/font/css/materialdesignicons.min.css';
import { useRoute, useRouter } from 'vue-router';
import api from '../api';
const router = useRouter();
const route = useRoute();

const goBack = () => {
  router.go(-1);
}
const dilanjutkan = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusslik-dilanjutkan`);
    console.log('data:', response);
    router.push({path: '/antrian-hasil-slik'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const dikembalikan = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusslik-dikembalikan`);
    console.log('data:', response);
    router.push({path: '/antrian-hasil-slik'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const ditolak = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusslik-ditolak`);
    console.log('data:', response);
    router.push({path: '/antrian-hasil-slik'});
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VBtn class="btn-verifikasi my-2 mx-1" @click="goBack">
          <i class="mdi icon-lg mdi-arrow-left"></i>Kembali 
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="dilanjutkan" >
          <i class="mdi icon-lg mdi-check-circle"></i>Dilanjutkan
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="dikembalikan" >
          <i class="mdi icon-lg mdi-close-thick"></i>Dikembalikan
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="ditolak" >
          <i class="mdi icon-lg mdi-close-thick"></i>Ditolak
        </VBtn>
        <VCard title="Hasil Antrian Slik">
          <VCardText>
            <hasilSlik />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

