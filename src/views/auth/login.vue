<script setup>
    //import ref
    import { ref } from "vue";

    //import router
    import { useRouter } from 'vue-router';

    //import api
    import api from "../../api";

    //init router
    const router = useRouter();

    //define state
    const userid = ref("");
    const password = ref("");
    const errors = ref([]);

    //method "storePost"
    const storeLogin = async () => {
        try{
        //init formData
        let formData = new FormData();

        //assign state value to formData
        formData.append("userid", userid.value);
        formData.append("password", password.value);

        //store data with API
        const response = await api.post('/api/auth/login', formData)
        console.log('Login berhasil : ', response);
        router.push({ path: "/" });
        }
        catch (error) {
        errors.value = error.response?.data || 'An error occurred while updating data.';
        console.error('Error login data:', error);
        }
    };
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="storeLogin()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Userid</label>
                                <input type="text" class="form-control" v-model="userid" placeholder="Masukkan userid">
                                <div v-if="errors.userid" class="alert alert-danger mt-2">
                                    <span>{{ errors.userid[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Password</label>
                                <input type="text" class="form-control" v-model="password" placeholder="Masukkan Password">
                                <div v-if="errors.password" class="alert alert-danger mt-2">
                                    <span>{{ errors.password[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>