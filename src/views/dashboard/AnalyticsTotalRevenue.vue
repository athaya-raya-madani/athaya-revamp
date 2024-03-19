<script setup>
import { hexToRgb } from '@layouts/utils';
import { computed, onMounted, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import {
  useDisplay,
  useTheme,
} from 'vuetify';
import api from '../../api';

const vuetifyTheme = useTheme();
const display = useDisplay();

const series = ref([]);
const balanceData = ref([]);

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

    const response = await api.get('/api/antrian-cabangs', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.data.pencairan;
    const noa = response.data.noa[0];
    const totalplafond = response.data.totalplafond;

    const seriesData = [];
    const years = new Set(); // Using a Set to store unique years
    const month = new Set(); // Using a Set to store unique months

    // Iterate over the data to collect unique years and months
    data.forEach(item => {
      years.add(item.year);
      month.add(item.month_name);
    });

    // Iterate over unique years to create series data
    years.forEach(year => {
      const yearData = {
        months: month,
        name: year,
        data: []
      };

      // Iterate over the data to find entries for the current year
      data.forEach(item => {
        if (item.year === year) {
          yearData.data.push(parseFloat(item.total_plafond));
        }
      });

      // Push the year data to the seriesData array
      seriesData.push(yearData);
    });

    series.value = seriesData;

    const noas = noa.noa; 

    const monthNames = series.value.map(item => Array.from(item.months));

    // balanced data
    balanceData.value = [
      { icon: 'bx-dollar', amount: `${formatIDR(totalplafond)}`, status: `Total Plafond`, color: 'primary' },
      { icon: 'bx-wallet', amount: `${noas}`, status: `NOA`, color: 'info' }
    ];

    // const monthnames = Array.from(monthNames[0]);
    console.log('monthnames : ', monthNames[0]);
    console.log('months : ', month);
    console.log('noa : ', noas);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



onMounted(() => {
  fetchData();
});



const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;
  const disabledTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['disabled-opacity'] })`;
  const primaryTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['high-emphasis-opacity'] })`;
  const borderColor = `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`;

  const monthNames = series.value.map(item => Array.from(item.months));
  // const monthnames = Array.from(monthNames[0]);

  return {
    bar: {
      chart: {
        stacked: true,
        parentHeightOffset: 0,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 6,
        lineCap: 'round',
        colors: [currentTheme.surface],
      },
      colors: [
        `rgba(${ hexToRgb(String(currentTheme.primary)) }, 1)`
      ],
      legend: {
        offsetX: -12,
        position: 'top',
        fontSize: '14px',
        horizontalAlign: 'left',
        fontFamily: 'Public Sans',
        labels: { colors: currentTheme.secondary },
        itemMargin: {
          vertical: 4,
          horizontal: 10,
        },
        markers: {
          width: 8,
          height: 8,
          radius: 10,
          offsetX: -4,
        },
      },
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
      },
      grid: {
        borderColor,
        padding: { bottom: 5 },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '15%', // Adjusted columnWidth for reduced gap and starting from left
          endingShape: 'rounded',
          startingShape: 'rounded',
        },
      },
      xaxis: {
        type: 'category', // Menggunakan jenis kategori agar bulan ditampilkan sesuai urutan
        axisTicks: { show: false },
        crosshairs: { opacity: 0 },
        axisBorder: { show: false },
        categories: monthNames[0],
        labels: {
          style: {
            fontSize: '14px',
            colors: disabledTextColor,
            fontFamily: 'Public Sans',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            colors: disabledTextColor,
            fontFamily: 'Public Sans',
          },
        },
      },
      responsive: [
        {
          breakpoint: display.thresholds.value.xl,
          options: { plotOptions: { bar: { columnWidth: '43%' } } },
        },
        {
          breakpoint: display.thresholds.value.lg,
          options: { plotOptions: { bar: { columnWidth: '50%' } } },
        },
        {
          breakpoint: display.thresholds.value.md,
          options: { plotOptions: { bar: { columnWidth: '42%' } } },
        },
        {
          breakpoint: display.thresholds.value.sm,
          options: { plotOptions: { bar: { columnWidth: '45%' } } },
        },
      ],
    },
    radial: {
      chart: { sparkline: { enabled: true } },
      labels: ['Growth'],
      stroke: { dashArray: 5 },
      colors: [`rgba(${ hexToRgb(String(currentTheme.primary)) }, 1)`],
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          opacityTo: 0.6,
          opacityFrom: 1,
          shadeIntensity: 0.5,
          stops: [
            30,
            70,
            100,
          ],
          inverseColors: false,
          gradientToColors: [currentTheme.primary],
        },
      },
      plotOptions: {
        radialBar: {
          // Adjusting startAngle and endAngle for alignment with the left side
          endAngle: 180,
          startAngle: 0,
          hollow: { size: '55%' },
          track: { background: 'transparent' },
          dataLabels: {
            name: {
              offsetY: 25,
              fontWeight: 600,
              fontSize: '16px',
              color: currentTheme.secondary,
              fontFamily: 'Public Sans',
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '24px',
              color: primaryTextColor,
              fontFamily: 'Public Sans',
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 900,
          options: { chart: { height: 200 } },
        },
        {
          breakpoint: 735,
          options: { chart: { height: 200 } },
        },
        {
          breakpoint: 660,
          options: { chart: { height: 200 } },
        },
        {
          breakpoint: 600,
          options: { chart: { height: 280 } },
        },
      ],
    },
  };
});


const moreList = [
  {
    title: 'Download Grafik',
    value: 'downloadChart',
  }
];

</script>

<template>
   <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="7"
        xl="8"
        :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
      >
        <VCardItem class="pb-0">
          <VCardTitle>Total Revenue</VCardTitle>

          <template #append>
            <div class="me-n3">
              <MoreBtn :menu-list="moreList" />
            </div>
          </template>
        </VCardItem>

        <!-- bar chart -->
        <VueApexCharts
          id="bar-chart"
          type="bar"
          :height="336"
          :options="chartOptions.bar"
          :series="series"
        />
      </VCol>

      <VCol
        cols="12"
        sm="5"
        xl="4"
      >
        <VCardText class="text-center">
          <VBtn
            size="small"
            variant="tonal"
            append-icon="bx-chevron-down"
            class="mt-4"
          >
            2023
            <VMenu activator="parent">
              <VList>
                <VListItem
                  v-for="(item, index) in balanceData"
                  :key="index"
                  :value="item.year"
                >
                  <VListItemTitle>{{ item.year }}</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>

          <!-- radial chart -->
          <VueApexCharts
            type="radialBar"
            :height="200"
            :options="chartOptions.radial"
            :series="[78]"
            class="mt-6"
          />

          <p class="font-weight-medium text-high-emphasis mb-7">
            62% Company Growth
          </p>
          <div class="d-flex align-center justify-center gap-x-8 gap-y-4 ">
            <div
              v-for="data in balanceData"
              :key="data.year"
              class="d-flex align-center gap-3"
            >
              <VAvatar
                :icon="data.icon"
                :color="data.color"
                size="38"
                rounded
                variant="tonal"
              />

              <div class="text-start">
                <span class="text-sm"> {{ data.status }}</span>
                <h6 class="text-base font-weight-medium">
                  {{ data.amount }}
                </h6>
              </div>
            </div>
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss">
#bar-chart .apexcharts-series[rel="2"] {
  transform: translateY(-10px);
}
</style>
