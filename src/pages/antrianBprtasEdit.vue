<script setup>
import BrprtasEdit from '@/views/pages/form-layouts/analisaBprtasEdit.vue';
import '@mdi/font/css/materialdesignicons.min.css';
import { useRoute, useRouter } from 'vue-router';
import api from '../api';
const router = useRouter();
const route = useRoute();

const goBack = () => {
  router.go(-1);
}

const dokslikojk = async () => {
  try {
    const response = await api.get(`/api/permohonan/slik-ojk/${route.params.id}`);
    const filename = response.data.filename;
    if (filename) {
      const filePath = `http://localhost:8080/${filename}`;
      console.log('File Path:', filePath);
      window.open(filePath, '_blank');
    } else {
      // Show pop-up if filename is null
      alert('File Tidak Ada');
    }
  } catch (error) {
    if (error.response.status === 404) {
      // Show pop-up if file not found
      alert('File Tidak Ditemukan');
    } else {
      console.error('Error:', error);
    }
  }
}

const dilanjutkan = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusbi-approve`);
    console.log('data:', response);
    router.push({path: '/antrian-slik-bprtas'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const dikembalikan = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusbi-dikembalikan`);
    console.log('data:', response);
    router.push({path: '/antrian-slik-bprtas'});
  } catch (error) {
    console.error('Error:', error);
  }
}
const ditolak = async () => {
  try {
    const response = await api.post(`/api/permohonan/${route.params.id}/statusbi-ditolak`);
    console.log('data:', response);
    router.push({path: '/antrian-slik-bprtas'});
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VBtn type="reset" class="my-2" @click="goBack" >
          <i class="mdi icon-lg mdi-arrow-left"></i> Back
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="dokslikojk" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i> Dokumen Slik
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="dilanjutkan" >
          <i class="mdi icon-lg mdi-check-circle"></i> Dilanjutkan
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="dikembalikan" >
          <i class="mdi icon-lg mdi-restore"></i> Dikembalikan
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="ditolak" >
          <i class="mdi icon-lg mdi-close"></i> Ditolak
        </VBtn>
        <VCard title="View Data Verifikasi">
          <VCardText>
            <BrprtasEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
