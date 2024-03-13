<script setup>
import logo from '@images/arm.svg?raw';
import loginBanner from '@images/login-banner.svg?raw';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import api from "../../api";

const router = useRouter();

const userid = ref("");
const password = ref("");
const errors = ref([]);

const storeLogin = async () => {
    try {
        let formData = new FormData();
        formData.append("userid", userid.value);
        formData.append("password", password.value);

        const response = await api.post('/api/auth/login', formData);
        console.log('Login berhasil ');

        // Assuming response.data.token is the token object
        const token = response.data.token;
        // console.log(token);

        // Store the token in local storage
        localStorage.setItem('token', token);

        // Extract idklppengguna value from the response
        const idklppengguna = response.data.data[0].idklppengguna;

        // Store the idklppengguna in local storage
        localStorage.setItem('idklppengguna', idklppengguna);

        router.push('/dashboard');
    } catch (error) {
        errors.value = error.response?.data || 'An error occurred while updating data.';
        console.error('Error login data:', error);
    }
};


const isPasswordVisible = ref(false);
</script>


<template>
  <div class="auth-wrapper d-flex align-center primary justify-center pa-4">
    <VRow>
      <VCol class="login-card">
            <VCard
          class="auth-card pa-4 pt-7"
          max-width="600"
        >
          <VCardItem class="justify-center">
            <template #prepend>
              <div class="d-flex">
                <div
                  class="d-flex text-primary img-large"
                  v-html="logo"
                />
              </div>
            </template>

            <!-- <VCardTitle class="text-2xl font-weight-bold">
              Athaya Raya Madani
            </VCardTitle> -->
          </VCardItem>

          <VCardText class="pt-2">
            <h5 class="text-h4 text-center mb-1">
              Selamat Datang di <br> Athaya Raya Madani
            </h5>
            <p class="mb-0 text-center">
              Login untuk masuk ke dashboard
            </p>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="storeLogin()">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="userid"
                    autofocus
                    placeholder="Masukkan User id"
                    label="User id"
                    type="text"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="Password"
                    placeholder="············"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                  <!-- login button -->
                  <VBtn class="mt-3"
                    block
                    type="submit"
                  >
                    Login
                  </VBtn>
                </VCol>

              </VRow>
            </VForm>
          </VCardText>
            </VCard>
      </VCol>
        <VCol class="login-banner-wrapper">
            <VCardItem class="justify-center">
                <template #prepend>
                  <div class="d-flex login-banner">
                    <div
                      class="d-flex text-primary image"
                      v-html="loginBanner"
                    />
                  </div>
                </template>
              </VCardItem>
        </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

</style>
