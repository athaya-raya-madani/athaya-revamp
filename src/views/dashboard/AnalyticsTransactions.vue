<script setup>
import { ref } from 'vue';
import api from '../../api';


const namaktp = ref("");
const Plafondbiaya = ref("");
const sumberdana = ref("");
const data = ref([]);



const fetchDataTransaksi = async () => {
    try {
      // fetch data
      const token = localStorage.getItem('token');

      if (!token) {
        // Handle case where no token is present
        console.error('Token not found.');
        return;
      }

      const response = await api.get('/api/antrian-cabang', {
        headers: {
        Authorization: `Bearer ${token}`,
      },
      });

      data.value = response.data.transaksi;
      console.log('data', data.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // run hook "onMounted"
  onMounted(() => {
    fetchDataTransaksi();
  });

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

const moreList = [
  {
    title: 'Share',
    value: 'Share',
  },
  {
    title: 'Refresh',
    value: 'Refresh',
  },
  {
    title: 'Update',
    value: 'Update',
  },
]
</script>

<template>
  <VCard title="Transactions">
    <template #append>
      <div class="me-n3 mt-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(transaksi, index) in data"
          :key="index"
        >
          <!-- <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="item.color"
              :image="item.icon"
              class="me-3"
            />
          </template> -->

          <VListItemTitle>
            {{ transaksi.namaktp }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled text-warning">
            {{ transaksi.sumberdana }}
          </VListItemSubtitle>

          <template #append>
            <VListItemAction>
              <VChip class="hasil-plafond me-1 text-success">
                {{ formatIDR(transaksi.Plafondbiaya)}}
              </VChip>
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 1.6rem;
  }
  .hasil-plafond{
    font-size: 17px !important;
  }
</style>
