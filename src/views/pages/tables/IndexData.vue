<script setup>
  // import ref and onMounted
  import { onMounted, ref } from 'vue';
  // import api
  import api from '../../../api';

  // define state
  const permohonans = ref([]);

  // method fetchDatapermohonans
  const fetchDataPermohonans = async () => {
    try {
      // fetch data
      const response = await api.get('/api/permohonan');
      // set response data to state "permohonans"
      permohonans.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // confirm delete data
  // const confirmDelete = (id) => {
  //   const confirmation = window.confirm('Are you sure you want to delete this item?');

  //   if (confirmation) {
  //     // User clicked OK in the confirmation dialog
  //     deletePermohonan(id);
  //   } else {
  //     // User clicked Cancel in the confirmation dialog
  //     // Handle accordingly or do nothing
  //   }
  // };
//   const deletePermohonan = async (id) => {
//   try {
//     // Delete post with API
//     await api.delete(`/api/permohonan/${id}/delete`);

//     // Call method "fetchDataPosts"
//     fetchDataPermohonans();
//     console.log("Delete data berhasil ");
//   } catch (error) {
//     // Handle errors, you might want to log the error or show an alert to the user
//     console.error('Error deleting permohonan:', error);
//   }
// };
  // run hook "onMounted"
  onMounted(() => {
    // call method "fetchDatapermohonans"
    fetchDataPermohonans();
  });
</script>
<style lang="scss">
.bg-danger{
  background-color: red !important;
}
.justify-content-center{    
  justify-content: center!important;
}
</style>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          No
        </th>
        <th>
          Nama KTP
        </th>
        <th>
          No SK Pensiun
        </th>
        <th>
          Tanggal Lahir
        </th>
        <th>
          No KTP
        </th>
        <th>
          Actions
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-if="permohonans.length === 0">
                  <td colspan="4" class="text-center">
                    <div class="alert alert-danger mb-0">Data Belum Tersedia!</div>
                  </td>
                </tr>
      <tr
       v-else v-for="(permohonan, index) in permohonans"
        :key="index">
        <td>
          {{ index + 1 }}
        </td>
        <td class="text-center">
          {{ permohonan.namaktp }}
        </td>
        <td class="text-center">
          {{ permohonan.noskpensiun }}
        </td>
        <td class="text-center">
          {{ permohonan.tgllahir }}
        </td>
        <td class="text-center">
          {{ permohonan.noktp }}
        </td>
        <td>
          <div class="d-flex justify-content-center">
            <VBtn :to="{ name: 'permohonans.edit', params: { id: permohonan.id } }" class=" v-btn btn-sm bg-warning rounded-sm shadow border-0 me-2">
                      EDIT
            </VBtn>
            <VBtn :to="{ name: 'permohonans.lihat', params: { id: permohonan.id } }" class=" v-btn btn-sm bg-warning rounded-sm shadow border-0 me-2">
                      LIHAT
            </VBtn>
          </div>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
