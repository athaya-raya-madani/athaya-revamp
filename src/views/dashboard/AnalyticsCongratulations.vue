<script setup>
import illustrationJohnDark from '@images/cards/illustration-john-dark.png';
import illustrationJohnLight from '@images/cards/illustration-john-light.png';
import { computed, onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';
import api from '../../api';

const hallo = ref('');
const { global } = useTheme()
const illustrationJohn = computed(() => global.name.value === 'dark' ? illustrationJohnDark : illustrationJohnLight)
const getUser = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token is missing');
      return;
    }

    const response = await api.get('/user', {
      headers: {
        Authorization: `${token}`
      }
    });

    const idklppengguna = response.data.data.idklppengguna;
    localStorage.setItem('idklppengguna', idklppengguna);
    const userName = response.data.data.nmlengkap; // Assuming there's a 'name' property in your user data
    hallo.value = userName; // Set the value of hallo based on the user's name
    // console.log('User Data: ', response.data.data);
  } catch (error) {
    console.log('Error getting user data', error);
  }
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <VCard class="text-center text-sm-start">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="8"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            Congratulations {{hallo}}! 🎉
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <span>
            You have done 72% 🤩 more sales today.
            <br>
            Check your new raising badge in your profile.
          </span>
          <br>
          <VBtn
            variant="tonal"
            class="mt-4"
            size="small"
          >
            View Badges
          </VBtn>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="4"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          :height="$vuetify.display.xs ? '150' : '175'"
          :class="$vuetify.display.xs ? 'mt-6 mb-n2' : 'position-absolute'"
          class="john-illustration flip-in-rtl"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 3rem;
}
</style>
