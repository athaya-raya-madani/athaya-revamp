<script setup>
import PermohonanLihat from '@/views/pages/form-layouts/permohonanLihat.vue';
import '@mdi/font/css/materialdesignicons.min.css';
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
  router.go(-1);
  }
</script>

<template>
  <div>
    <VRow>
      <!-- <VCol
        cols="12"
        md="6"
      >
        <VCard title="Horizontal Form">
          <VCardText>
            <DemoFormLayoutHorizontalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <VCard title="Horizontal Form with Icons">
          <VCardText>
            <DemoFormLayoutHorizontalFormWithIcons />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <VCard title="Vertical Form">
          <VCardText>
            <DemoFormLayoutVerticalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <VCard title="Vertical Form with Icons">
          <VCardText>
            <DemoFormLayoutVerticalFormWithIcons />
          </VCardText>
        </VCard>
      </VCol> -->
      <!-- <VCol cols="12">
        <VCard title="Multiple Column">
          <VCardText>
            <DemoFormLayoutMultipleColumn />
          </VCardText>
        </VCard>
      </VCol> -->
      <VCol cols="12">
        <VBtn type="reset" class="my-2" @click="goBack" >
          <i class="mdi icon-lg mdi-arrow-left"></i> Back
        </VBtn>
        <VCard title="Lengkapi Data">
          <VCardText>
            <PermohonanLihat />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
