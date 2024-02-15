<script setup>
import AnalisaEdit from '@/views/pages/form-layouts/analisaEdit.vue';
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
        <VCard title="View Data Verifikasi">
          <VCardText>
            <AnalisaEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
