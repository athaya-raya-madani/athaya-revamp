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
  const Plafondbiaya = ref("");
  const tgltakeover = ref("");
  const tgl_kuasadebet = ref("");
  const pelunasanke = ref("");
  const marketing = ref("");
  const instansipensiun = ref("");
  const kaliangsuran = ref(0);
  const tatalaksana = ref("");
  const bybank = ref("");
  const byadm = ref("");
  const byasuransi = ref("");
  const bukatabungan = ref("");
  const simpananwajib = ref("");
  const potangsuran = ref("");
  const retensi = ref("");


  // function for every format number
  // Function to format number into Indonesian Rupiah (IDR) format
  function formatIDR(number, precision) {
  // Check if the number is not empty or undefined
  if (!number && number !== 0) return '';

  // Convert the number to string
  let strNumber = Number(number).toFixed(precision);

  // Split the string into array of characters
  let chars = strNumber.split('');

  // Initialize a variable to store formatted number
  let formattedNumber = '';

  // Flag to indicate whether the decimal point is reached
  let decimalReached = false;

  // Counter to track the number of zeros after the decimal point
  let zerosCount = 0;

  // Track the position of the decimal point
  let decimalPosition = 0;

  // Iterate through each character in the array
  for (let i = chars.length - 1; i >= 0; i--) {
    // Check if the current character is the decimal point
    if (chars[i] === '.') {
      // Set flag to true indicating decimal point is reached
      decimalReached = true;
      // Add the decimal point to the formatted number
      formattedNumber = '.' + formattedNumber;
      // Store the position of the decimal point
      decimalPosition = formattedNumber.length - 1;
    } else {
      // Add the current character to the formatted number
      formattedNumber = chars[i] + formattedNumber;
      // Increment the zeros count if decimal point is reached
      if (decimalReached && chars[i] === '0') {
        zerosCount++;
      } else {
        // Reset the zeros count if non-zero digit is encountered
        zerosCount = 0;
      }
      // Add a comma after every 3 digits from the right, except for the last group of digits
      if ((chars.length - i) % 3 === 0 && i !== 0) {
        formattedNumber = '.' + formattedNumber;
      }
    }

    // Remove the trailing zeros after the decimal point based on precision
    if (decimalReached && zerosCount >= precision) {
      formattedNumber = formattedNumber.slice(0, decimalPosition - precision);
      zerosCount--;
    }
  }

  // Return the formatted number with 'IDR' prefix
  return 'Rp. ' + formattedNumber;
}



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
      tgltakeover.value = new Date(data.tgltakeover);
      tgl_kuasadebet.value = new Date(data.tgl_kuasadebet);
      pelunasanke.value = data.pelunasanke;
      marketing.value = data.marketing;
      instansipensiun.value = data.instansipensiun;

      // biaya biaya
      Plafondbiaya.value = data.Plafondbiaya;
      tatalaksana.value = data.tatalaksana;
      potangsuran.value = data.potangsuran;
      bybank.value = data.bybank;
      byadm.value = data.byadm;
      retensi.value = data.retensi;
      byasuransi.value = data.byasuransi;
      // tutup biaya biaya
      
      // dokumen.value = data.dokumen;
      // fisiknasabah.value = data.fisiknasabah;
      // wawancara.value = data.wawancara;
      // tutup data pemohon pembiayaan da referensi

      console.log('Fetched data berhasil');
    } catch (error) {
      console.error('Error fetching data');
    } finally {
    formDisabled.value = false; // After data is fetched, disable the form fields
  }
  });


 
</script>


<template>
  <VForm>
    <VRow>

      <!-- data identitas  -->
      <VCol cols="12" md="6">
        <VTextField v-model="nopensiun" label="No Pensiun" :disabled="formDisabled" placeholder="No Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktp" label="No KTP" :disabled="formDisabled" placeholder="No KTP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namaktp" label="Nama KTP" :disabled="formDisabled" placeholder="Masukkan Nama sesuai KTP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahir" label="Tempat Lahir" :disabled="formDisabled" placeholder="Tempat Lahir" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahir" type="date"  format="yyyy-MM-dd" label="Tanggal Lahir" :disabled="formDisabled" placeholder="Tanggal Lahir" v-bind:enable-time-picker="false"/>
      </VCol>
      <!-- hidden field -->
      <VCol cols="12" md="6">
        <VTextField v-model="umurthn" label="Umur Tahun" :disabled="formDisabled" placeholder="Umur" />
      </VCol><VCol cols="12" md="6">
        <VTextField v-model="umurbln" label="Umur Bulan" :disabled="formDisabled" placeholder="Umur" />
      </VCol><VCol cols="12" md="6">
        <VTextField v-model="umurhari" label="Umur Hari" :disabled="formDisabled" placeholder="Umur" />
      </VCol>
      <!-- tutup hidden field -->
      <VCol cols="12" md="6">
        <VTextField v-model="jeniskelamin" label="Jenis Kelamin" :disabled="formDisabled" placeholder="Masukkan Jenis Kelamin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statuskawin" label="Status Kawin" :disabled="formDisabled" placeholder="Status Kawin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="agama" label="Agama" :disabled="formDisabled" placeholder="Agama" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextarea v-model="alamat" label="Alamat" :disabled="formDisabled" placeholder="Alamat" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kelurahan" label="Kelurahan" :disabled="formDisabled" placeholder="Kelurahan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kecamatan" label="Kecamatan" :disabled="formDisabled" placeholder="Kecamatan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kabupaten" label="Kabupaten" :disabled="formDisabled" placeholder="Kabupaten" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="provinsi" label="Provinsi" :disabled="formDisabled" placeholder="Provinsi" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kodepos" label="Kode Pos" :disabled="formDisabled" placeholder="Kode Pos" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="telepon" label="No Telepon" :disabled="formDisabled" placeholder="No Telepon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nohp" label="No HP" :disabled="formDisabled" placeholder="No HP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="lama_bekerja" label="Lama bekerja" :disabled="formDisabled" placeholder="Lama Bekerja" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statusrumah" label="status rumah" :disabled="formDisabled" placeholder="Status Rumah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="mulaimenempati" label="Mulai Menempati" :disabled="formDisabled" placeholder="Mulai Menempati" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmibukandung" label="Nama Ibu Kandung" :disabled="formDisabled" placeholder="Nama Ibu Kandung" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="norekpemohon" label="No Rekengin Pemohon" :disabled="formDisabled" placeholder="No Rekening Pemohon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namabankpemohon" label="Nama Bank Pemohon" :disabled="formDisabled" placeholder="Nama Bank Pemohon" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="status_hubungan" label="Status Hubungan" :disabled="formDisabled" placeholder="Status Hubungan" />
      </VCol>
      
      <!-- tutup data identitas -->

      <!-- data pasangan -->
      <VCol cols="12" md="6">
        <VTextField v-model="nmpasangan" label="Nama Pasangan" :disabled="formDisabled" placeholder="Nama Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahirpasangan" label="Tempat Lahir Pasangan" :disabled="formDisabled" placeholder="Tempat Lahir Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahirpasangan" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Pasangan" :disabled="formDisabled" placeholder="Tanggal Lahir Pasangan" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktppasangan" label="No KTP Pasangan" :disabled="formDisabled" placeholder="No KTP Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nokkpasangan" label="No KK Pasangan" :disabled="formDisabled" placeholder="No KK Pasangan" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tglkkpasangan" type="date" format="yyyy-MM-dd" label="Tanggal KK Pasangan" :disabled="formDisabled" placeholder="Tanggal KK Pasangan" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noaktanikah" label="No Akta Nikah" :disabled="formDisabled" placeholder="No Akta Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nourutnikah" label="No Urut Nikah" :disabled="formDisabled" placeholder="No Urut Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="dikeluaraktanikah" label="Tempat Dikeluarkan Akta Nikah" :disabled="formDisabled" placeholder="Tempat Dikeluarkan Akta Nikah" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tglkeluaraktanikah" type="date"  format="yyyy-MM-dd" label="Tanggal Keluar Akta Nikah" :disabled="formDisabled" placeholder="Tanggal Keluar Akta Nikah" v-bind:enable-time-picker="false"/>
      </VCol>
      <!-- tutup data pasangan -->

      <!-- data ahli waris -->
      <VCol cols="12" md="6">
        <VTextField v-model="ahliwaris" label="Ahli Waris" :disabled="formDisabled" placeholder="Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tempatlahirahliwaris" label="Tempat Ahli Waris" :disabled="formDisabled" placeholder="Tempat Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahir_ahliwaris" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Ahli Waris" :disabled="formDisabled" placeholder="Tanggal Lahir Ahli Waris" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="noktpahliwaris" label="No KTP Ahli Waris" :disabled="formDisabled" placeholder="No KTP Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kk_ahliwaris" label="KK Ahli Waris" :disabled="formDisabled" placeholder="KK Ahli Waris" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgl_ahliwaris" type="date" format="yyyy-MM-dd" label="Tanggal KK Ahli Waris" :disabled="formDisabled" placeholder="Tanggal KK Ahli Waris" v-bind:enable-time-picker="false"/>
      </VCol>
      <!-- tutup data ahli waris -->

      <!-- data pembiayaan -->
      <VCol cols="12" md="6">
        <VTextField v-model="noskpensiun" label="No. SK Pensiun" :disabled="formDisabled" placeholder="No. SK Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tanggalsk" type="date" format="yyyy-MM-dd" label="Tanggal Lahir SK" :disabled="formDisabled" placeholder="Tanggal Lahir SK" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="terbitsk" label="Terbit SK Pensiun" :disabled="formDisabled" placeholder="Terbit SK Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tmtpensiun" type="date" format="yyyy-MM-dd" label="TMT SK Pensiun" :disabled="formDisabled" placeholder="TMT SK Pensiun" v-bind:enable-time-picker="false"/>
        <!-- <VTextField v-model="tmtpensiun" label="TMT SK Pensiun" :disabled="formDisabled" placeholder="TMT SK Pensiun" /> -->
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nokarip" label="No. Karip Pensiun" :disabled="formDisabled" placeholder="No. Karip Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="npwp" label="NPWP" :disabled="formDisabled" placeholder="NPWP" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kdpenggunaan" label="Keperluan Penggunaan" :disabled="formDisabled" placeholder="Keperluan Penggunaan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kdpenggunaan2" label="Keperluan Penggunaan 2" :disabled="formDisabled" placeholder="Keperluan Penggunaan 2" />
      </VCol>
      <!-- tutup data pembiayaan -->

      <!-- data pemohon pembiayaa dan referensi -->
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgllahirkarip" type="date" format="yyyy-MM-dd" label="Tanggal Lahir Karip" :disabled="formDisabled" placeholder="Tanggal Lahir Karip" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="gajisekarang" :value="formatIDR(gajisekarang)" label="Gaji Sekarang" :disabled="formDisabled" placeholder="Gaji Sekarang" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="sumberdana" label="Sumber Dana" :disabled="formDisabled" placeholder="Sumber Dana" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jnspensiun" label="Jenis Pensiun" :disabled="formDisabled" placeholder="Jenis Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="statuspembiayaan" label="Status Pembiayaan" :disabled="formDisabled" placeholder="Status Pembiayaan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="nmasuransi" label="Nama Asuransi" :disabled="formDisabled" placeholder="Nama Asuransi" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="kreditsebelumnya" label="Kantor Bayar Lama" :disabled="formDisabled" placeholder="Kantor Bayar Lama" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="instansipensiun" label="Instansi Pensiun" :disabled="formDisabled" placeholder="Instansi Pensiun" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="namakantorbayar" label="Kantor Bayar Baru" :disabled="formDisabled" placeholder="Kantor Bayar Baru" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="jangkawaktu" label="Jangka Waktu" :disabled="formDisabled" placeholder="Jangka Waktu" />
      </VCol>
      <VCol cols="12" md="6">
        <VSelect
          v-model="kaliangsuran"
        />
      </VCol>
      <!-- <VCol cols="12" md="6">
        <VTextField v-model="plafmaksimal" label="Plafond Maksimal" :disabled="formDisabled" placeholder="Plafond Maksimal" />
      </VCol> -->
      <VCol cols="12" md="6">
        <VTextField v-model="Plafondbiaya" :value="formatIDR(Plafondbiaya)" label="Plafond Biaya" :disabled="formDisabled" placeholder="Masukkan Nominal Plafondbiaya" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="bybank" :value="formatIDR(bybank)" label="Biay Kemitraan" :disabled="formDisabled" placeholder="Biaya Kemitraan" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="byadm" :value="formatIDR(byadm)" label="Biaya Admin" :disabled="formDisabled" placeholder="Biaya Admin" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="potangsuran" :value="formatIDR(potangsuran)" label="Potongan Angsuran" :disabled="formDisabled" placeholder="Potongan Angsuran" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="retensi" :value="formatIDR(retensi)" label="Blokir Angsuran" :disabled="formDisabled" placeholder="Blokir Angsuran" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="byasuransi" :value="formatIDR(byasuransi)" label="Biaya Asuransi" :disabled="formDisabled" placeholder="Biaya Asuransi" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="tatalaksana" :value="formatIDR(tatalaksana)" label="Tatalaksana" :disabled="formDisabled" placeholder="Masukkan Nominal Tatalaksana" />
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgltakeover" type="date" format="yyyy-MM-dd" label="Tanggal Take Over" :disabled="formDisabled" placeholder="Tanggal Take Over" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VueDatePicker v-model="tgl_kuasadebet" type="date" format="yyyy-MM-dd" label="Tanggal Kuasa Debet" :disabled="formDisabled" placeholder="Tanggal Kuasa Debet" v-bind:enable-time-picker="false"/>
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="pelunasanke" label="Pelunasan Ke" :disabled="formDisabled" placeholder="Pelunasan Ke" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="marketing" label="Marketing" :disabled="formDisabled" placeholder="Marketing" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'dokumen')" v-model="dokumen" label="Dokumen Berkas" :disabled="formDisabled" placeholder="Masukkan Dokumen Berkas" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'fisiknasabah')" v-model="fisiknasabah" label="Video Fisik Nasabah" :disabled="formDisabled" placeholder="Masukkan Video Fisik Nasabah" />
      </VCol>
      <VCol cols="12" md="6">
        <VFileInput @change="($event) => uploadFile($event, 'wawancara')" v-model="wawancara" label="Video Wawancara" :disabled="formDisabled" placeholder="Masukkan Video Wawancara" />
      </VCol>

      <!-- tutup data pemohon pembiayaa dan referensi -->
    </VRow>
  </VForm>
</template>
