<script setup>
import AnalisaEdit from '@/views/pages/form-layouts/analisaEdit.vue';
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
    const response = await api.post(`/api/permohonan/${route.params.id}/status-dilanjutkan`);
    console.log('data:', response);
    router.push({path: '/analisa-kredit'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const dikembalikan = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/status-dikembalikan`);
    console.log('data:', response);
    router.push({path: '/analisa-kredit'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const ditolak = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/status-ditolak`);
    console.log('data:', response);
    router.push({path: '/analisa-kredit'});
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
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i>Berkas
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-video"></i>Wawancara
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-video"></i>Fisik Nasabah
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
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i>Cetak Cek List
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i>Cetak Cek List Kosong
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i>Pra MCC
        </VBtn>
        <VCard title="View Data Verifikasi">
          <VCardText>
            <AnalisaEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
<style lang="scss">
@use "@core/scss/template/pages/dashboard.scss";
</style>
