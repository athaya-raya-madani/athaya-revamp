<script setup>
import SlikEdit from '@/views/pages/form-layouts/analisaSlik.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
  router.go(-1);
}

</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VBtn type="reset" class="my-2" @click="goBack" >
          Back
        </VBtn>
        <VCard title="View Data Verifikasi Slik OJK">
          <VCardText>
            <SlikEdit/>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
