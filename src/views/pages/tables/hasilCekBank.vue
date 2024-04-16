<script setup>
  // import ref and onMounted
  import { onMounted, ref } from 'vue';
  // import api
  import api from '../../../api';

  // define state
  const permohonans = ref([]);

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

  // method fetchDatapermohonans
  const fetchDataPermohonans = async () => {
    try {
      // fetch data
      const token = localStorage.getItem('token');

      if (!token) {
        // Handle case where no token is present
        console.error('Token not found.');
        return;
      }

      const response = await api.get('/api/permohonan/hasil-cek-bank', {
        headers: {
        Authorization: `Bearer ${token}`,
      },
      });
      // set response data to state "permohonans"
      permohonans.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
          No Pensiun
        </th>
        <th>
          Pendana
        </th>
        <th>
          Produk
        </th>
        <!-- <th>
          Plafond
        </th> -->
        <th>
          Keterangan Hasil Slik
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
        {{ permohonan.nopensiun }}
        </td>
        <td class="text-center">
          {{ permohonan.sumberdana }}
        </td>
        <td class="text-center">
          {{ permohonan.jnspensiun }}
        </td>
        <!-- <td class="text-center">
          {{ formatIDR(permohonan.Plafondbiaya) }}
        </td> -->
        <td class="text-center">
          {{ permohonan.keteranganbi }}
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
