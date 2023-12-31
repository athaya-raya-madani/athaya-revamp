<script setup>
import DemoFormLayoutHorizontalForm from '@/views/pages/form-layouts/DemoFormLayoutHorizontalForm.vue';
import DemoFormLayoutHorizontalFormWithIcons from '@/views/pages/form-layouts/DemoFormLayoutHorizontalFormWithIcons.vue';
import DemoFormLayoutVerticalForm from '@/views/pages/form-layouts/DemoFormLayoutVerticalForm.vue';
import DemoFormLayoutVerticalFormWithIcons from '@/views/pages/form-layouts/DemoFormLayoutVerticalFormWithIcons.vue';
import DemoFormLayoutMultipleColumn from '@/views/pages/form-layouts/DemoFormLayoutMultipleColumn.vue';

</script>

<template>
  <div>
    <VRow>
      <VCol
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
      </VCol>
      <VCol cols="12">
        <VCard title="Multiple Column">
          <VCardText>
            <DemoFormLayoutMultipleColumn />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
