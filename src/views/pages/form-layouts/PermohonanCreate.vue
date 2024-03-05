<script setup>
      import { ref } from "vue";

//import router
import { useRouter } from 'vue-router';

//import api
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { VTextarea } from "vuetify/lib/components/index.mjs";
import api from "../../../api";

//init router
const router = useRouter();

//define state
const sumberdana = ref("");
const nopensiun = ref("");
const noktp = ref("");
const namaktp = ref("");
const tempatlahir = ref("");
const tgllahir = ref("");
const jeniskelamin = ref("");
const statuskawin = ref("");
const nmpasangan = ref("");
const tempatlahirpasangan = ref("");
const tgllahirpasangan = ref("");
const noktppasangan = ref("");
const agama = ref("");
const alamat = ref("");
const kelurahan = ref("");
const kecamatan = ref("");
const provinsi = ref("");
const kodepos = ref("");
const telepon = ref("");
const nohp = ref("");
const nmibukandung = ref("");
const marketing = ref("");
const plafondbiaya = ref("");
const dokslikojk = ref(null);
const errors = ref([]);

//method for handle file changes
// const handleFileChange = (e) => {
//     //assign file to state
//     namaktp.value = e.target.files[0];
// };
// method handle for file change
const fileName = computed(() => dokslikojk.value?.name);
const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1));
const fileMimeType = computed(() => dokslikojk.value?.type);

const uploadFile = (event) => {
  dokslikojk.value = event.target.files[0];
};


//method "storePost"
const submitFile = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(dokslikojk.value);
    reader.onload = async () => {
      const encodedFile = reader.result.split(",")[1];
      const data = {
        dokslikojk: encodedFile,
        fileName: fileName.value,
        fileExtension: fileExtension.value,
        fileMimeType: fileMimeType.value,
      };
    }
    try {
      //init formData
      
    const formattedTgllahir = tgllahir.value.toISOString().split('T')[0];
    const formattedTgllahirpasangan = tgllahirpasangan.value.toISOString().split('T')[0];
    let formData = new FormData();

    //assign state value to formData
    formData.append("sumberdana", sumberdana.value);
    formData.append("nopensiun", nopensiun.value);
    formData.append("noktp", noktp.value);
    formData.append("namaktp", namaktp.value);
    formData.append("tempatlahir", tempatlahir.value);
    formData.append("tgllahir", formattedTgllahir);
    formData.append("jeniskelamin", jeniskelamin.value);
    formData.append("statuskawin", statuskawin.value);
    formData.append("nmpasangan", nmpasangan.value);
    formData.append("tempatlahirpasangan", tempatlahirpasangan.value);
    formData.append("tgllahirpasangan", formattedTgllahirpasangan);
    formData.append("noktppasangan", noktppasangan.value);
    formData.append("agama", agama.value);
    formData.append("kelurahan", kelurahan.value);
    formData.append("kecamatan", kecamatan.value);
    formData.append("provinsi", provinsi.value);
    formData.append("kodepos", kodepos.value);
    formData.append("telepon", telepon.value);
    formData.append("nohp", nohp.value);
    formData.append("nmibukandung", nmibukandung.value);
    formData.append("marketing", marketing.value);
    formData.append("Plafondbiaya", plafondbiaya.value);
    // Append the file separately
    if (dokslikojk.value) {
            formData.append("dokslikojk", dokslikojk.value);
    } 

    //store data with API
    const response = await api.post('/api/permohonan/store', formData, { headers: { 'Content-Type' : 'multipart/form-data'}});
    console.log("Berhasil Memasukkan Data : ", response);
    console.log("File: ", dokslikojk.value);
    console.log("Tanggal Lahir: ", formattedTgllahir);
    console.log("Tanggal Lahir Pasangan: ", formattedTgllahirpasangan);
    router.push({ path: "/permohonans" });

    } catch (error) {
      if (error.response && error.response.data) {
        errors.value = error.response.data;
    } else {
        // Handle the error when response or data is undefined
        console.error("An unexpected error occurred:", error);
    };
      
    }
};
  // const checkbox = ref(false)

</script>

<template>
  <VForm @submit.prevent="submitFile" enctype="multipart/form-data">
    <VRow>
      <VCol cols="12" md="6">
        <VSelect
          v-model="sumberdana"
          label="Sumber Dana"
          placeholder="Pilih Sumber Dana"
          :items="['BPR SINAR TERANG', 'BPR PANJAWAN', 'BPR TAS', 'BANK KALSEL', 'ARM', 'KOPERASI SAM']"
        />
        <!-- <VTextField v-model="sumberdana" label="Sumber Dana" placeholder="Sumber Dana" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nopensiun" label="No Pensiun" placeholder="No Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktp" label="No KTP" placeholder="No KTP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namaktp" label="Nama KTP" placeholder="Masukkan Nama sesuai KTP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahir" label="Tempat Lahir" placeholder="Tempat Lahir" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahir" type="date" format="yyyy-MM-dd" label="Tanggal Lahir" placeholder="Tanggal Lahir" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VSelect
          v-model="jeniskelamin"
          label="Jenis Kelamin"
          placeholder="Jenis Kelamin"
          :items="['LAKI-LAKI', 'PEREMPUAN']"
        />
        <!-- <VTextField v-model="jeniskelamin" label="Jenis Kelamin" placeholder="Masukkan Jenis Kelamin" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VSelect
          v-model="statuskawin"
          label="Status Kawin"
          placeholder="Status Kawin"
          :items="['TIDAK KAWIN', 'KAWIN', 'DUDA', 'JANDA']"
        />
        <!-- <VTextField v-model="statuskawin" label="Status Kawin" placeholder="Status Kawin" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmpasangan" label="Nama Pasangan" placeholder="Nama Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahirpasangan" label="Tempat Lahir Pasangan" placeholder="Tempat Lahir Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahirpasangan" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Pasangan" placeholder="Tanggal Lahir Pasangan" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktppasangan" label="No KTP Pasangan" placeholder="No KTP Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VSelect
          v-model="agama"
          label="Agama"
          placeholder="Agama"
          :items="['ISLAM', 'KRISTEN', 'KATHOLIK', 'BUDHA', 'HINDU', 'KONGHUCU']"
        />
        <!-- <VTextField v-model="agama" label="Agama" placeholder="Agama" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VTextarea v-model="alamat" label="Alamat" placeholder="Alamat" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kelurahan" label="Kelurahan" placeholder="Kelurahan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kecamatan" label="Kecamatan" placeholder="Kecamatan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="provinsi" label="Provinsi" placeholder="Provinsi" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kodepos" label="Kode Pos" placeholder="Kode Pos" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="telepon" label="No Telepon" placeholder="No Telepon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nohp" label="No HP" placeholder="No HP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmibukandung" label="Nama Ibu Kandung" placeholder="Nama Ibu Kandung" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="marketing" label="Marketing" placeholder="Marketing" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="plafondbiaya" label="Plafond Biaya" placeholder="Masukkan Nominal plafondbiaya" />
      </VCol>
      <VCol cols="12" md="6">
            <VFileInput @change="uploadFile" v-model="dokslikojk" label="Dokumen SLIK" placeholder="Masukkan Dokumen SLIK" />
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
