<script setup>
  // import ref and onMounted
  import { ref, onMounted } from 'vue';
  // import api
  import api from '../../api';

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
  const confirmDelete = (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');

    if (confirmation) {
      // User clicked OK in the confirmation dialog
      deletePermohonan(id);
    } else {
      // User clicked Cancel in the confirmation dialog
      // Handle accordingly or do nothing
    }
  };
  const deletePermohonan = async (id) => {
  try {
    // Delete post with API
    await api.delete(`/api/permohonan/${id}/delete`);

    // Call method "fetchDataPosts"
    fetchDataPermohonans();
    console.log("Delete data berhasil ");
  } catch (error) {
    // Handle errors, you might want to log the error or show an alert to the user
    console.error('Error deleting permohonan:', error);
  }
};
  // run hook "onMounted"
  onMounted(() => {
    // call method "fetchDatapermohonans"
    fetchDataPermohonans();
  });
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-12">
        <router-link :to="{ name: 'permohonans.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">
          ADD NEW permohonan
        </router-link>
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <table class="table table-bordered">
              <thead class="bg-dark text-white">
                <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Provinsi</th>
                  <th scope="col" style="width: 15%">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="permohonans.length === 0">
                  <td colspan="4" class="text-center">
                    <div class="alert alert-danger mb-0">Data Belum Tersedia!</div>
                  </td>
                </tr>
                <tr v-else v-for="(permohonan, index) in permohonans" :key="index">
                  <td class="text-center">{{ permohonan.namaktp }}</td>
                  <td>{{ permohonan.alamat }}</td>
                  <td>{{ permohonan.provinsi }}</td>
                  <td class="text-center">
                    <router-link :to="{ name: 'permohonans.edit', params: { id: permohonan.id } }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">
                      EDIT
                    </router-link>
                    <button class="btn btn-sm btn-danger rounded-sm shadow border-0" @click="confirmDelete(permohonan.id)">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
