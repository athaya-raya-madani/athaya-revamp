<script setup>
import BrprtasEdit from '@/views/pages/form-layouts/analisaBprtasEdit.vue';
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
            <BrprtasEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
