<script setup>
import AnalyticsCongratulations from '@/views/dashboard/AnalyticsCongratulations.vue'
import AnalyticsFinanceTabs from '@/views/dashboard/AnalyticsFinanceTab.vue'
import AnalyticsOrderStatistics from '@/views/dashboard/AnalyticsOrderStatistics.vue'
import AnalyticsProfitReport from '@/views/dashboard/AnalyticsProfitReport.vue'
import AnalyticsTotalRevenue from '@/views/dashboard/AnalyticsTotalRevenue.vue'
import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue'

import { onMounted } from 'vue'
import api from '../api'
// 👉 Images
import chart from '@images/cards/chart-success.png'
import card from '@images/cards/credit-card-primary.png'
import paypal from '@images/cards/paypal-error.png'
import wallet from '@images/cards/wallet-info.png'
const cair = ref('');
const antrianslik = ref('');
const antrianverifikasi = ref('');
const pencairanvalue = ref('');

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

const getAntrian = async () => {
  try{
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

    const slik = response.data.slik;
    const verifikasi = response.data.verifikasi;
    const pencairan = response.data.pencairan;
    const cairvalue = response.data.pencairanplafond;

    cair.value = pencairan,
    antrianslik.value = slik,
    antrianverifikasi.value = verifikasi,
    pencairanvalue.value = cairvalue,
    console.log('pencairan: ', pencairan);
    console.log('antrianslik: ', slik);
    console.log('antrianverifikasi: ', verifikasi);
    console.log('antrianverifikasi: ', cairvalue);
    // console.log('antrianslik', antiranslik);
    // console.log('antrianverifikasi', antirianverifikasi);
  } catch (error) {
    console.error('error retrieving data', error);
  }
}
onMounted(() => {
  getAntrian();
});
</script>

<template>
  <VRow>
    <!-- 👉 Congratulations -->
    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsCongratulations />
    </VCol>

    <VCol
      cols="12"
      sm="4"
    >
      <VRow>
        <!-- 👉 Profit -->
        <VCol
          cols="12"
          md="6"
        >
          <CardStatisticsVertical
            v-bind="{
              title: 'Total Pengajuan',
              image: chart,
              stats: cair,
              change: 72.80,
            }"
          />
        </VCol>

        <!-- 👉 Sales -->
        <VCol
          cols="12"
          md="6"
        >
          <CardStatisticsVertical
            v-bind="{
              title: 'Antiran Slik',
              image: wallet,
              stats: antrianslik,
              change: 28.42,
            }"
          />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Total Revenue -->
    <VCol
      cols="12"
      md="8"
      order="2"
      order-md="1"
    >
      <AnalyticsTotalRevenue />
    </VCol>

    <VCol
      cols="12"
      sm="8"
      md="4"
      order="1"
      order-md="2"
    >
      <VRow>
        <!-- 👉 Payments -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            v-bind=" {
              title: 'Total Pencairan',
              image: paypal,
              stats: formatIDR(pencairanvalue),
              change: 14.82,
            }"
          />
        </VCol>

        <!-- 👉 Revenue -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            v-bind="{
              title: 'Antrian Verifikasi',
              image: card,
              stats: antrianverifikasi,
              change: 28.14,
            }"
          />
        </VCol>
      </VRow>

      <VRow>
        <!-- 👉 Profit Report -->
        <VCol
          cols="12"
          sm="12"
        >
          <AnalyticsProfitReport />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Order Statistics -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsOrderStatistics />
    </VCol>

    <!-- 👉 Tabs chart -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsFinanceTabs />
    </VCol>

    <!-- 👉 Transactions -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsTransactions />
    </VCol>
  </VRow>
</template>
