<script setup>
import Dropdown from '@/@layouts/components/DropdownNav.vue'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import { computed, onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'



// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()
const idklppengguna = ref("");

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})


const cabang = computed(()=> {
  return idklppengguna.value !== '2' ? 'none' : 'block' ;
})
const operasioal = computed(()=> {
  return idklppengguna.value !== '11' ? 'none' : 'block' ;
})

const bprtas = computed(() => {
  return idklppengguna.value !== '8' ? 'none' : 'block' ;
})
onMounted(() => {
  const data = localStorage.getItem('idklppengguna');
  idklppengguna.value = data;
  console.log(idklppengguna.value);
});

// const isAuthorizedForPemohon = computed(() => {
//   const requiresOtorizaion = route.meta.requiresOtorizaion;
//   return !requiresOtorizaion ;
// });
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }" >
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div
          class="d-flex align-center cursor-pointer"
          style="user-select: none;"
        >
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="bx-search" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span>
        </div>

        <VSpacer />

        <IconBtn
          class="me-2"
          href="https://github.com/themeselection/sneat-vuetify-vuejs-admin-template-free"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VIcon icon="bxl-github" />
        </IconBtn>

        <IconBtn class="me-2">
          <VIcon icon="bx-bell" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'bx-home',
          to: '/dashboard',
        }"
      />
      <!-- user cabang -->
      <Dropdown title="Pengajuan Pinjaman" v-if="cabang" :style="{ display: cabang}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Pengajuan SLIK OJK',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Status Permohonan Peminjaman',
          icon: 'mdi-account-cog-outline',
          to: '/status-peminjaman',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Upload Dokumen Pembiayaan',
          icon: 'mdi-account-cog-outline',
          to: '/upload-dokumen-pembiayaan',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Buat Memo Internal Pencairan',
          icon: 'mdi-account-cog-outline',
          to: '/memo-interlan',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Pengajuan Nasabah EX dan Existing RA',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans-ra',
        }"
      />
      </Dropdown>
      <Dropdown title="Administrasi" v-if="cabang" :style="{ display: cabang}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Pembatalan Pinjaman',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Meninggal Dunia',
          icon: 'mdi-account-cog-outline',
          to: '/status-peminjaman',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Pengajuan Pelunasan',
          icon: 'mdi-account-cog-outline',
          to: '/upload-dokumen-pembiayaan',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Hapus Debitur Meninggal Dunia',
          icon: 'mdi-account-cog-outline',
          to: '/memo-interlan',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Update Tanggal PK',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans-ra',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Input Debitur Meninggal',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans-ra',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Pembatalan Pengajuan SLIK',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans-ra',
        }"
      />
      </Dropdown>
      <Dropdown title="Simulasi Kredit" v-if="cabang" :style="{ display: cabang}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Simulasi Pengajuan Kredit[Kalsel]',
          icon: 'mdi-account-cog-outline',
          to: '/permohonans',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Simulasi Kredit Pensiun[BPR Panjawan]',
          icon: 'mdi-account-cog-outline',
          to: '/status-peminjaman',
        }"
      />
      </Dropdown>
      <!-- user cabang -->

      <!-- Verifikasi & Approval -->
      <Dropdown title="Pengajuan Pinjaman" v-if="operasioal" :style="{ display: operasioal}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Upload Dokumen Pembiayaan',
          icon: 'mdi-upload',
          to: '/upload-dokumen-pembiayaan',
        }"
      />
      </Dropdown>
      <Dropdown title="Verifikasi & Approval" v-if="operasioal" :style="{ display: operasioal}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Analisa Kredit',
          icon: 'mdi-home-analytics',
          to: '/analisa-kredit',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Histori Analisa Kredit',
          icon: 'mdi-clipboard-text-clock-outline',
          to: '/history-analisa',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Kirim Data SLIK OJK',
          icon: 'mdi-account-arrow-right',
          to: '/antrian-slik',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Kirim Perbaikan ke Cabang',
          icon: 'mdi-account-edit',
          to: '/perbaikan-cabang',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Kirim Hasil SLIK ke Cabang',
          icon: 'mdi-account-check',
          to: '/slik-cabang',
        }"
      />
    <!-- Add more dropdown items as needed -->
      </Dropdown>
      <Dropdown title="Monitoring" v-if="operasioal" :style="{ display: operasioal}" icon="mdi-list-status">
      <VerticalNavLink
        :item="{
          title: 'Monitoring Pinjaman',
          icon: 'mdi-home-analytics',
          to: '/monitoring-pinjaman',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Riwayat SLIK OJK',
          icon: 'mdi-clipboard-text-clock-outline',
          to: '/riwayat-slik',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Histori Status Berkas Dokumen',
          icon: 'mdi-account-arrow-right',
          to: '/history-slik',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Riwayat Pencarian Pinjaman',
          icon: 'mdi-account-edit',
          to: '/riwayat-pencairan',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Monitoring Status Antrian Nasabah',
          icon: 'mdi-account-check',
          to: '/monitoring-nasabah',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Monitoring Permohonan yang ditolak',
          icon: 'mdi-account-check',
          to: '/monitoring-ditolak',
        }"
      />
    <!-- Add more dropdown items as needed -->
      </Dropdown>
      <!-- Verifikasi & Approval -->
      <!-- bank or vendor -->
      <Dropdown title="Bank" v-if="bprtas" :style="{display: bprtas}" icon="mdi-bank-check">
      <VerticalNavLink
        :item="{
          title: 'Antrian Slik OJK',
          icon: 'mdi-account-multiple-plus',
          to: '/antrian-slik-bprtas',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Approval BANK',
          icon: 'mdi-account-multiple-check',
          to: '/history-analisa',
        }"
      />
    <!-- Add more dropdown items as needed -->
      </Dropdown>
      <!-- bank or vendor -->

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Pages',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Login',
          icon: 'bx-log-in',
          to: '/login',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Register',
          icon: 'bx-user-plus',
          to: '/register',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Error',
          icon: 'bx-info-circle',
          to: '/no-existence',
        }"
      />

      <!-- 👉 User Interface -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'User Interface',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Typography',
          icon: 'mdi-alpha-t-box-outline',
          to: '/typography',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Icons',
          icon: 'bx-show',
          to: '/icons',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Cards',
          icon: 'bx-credit-card',
          to: '/cards',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Tables',
          icon: 'bx-table',
          to: '/tables',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Form Layouts',
          icon: 'mdi-form-select',
          to: '/form-layouts',
        }"
      />
    </template>

    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
