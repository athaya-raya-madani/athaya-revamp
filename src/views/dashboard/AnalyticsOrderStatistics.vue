<script setup>
import { hexToRgb } from '@layouts/utils';
import { computed, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';
import api from '../../api';

// Reactive variables
const totalSales = ref(''); // Initialize as empty
const totalOrders = ref(0); // Initialize as 0
const chartSeries = ref([]); // Initialize as empty array

const vuetifyTheme = useTheme()


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
const fetchData = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found.');
      return;
    }
    const response = await api.get('/api/antrian-cabangs-statistics', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;

    // Update reactive variables with API data
    totalSales.value = data.totalplafondsam+ data.totalplafondtas + data.totalplafondpan + data.totalplafondst;
    totalOrders.value = data.recordsam + data.recordpan + data.recordst + data.recordtas;
    chartSeries.value = [data.recordam, data.recordpan, data.recordst, data.recordtas];

    // Update orders array
    orders.value = [
      {
        amount: `${data.recordst}`,
        title: 'BPR ST',
        avatarColor: 'primary',
        subtitle: 'BPR Sinar Terang',
        avatarIcon: 'bx-mobile-alt',
      },
      {
        amount: `${data.recordtas}`,
        title: 'BPR TAS',
        avatarColor: 'success',
        subtitle: 'BPR Tata Artha Sadaya',
        avatarIcon: 'bx-closet',
      },
      {
        amount: `${data.recordsam}`,
        title: 'KOPERASI SAM',
        avatarColor: 'info',
        subtitle: 'Koperasi Sukses Artha Mandiri',
        avatarIcon: 'bx-home',
      },
      {
        amount: `${data.recordpan}`,
        title: 'BPR PANJAWAN',
        avatarColor: 'secondary',
        subtitle: 'BPR Panjawan',
        avatarIcon: 'bx-football',
      },
    ];

    series.value = [
      data.recordtas,
      data.recordst,
      data.recordsam,
      data.recordpan,
    ]
    console.log('total sales', totalSales.value);
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
};

// Call fetch data function when component is mounted
onMounted(() => {
  fetchData();
});

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const disabledTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['disabled-opacity'] })`
  const primaryTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['high-emphasis-opacity'] })`
  
  return {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      width: 6,
      colors: [currentTheme.surface],
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: [
      'BPR TAS',
      'BPR ST',
      'SAM',
      'BPR PAN',
    ],
    colors: [
      currentTheme.success,
      currentTheme.primary,
      currentTheme.secondary,
      currentTheme.info,
    ],
    grid: {
      padding: {
        top: -7,
        bottom: 5,
      },
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 17,
              fontSize: '14px',
              color: disabledTextColor,
              fontFamily: 'Public Sans',
            },
            value: {
              offsetY: -17,
              fontSize: '24px',
              color: primaryTextColor,
              fontFamily: 'Public Sans',
            },
            total: {
              show: true,
              label: 'Weekly',
              fontSize: '14px',
              formatter: () => '38%',
              color: disabledTextColor,
              fontFamily: 'Public Sans',
            },
          },
        },
      },
    },
  }
})

// Reactive variable for orders
const orders = ref([]);
const series = ref([]);

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
  <VCard>
    <VCardItem class="pb-3">
      <VCardTitle class="mb-1">
        Order Statistics
      </VCardTitle>
      <VCardSubtitle>{{ formatIDR(totalSales) }}  Total Plafond</VCardSubtitle>

      <template #append>
        <div class="me-n3 mt-n8">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <div class="d-flex align-center justify-space-between mb-3">
        <div class="flex-grow-1">
          <h4 class="text-h4 mb-1">
            {{ totalOrders }}
          </h4>
          <span>Total Transaction</span>
        </div>

        <div>
          <VueApexCharts
            type="donut"
            :height="125"
            width="105"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </div>

      <VList class="card-list mt-7">
        <VListItem
          v-for="order in orders"
          :key="order.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="order.avatarColor"
            >
              <VIcon :icon="order.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="mb-1">
            {{ order.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ order.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <span>{{ order.amount }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 21px;
}
</style>
