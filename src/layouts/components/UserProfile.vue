<script setup>
import api from "@/api"; // Update the path based on your project structure
import avatar1 from '@images/avatars/avatar-1.png';
import { onMounted, ref } from "vue";
// const router = useRouter();

const name = ref('');
const user = ref([]);
const router = useRouter();


const profile = async () => {
  router.push('/account-settings');
}

const idklppengguna = localStorage.getItem('idklppengguna');
const token = localStorage.getItem('token');

const logout = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      // Handle case where no token is present
      console.error('Token not found.');
      return;
    }

    // Make a request to your logout API endpoint
    await api.post('/api/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Clear the token from local storage or any other necessary cleanup
    localStorage.removeItem('token');

    // Redirect the user to the login page
    // You may need to use the router or adjust this part based on your navigation setup
    window.location.href = "/";
  } catch (error) {
    // Handle error, such as displaying an error message
    console.error('Logout error:', error);
  }
};

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

    const userName = response.data.data.nmlengkap; // Assuming there's a 'name' property in your user data
    name.value = userName; // Set the value of name based on the user's name
    // console.log('User Data: ', response.data.data);
  } catch (error) {
    console.log('Error getting user data', error);
  }
};

  
onMounted(() => {
  getUser();
})
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ name }}
            </VListItemTitle>
            <VListItemSubtitle v-if="idklppengguna === '2'">Cabang</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '11'">Operasional</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '17'">Bisnin</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '18'">Kadiv Operasinal</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '25'">SDM & GA</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '8'">BPR TAS</VListItemSubtitle>
            <VListItemSubtitle v-else-if="idklppengguna === '19'">Keuangan</VListItemSubtitle>
            <VListItemSubtitle v-else></VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-account-cog-outline"
                size="22"
              />
            </template>

            <VListItemTitle @click="profile" >Profile</VListItemTitle>
            
          </VListItem>

          <!-- 👉 Settings -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-cog"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <!-- 👉 Pricing -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-dollar"
                size="22"
              />
            </template>

            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem>

          <!-- 👉 FAQ -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-help-circle"
                size="22"
              />
            </template>

            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem to="/login">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-log-out"
                size="22"
              />
            </template>

            <VListItemTitle @click="logout">Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>

<style lang="scss">
  .nav-link{
    list-style: none;
    color: inherit;
    background: transparent;
  }
</style>
