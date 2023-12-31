<script setup>
      import { ref } from "vue";

//import router
import { useRouter } from 'vue-router';

//import api
import api from "../../../api";

//init router
const router = useRouter();

//define state
const namaktp = ref("");
const statuspembiayaan = ref("");
const norektabungan = ref("");
const nopensiun = ref("");
const norekpemohon = ref("");
const nmpasangan = ref("");
const statuskawin = ref("");
const sumberdana = ref("");
const jeniskelamin = ref("");
const alamat = ref("");
const nohp = ref("");
const errors = ref([]);

//method for handle file changes
// const handleFileChange = (e) => {
//     //assign file to state
//     namaktp.value = e.target.files[0];
// };

//method "storePost"
const storePemohon = async () => {
    try {
          //init formData
    let formData = new FormData();

    //assign state value to formData
    formData.append("namaktp", namaktp.value);
    formData.append("statuspembiayaan", statuspembiayaan.value);
    formData.append("norektabungan", norektabungan.value);
    formData.append("nopensiun", nopensiun.value);
    formData.append("norekpemohon", norekpemohon.value);
    formData.append("nmpasangan", nmpasangan.value);
    formData.append("statuskawin", statuskawin.value);
    formData.append("sumberdana", sumberdana.value);
    formData.append("jeniskelamin", jeniskelamin.value);
    formData.append("alamat", alamat.value);
    formData.append("nohp", nohp.value);

    //store data with API
    const response = await api.post('/api/permohonan/store', formData)
    console.log("Berhasil Memasukkan Data : ", response)
    router.push({ path: "/permohonans" });

    } catch (error) {
      errors.value = error.response.data;
      
    }
};
  const checkbox = ref(false)

</script>

<template>
  <VForm @submit.prevent="storePemohon()">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12" md="6">
        <VTextField v-model="namaktp" label="Nama KTP" placeholder="Masukkan Nama sesuai KTP" />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol cols="12" md="6">
        <VTextField v-model="statuspembiayaan" label="Status Pembiayaan" placeholder="Status Pembiayaan" />
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12" md="6">
        <VTextField v-model="norektabungan" label="No Rek Tabungan" placeholder="No Rek Tabungan" />
      </VCol>

      <!-- 👉 City -->
      <VCol cols="12" md="6">
        <VTextField v-model="norekpemohon" label="No Rek Pemohon" placeholder="No Rek Pemohon" />
      </VCol>

      <!-- 👉 Country -->
      <VCol cols="12" md="6">
        <VTextField v-model="nopensiun" label="No Pensiun" placeholder="No Pensiun" />
      </VCol>

      <!-- 👉 Company -->
      <VCol cols="12" md="6">
        <VTextField v-model="nmpasangan" label="Nama Pasangan" placeholder="Nama Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statuskawin" label="Status Kawin" placeholder="Status Kawin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="sumberdana" label="Sumber Dana" placeholder="Sumber Dana" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jeniskelamin" label="Jenis Kelamin" placeholder="Jenis Kelamin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="alamat" label="Alamat" placeholder="Alamat" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nohp" label="No HP" placeholder="No HP" />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox v-model="checkbox" label="Remember me" />
      </VCol>

      <VCol cols="12" class="d-flex gap-4">
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn type="reset" color="secondary" variant="tonal">
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
