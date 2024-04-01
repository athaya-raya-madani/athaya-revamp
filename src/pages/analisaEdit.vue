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

const berkas = async () => {
  try {
    const response = await api.get(`/api/permohonan/berkas/${route.params.id}`);
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

const wawancara = async () => {
  try {
    const response = await api.get(`/api/permohonan/wawancara/${route.params.id}`);
    const filename = response.data.videoname;
    if (filename) {
      const videoUrl = `http://localhost:8080/${filename}`;
      console.log('Video URL:', videoUrl);
      
      // Open modal dialog
      showModal(videoUrl);
      console.log('modal', showModal);
    } else {
      // Show pop-up if filename is null
      alert('Video Tidak Ada');
    }
  } catch (error) {
    if (error.response.status === 404) {
      // Show pop-up if video not found
      alert('Video Tidak Ditemukan');
    } else {
      console.error('Error:', error);
    }
  }
}


const showModal = (videoUrl) => {
  // Get the modal element by its ID
  const modal = document.getElementById('myModal');

  // Get the video element inside the modal
  const video = modal.querySelector('video');

  // Set the video source
  video.src = videoUrl;

  // Show the modal
  modal.style.display = 'block';

  // Close modal when clicked outside
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      video.pause(); // Pause the video when the modal is closed
    }
  });

  // Function to close the modal when the close button is clicked
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    video.pause(); // Pause the video when the modal is closed
  });
};

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
        <VBtn class="btn-verifikasi my-2 mx-1" @click="berkas" >
          <i class="mdi icon-lg mdi-file-pdf-box"></i>Berkas
        </VBtn>
        <VBtn class="btn-verifikasi my-2 mx-1" @click="wawancara" >
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
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <video id="modalVideo" controls></video>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "@core/scss/template/pages/dashboard.scss";
</style>
