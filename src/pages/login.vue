<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue';
import logo from '@images/logo.svg?raw';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import api from "../api";

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
        console.log('Login berhasil : ', response);

        // Assuming response.data.token is the token object
        const token = response.data.token.token;

        // Store the token in local storage
        localStorage.setItem('token', token);

        router.push({ path: "/" });
    } catch (error) {
        errors.value = error.response?.data || 'An error occurred while updating data.';
        console.error('Error login data:', error);
    }
};

const isPasswordVisible = ref(false);
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          sneat
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome to sneat! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
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
                placeholder="Masukkan Username"
                label="UserName"
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
              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
