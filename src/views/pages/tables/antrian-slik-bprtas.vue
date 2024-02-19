<script setup>
  // import ref and onMounted
  import { onMounted, ref } from 'vue';
  // import api
  import api from '../../../api';

  // define state
  const verifikasiData = ref([]);

  // method fetchDataPermohonans
  const getAntrian = async () => {
    try {
      // fetch data
      const response = await api.get('/api/permohonan/verifikasi-bank');
      // Assign fetched data to the correct variable
      verifikasiData.value = response.data;
      console.log('data antrian', verifikasiData.value);
    } catch (error) {
      console.error('Error fetching data antrian:', error);
    }
  };

  // run hook "onMounted"
  onMounted(() => {
    // call method "fetchDataPermohonans"
    getAntrian();
  });
</script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">No</th>
        <th>Nama KTP</th>
        <th>No SK Pensiun</th>
        <th>Tanggal Lahir</th>
        <th>No KTP</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="verifikasiData.length === 0">
        <td colspan="6" class="text-center">
          <div class="alert alert-danger mb-0">Data Belum Tersedia!</div>
        </td>
      </tr>
      <tr v-else v-for="(verifikasi, index) in verifikasiData" :key="index">
        <td>{{ index + 1 }}</td>
        <td class="text-center">{{ verifikasi.namaktp }}</td>
        <td class="text-center">{{ verifikasi.noskpensiun }}</td>
        <td class="text-center">{{ verifikasi.tgllahir }}</td>
        <td class="text-center">{{ verifikasi.noktp }}</td>
        <td>
          <div class="d-flex justify-content-center">
            <VBtn :to="{ name: 'antrianbprtas.edit', params: { id: verifikasi.id } }" class="v-btn btn-sm bg-warning rounded-sm shadow border-0 me-2">
              Lihat
            </VBtn>
          </div>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
