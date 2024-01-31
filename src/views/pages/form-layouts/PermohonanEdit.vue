<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from "../../../api";

  const router = useRouter();
  const route = useRoute();

  // Use ref for each variable
  // data identitas pribadi
  const nopensiun = ref("");
  const noktp = ref("");
  const namaktp = ref("");
  const tempatlahir = ref("");
  const tgllahir = ref("");
  const jeniskelamin = ref("");
  const statuskawin = ref("");
  const agama = ref("");
  const alamat = ref("");
  const kelurahan = ref("");
  const kecamatan = ref("");
  const kabupaten = ref("");
  const provinsi = ref("");
  const kodepos = ref("");
  const telepon = ref("");
  const nohp = ref("");
  const lama_bekerja = ref("");
  const statusrumah = ref("");
  const mulaimenempati = ref("");
  const nmibukandung = ref("");
  const norekpemohon = ref("");
  const namabankpemohon = ref("");
  const status_hubungan = ref("");
  // tutup data identitas pribadi

  // data pasangan 
  const nmpasangan = ref("");
  const tempatlahirpasangan = ref("");
  const tgllahirpasangan = ref("");
  const noktppasangan = ref("");
  const nokkpasangan = ref("");
  const tglkkpasangan = ref("");
  const noaktanikah = ref("");
  const nourutnikah = ref("");
  const dikeluaraktanikah = ref("");
  const tglkeluaraktanikah = ref("");
  // tutup data pasangan

  // data ahli waris
  const ahliwaris = ref("");
  const tempatlahirahliwaris = ref("");
  const tgllahir_ahliwaris = ref("");
  const noktpahliwaris = ref("");
  const kk_ahliwaris = ref("");
  const tgl_ahliwaris = ref("");
  // tutup data ahli waris

  // data pembiayaan
  const noskpensiun = ref("");
  const tanggalsk = ref("");
  const terbitsk = ref("");
  const tmtpensiun = ref("");
  const nokarip = ref("");
  const npwp = ref("");
  const kdpenggunaan = ref("");
  const kdpenggunaan2 = ref("");
  // tutup data pembiayaan

  // data data pemohon pembiayaan dan referensi
  const tgllahirkarip = ref("");
  const gajisekarang = ref("");
  const sumberdana = ref("");
  const jnspensiun = ref("");
  const statuspembiayaan = ref("");
  const nmasuransi = ref("");
  const kreditsebelumnya = ref("");
  const namakantorbayar = ref("");
  const jangkawaktu = ref("");
  const jwmaksimal = ref("");
  const bungaeff = ref("");
  const plafmaksimal = ref("");
  const plafondbiaya = ref("");
  const tgltakeover = ref("");
  const tgl_kuasadebet = ref("");
  const pelunasanke = ref("");
  const marketing = ref("");
  const dokumen = ref(null);
  const fisiknasabah = ref(null);
  const wawancara = ref(null);
  // tutup data pemohon pembiayaan dan referensi


  const errors = ref([]);

  // Fetch data on component mount
  onMounted(async () => {
    try {
      const response = await api.get(`/api/permohonan/${route.params.id}`);
      const data = response.data.data;

      // Assign fetched data to reactive variables
      // data identitas pribadi pemohon 
      nopensiun.value = data.nopensiun;
      noktp.value = data.noktp;
      namaktp.value = data.namaktp;
      namaktp.value = data.namaktp;
      tempatlahir.value = data.tempatlahir;
      tgllahir.value = new Date(data.tgllahir);
      jeniskelamin.value = data.jeniskelamin;
      statuskawin.value = data.statuskawin;
      agama.value = data.agama;
      alamat.value = data.alamat;
      kelurahan.value = data.kelurahan;
      kecamatan.value = data.kecamatan;
      kabupaten.value = data.kabupaten;
      provinsi.value = data.provinsi;
      kodepos.value = data.kodepos;
      telepon.value = data.telepon;
      nohp.value = data.nohp;
      nmibukandung.value = data.nmibukandung;
      norekpemohon.value = data.norekpemohon;
      namabankpemohon.value = data.namabankpemohon;
      status_hubungan.value = data.status_hubungan;
      // tutup data identitas pribadi pemohon
      
      // data pasangan
      nmpasangan.value = data.nmpasangan;
      tempatlahirpasangan.value = data.tempatlahirpasangan;
      tgllahirpasangan.value = new Date(data.tgllahirpasangan);
      noktppasangan.value = data.noktppasangan;
      nokkpasangan.value = data.nokkpasangan;
      tglkkpasangan.value = new Date(data.tglkkpasangan);
      noaktanikah.value = data.noaktanikah;
      nourutnikah.value = data.nourutnikah;
      dikeluaraktanikah.value = data.dikeluaraktanikah;
      tglkeluaraktanikah.value = new Date(data.tglkeluaraktanikah);
      // tutup data pasangan
      
      // data ahli waris
      ahliwaris.value = data.ahliwaris;
      tempatlahirahliwaris.value = data.tempatlahirahliwaris;
      tgllahir_ahliwaris.value = new Date(data.tgllahir_ahliwaris);
      noktpahliwaris.value = data.noktpahliwaris;
      kk_ahliwaris.value = data.kk_ahliwaris;
      tgl_ahliwaris.value = new Date(data.tgl_ahliwaris);
      // tutup data ahli waris

      // data pembiayaan
      noskpensiun.value = data.noskpensiun;
      tanggalsk.value = new Date(data.tanggalsk);
      terbitsk.value = data.terbitsk;
      tmtpensiun.value = new Date(data.tmtpensiun);
      nokarip.value = data.nokarip;
      npwp.value = data.npwp;
      kdpenggunaan.value = data.kdpenggunaan;
      kdpenggunaan2.value = data.kdpenggunaan2;
      // tutup data pembiayaan 

      // data pemohon pembiayaan da referensi
      tgllahirkarip.value = new Date(data.tgllahirkarip);
      gajisekarang.value = data.gajisekarang;
      sumberdana.value = data.sumberdana;
      jnspensiun.value = data.jnspensiun;
      statuspembiayaan.value = data.statuspembiayaan;
      nmasuransi.value = data.nmasuransi;
      kreditsebelumnya.value = data.kreditsebelumnya;
      namakantorbayar.value = data.namakantorbayar;
      jangkawaktu.value = data.jangkawaktu;
      jwmaksimal.value = data.jwmaksimal;
      bungaeff.value = data.bungaeff;
      plafmaksimal.value = data.plafmaksimal;
      plafondbiaya.value = data.plafondbiaya;
      tgltakeover.value = new Date(data.tgltakeover);
      tgl_kuasadebet.value = new Date(data.tgl_kuasadebet);
      pelunasanke.value = data.pelunasanke;
      marketing.value = data.marketing;
      // dokumen.value = data.dokumen;
      // fisiknasabah.value = data.fisiknasabah;
      // wawancara.value = data.wawancara;
      // tutup data pemohon pembiayaan da referensi


      console.log("file dokumen:", data.dokumen);
      console.log("file fisik nasabah:", data.fisiknasabah);
      console.log("file wawancara nasabah:", data.wawancara);
      console.log('Fetched data berhasil');
    } catch (error) {
      console.error('Error fetching data');
    }
  });

  // method for upload file and video 
  // const fileName = computed(() => dokumen.value?.name);
  // const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1));
  // const fileMimeType = computed(() => dokumen.value?.type);

  // const uploadFile = (event) => {
  //   dokumen.value = event.target.files[0];
  //   fisiknasabah.value = event.target.files[1];
  //   wawancara.value = event.target.files[2];
  // };
  const uploadFile = (event, fileType) => {
  const selectedFile = event.target.files[0];

  if (fileType === 'dokumen') {
    dokumen.value = selectedFile;
  } else if (fileType === 'fisiknasabah') {
    fisiknasabah.value = selectedFile;
  } else if (fileType === 'wawancara') {
    wawancara.value = selectedFile;
  }
};


  // Update Pemohon function
  const updatePemohon = async () => {
    // file reader 
    // const reader = new FileReader();
    // const readerfisik = new FileReader();
    // const readerwawancara = new FileReader();
    // // reader.readAsDataURL(dokumen.value);
    // // reader.onload = async () => {
    // //   const encodedFile = reader.result.split(",")[1];
    // //   const data = {
    // //     dokumen: encodedFile,
    // //     fileName: fileName.value,
    // //     fileExtension: fileExtension.value,
    // //     fileMimeType: fileMimeType.value,
    // //   };
    // // }
    // // readerfisik.readAsDataURL(fisiknasabah.valuee);
    // // readerfisik.onload = async () => {
    // //   const encodedFile = readerfisik.result.split(",")[1];
    // //   const data = {
    // //     fisiknasabah: encodedFile,
    // //     fileName: fileName.value,
    // //     fileExtension: fileExtension.value,
    // //     fileMimeType: fileMimeType.value,
    // //   };
    // // }
    // // readerwawancara.readAsDataURL(wawancara.value);
    // // readerwawancara.onload = async () => {
    // //   const encodedFile = readerwawancara.result.split(",")[1];
    // //   const data = {
    // //     wawancara: encodedFile,
    // //     fileName: fileName.value,
    // //     fileExtension: fileExtension.value,
    // //     fileMimeType: fileMimeType.value,
    // //   };
    // // }

    try {
      // format tgllahir for year,month,date
    const formattedTgllahir = tgllahir.value.toISOString().split('T')[0];
    const formattedTgllahirpasangan = tgllahirpasangan.value.toISOString().split('T')[0];
    const formattedTglkkpasangan = tglkkpasangan.value.toISOString().split('T')[0];
    const formattedTglkeluaraktanikah = tglkeluaraktanikah.value.toISOString().split('T')[0];
    const formattedTgllahirahliwaris = tgllahir_ahliwaris.value.toISOString().split('T')[0];
    const formattedTglahliwaris = tgl_ahliwaris.value.toISOString().split('T')[0];
    const formattedTglsk = tanggalsk.value.toISOString().split('T')[0];
    const formattedTgltmtpensiun = tmtpensiun.value.toISOString().split('T')[0];
    const formattedTgllahirkarip = tgllahirkarip.value.toISOString().split('T')[0];
    const formattedTgltakeover = tgltakeover.value.toISOString().split('T')[0];
    const formattedTglkuasadebet = tgl_kuasadebet.value.toISOString().split('T')[0];
    const formData = new FormData();

    // data identitas pemohon
    formData.append("nopensiun", nopensiun.value);
    formData.append("noktp", noktp.value);
    formData.append("namaktp", namaktp.value);
    formData.append("tempatlahir", tempatlahir.value);
    formData.append("tgllahir", formattedTgllahir);
    formData.append("jeniskelamin", jeniskelamin.value);
    formData.append("statuskawin", statuskawin.value);
    formData.append("agama", agama.value);
    formData.append("alamat", alamat.value);
    formData.append("kelurahan", kelurahan.value);
    formData.append("kecamatan", kecamatan.value);
    formData.append("kabupaten", kabupaten.value);
    formData.append("provinsi", provinsi.value);
    formData.append("kodepos", kodepos.value);
    formData.append("telepon", telepon.value);
    formData.append("nohp", nohp.value);
    formData.append("lama_bekerja", lama_bekerja.value);
    formData.append("statusrumah", statusrumah.value);
    formData.append("mulaimenempati", mulaimenempati.value);
    formData.append("nmibukandung", nmibukandung.value);
    formData.append("norekpemohon", norekpemohon.value);
    formData.append("namabankpemohon", namabankpemohon.value);
    formData.append("status_hubungan", status_hubungan.value);
    // tutup data identitas pemohon
    
    // data pasangan
    formData.append("nmpasangan", nmpasangan.value);
    formData.append("tempatlahirpasangan", tempatlahirpasangan.value);
    formData.append("tgllahirpasangan", formattedTgllahirpasangan);
    formData.append("noktppasangan", noktppasangan.value);
    formData.append("nokkpasangan", nokkpasangan.value);
    formData.append("tglkkpasangan", formattedTglkkpasangan);
    formData.append("noaktanikah", noaktanikah.value);
    formData.append("nourutnikah", nourutnikah.value);
    formData.append("dikeluaraktanikah", dikeluaraktanikah.value);
    formData.append("tglkeluaraktanikah", formattedTglkeluaraktanikah);
    // tutup data pasangan
    
    // data ahliwaris
    formData.append("ahliwaris", ahliwaris.value);
    formData.append("tempatlahirahliwaris", tempatlahirahliwaris.value);
    formData.append("tgllahir_ahliwaris", formattedTgllahirahliwaris);
    formData.append("noktpahliwaris", noktpahliwaris.value);
    formData.append("kk_ahliwaris", kk_ahliwaris.value);
    formData.append("tgl_ahliwaris", formattedTglahliwaris);
    // tutup data ahliwaris
    
    // data pembiayaan
    formData.append("noskpensiun", noskpensiun.value);
    formData.append("tanggalsk", formattedTglsk);
    formData.append("terbitsk", terbitsk.value);
    formData.append("tmtpensiun", formattedTgltmtpensiun);
    formData.append("nokarip", nokarip.value);
    formData.append("npwp", npwp.value);
    formData.append("kdpenggunaan", kdpenggunaan.value);
    formData.append("kdpenggunaan2", kdpenggunaan2.value);
    // tutup data pembiayaan
    
    // data pemohon pembiayaan dan referensi
    formData.append("tgllahirkarip", formattedTgllahirkarip);
    formData.append("gajisekarang", gajisekarang.value);
    formData.append("sumberdana", sumberdana.value);
    formData.append("jnspensiun", jnspensiun.value);
    formData.append("statuspembiayaan", statuspembiayaan.value);
    formData.append("nmasuransi", nmasuransi.value);
    formData.append("kreditsebelumnya", kreditsebelumnya.value);
    formData.append("namakantorbayar", namakantorbayar.value);
    formData.append("jangkawaktu", jangkawaktu.value);
    formData.append("jwmaksimal", jwmaksimal.value);
    formData.append("bungaeff", bungaeff.value);
    formData.append("plafmaksimal", plafmaksimal.value);
    formData.append("plafondbiaya", plafondbiaya.value);
    formData.append("tgltakeover", formattedTgltakeover);
    formData.append("tgl_kuasadebet", formattedTglkuasadebet);
    formData.append("pelunasanke", pelunasanke.value);
    formData.append("marketing", marketing.value);
    // formData.append("dokumen", dokumen.value);
    // formData.append("fisiknasabah", fisiknasabah.value);
    // formData.append("wawancara", wawancara.value);
    if (dokumen.value) {
            formData.append("dokumen", dokumen.value);
    } 
    if (fisiknasabah.value) {
            formData.append("fisiknasabah", fisiknasabah.value);
    } 
    if (wawancara.value) {
            formData.append("wawancara", wawancara.value);
    } 

    // tutup data pemohon pembiayaan dan referensi



      const pemohon = await api.post(`/api/permohonan/${route.params.id}/update`, formData, { headers: { 'Content-Type' : 'multipart/form-data'}});

      console.log('Updated Data:', pemohon.data);
      console.log('File Dokumen: ', dokumen.value);
      console.log('File Video Fisik: ', fisiknasabah.value);
      console.log('File Wawancara: ', wawancara.value);
      console.log('tanggal lahir: ', formattedTgllahir);
      console.log('tanggal lahir pasangan: ', formattedTgllahirpasangan);
      router.push({
        path: '/permohonans'
      });
    } catch (error) {
      errors.value = error.response ?.data || 'An error occurred while updating data.';
      console.error('Error updating data:', error);
    }
  };
  // const checkbox = ref(false)

</script>


<template>
  <VForm @submit.prevent="updatePemohon()">
    <VRow>

      <!-- data identitas  -->
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
        <VTextField v-model="jeniskelamin" label="Jenis Kelamin" placeholder="Masukkan Jenis Kelamin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statuskawin" label="Status Kawin" placeholder="Status Kawin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="agama" label="Agama" placeholder="Agama" />
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
        <VTextField v-model="kabupaten" label="Kabupaten" placeholder="Kabupaten" />
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
        <VTextField v-model="lama_bekerja" label="Lama bekerja" placeholder="Lama Bekerja" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statusrumah" label="status rumah" placeholder="Status Rumah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="mulaimenempati" label="Mulai Menempati" placeholder="Mulai Menempati" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmibukandung" label="Nama Ibu Kandung" placeholder="Nama Ibu Kandung" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="norekpemohon" label="No Rekengin Pemohon" placeholder="No Rekening Pemohon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namabankpemohon" label="Nama Bank Pemohon" placeholder="Nama Bank Pemohon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="status_hubungan" label="Status Hubungan" placeholder="Status Hubungan" />
      </VCol>
      
      <!-- tutup data identitas -->

      <!-- data pasangan -->
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
        <VTextField v-model="nokkpasangan" label="No KK Pasangan" placeholder="No KK Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tglkkpasangan" type="date" format="yyyy-MM-dd" label="Tanggal KK Pasangan" placeholder="Tanggal KK Pasangan" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noaktanikah" label="No Akta Nikah" placeholder="No Akta Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nourutnikah" label="No Urut Nikah" placeholder="No Urut Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="dikeluaraktanikah" label="Tempat Dikeluarkan Akta Nikah" placeholder="Tempat Dikeluarkan Akta Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tglkeluaraktanikah" label="Tanggal Keluar Akta Nikah" placeholder="Tanggal Keluar Akta Nikah" />
      </VCol>
      <!-- tutup data pasangan -->

      <!-- data ahli waris -->
      <VCol cols="12" md="6">
        <VTextField v-model="ahliwaris" label="Ahli Waris" placeholder="Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahirahliwaris" label="Tempat Ahli Waris" placeholder="Tempat Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahir_ahliwaris" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Ahli Waris" placeholder="Tanggal Lahir Ahli Waris" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktpahliwaris" label="No KTP Ahli Waris" placeholder="No KTP Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahirahliwaris" label="Ahli Waris" placeholder="Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kk_ahliwaris" label="KK Ahli Waris" placeholder="KK Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgl_ahliwaris" type="date" format="yyyy-MM-dd" label="Tanggal KK Ahli Waris" placeholder="Tanggal KK Ahli Waris" v-bind:enable-time-picker="false"/>
      </VCol>
      <!-- tutup data ahli waris -->

      <!-- data pembiayaan -->
      <VCol cols="12" md="6">
        <VTextField v-model="noskpensiun" label="No. SK Pensiun" placeholder="No. SK Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tanggalsk" type="date" format="yyyy-MM-dd" label="Tanggal Lahir SK" placeholder="Tanggal Lahir SK" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="terbitsk" label="Terbit SK Pensiun" placeholder="Terbit SK Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tmtpensiun" type="date" format="yyyy-MM-dd" label="TMT SK Pensiun" placeholder="TMT SK Pensiun" v-bind:enable-time-picker="false"/>
        <!-- <VTextField v-model="tmtpensiun" label="TMT SK Pensiun" placeholder="TMT SK Pensiun" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nokarip" label="No. Karip Pensiun" placeholder="No. Karip Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="npwp" label="NPWP" placeholder="NPWP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kdpenggunaan" label="Keperluan Penggunaan" placeholder="Keperluan Penggunaan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kdpenggunaan2" label="Keperluan Penggunaan 2" placeholder="Keperluan Penggunaan 2" />
      </VCol>
      <!-- tutup data pembiayaan -->

      <!-- data pemohon pembiayaa dan referensi -->
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahirkarip" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Karip" placeholder="Tanggal Lahir Karip" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="gajisekarang" label="Gaji Sekarang" placeholder="Gaji Sekarang" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="sumberdana" label="Sumber Dana" placeholder="Sumber Dana" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jnspensiun" label="Jenis Pensiun" placeholder="Jenis Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statuspembiayaan" label="Status Pembiayaan" placeholder="Status Pembiayaan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmasuransi" label="Nama Asuransi" placeholder="Nama Asuransi" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kreditsebelumnya" label="Kantor Bayar Lama" placeholder="Kantor Bayar Lama" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namakantorbayar" label="Kantor Bayar Baru" placeholder="Kantor Bayar Baru" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jangkawaktu" label="Jangka Waktu" placeholder="Jangka Waktu" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jwmaksimal" label="Jangka Waktu Maksimal" placeholder="Jangka Waktu Maksimal" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="bungaeff" label="Bungaeff" placeholder="Bungaeff" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="plafmaksimal" label="Plafond Maksimal" placeholder="Plafond Maksimal" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="plafondbiaya" label="Plafond Biaya" placeholder="Masukkan Nominal plafondbiaya" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgltakeover" type="date" format="yyyy-MM-dd" label="Tanggal Take Over" placeholder="Tanggal Take Over" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgl_kuasadebet" type="date" format="yyyy-MM-dd" label="Tanggal Kuasa Debet" placeholder="Tanggal Kuasa Debet" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="pelunasanke" label="Pelunasan Ke" placeholder="Pelunasan Ke" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="marketing" label="Marketing" placeholder="Marketing" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'dokumen')" v-model="dokumen" label="Dokumen Berkas" placeholder="Masukkan Dokumen Berkas" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'fisiknasabah')" v-model="fisiknasabah" label="Video Fisik Nasabah" placeholder="Masukkan Video Fisik Nasabah" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'wawancara')" v-model="wawancara" label="Video Wawancara" placeholder="Masukkan Video Wawancara" />
      </VCol>

      <!-- tutup data pemohon pembiayaa dan referensi -->

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
