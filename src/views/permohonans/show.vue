<script setup>
    //import ref
    import { ref, onMounted } from "vue";

    //import router
    import { useRouter, useRoute } from 'vue-router';

    //import api
    import api from "../../api";

    //init router
    const router = useRouter();

    //init route
    const route = useRoute();
    
    //define state
    const namaktp = ref("");
    const statuspembiayaan = ref("");
    const norektabungan = ref("");
    const nopensiun = ref("");
    const norekpemohon = ref("");
    const nmpasangan = ref("");
    const statuskawin = ref("");
    const sumberdana = ref("");
    const jeniskelamin = ref("");
    const alamat = ref("");
    const nohp = ref("");
    const errors = ref([]);

    //onMounted
    onMounted( async () => {

        //fetch detail data post by ID
        await api.get(`/api/permohonan/${route.params.id}`)
        .then(response => {
            
            //set response data to state
            namaktp.value = response.data.data.namaktp
            statuspembiayaan.value = response.data.data.statuspembiayaan
            nopensiun.value = response.data.data.nopensiun
            norektabungan.value = response.data.data.norektabungan
            norekpemohon.value = response.data.data.norekpemohon
            nmpasangan.value = response.data.data.nmpasangan
            title.value = response.data.data.title
            content.value = response.data.data.content
        });
    })

    //method for handle file changes
    const handleFileChange = (e) => {
        //assign file to state
        image.value = e.target.files[0];
    };

    //method "updatePost"
    const updatePost = async () => {

        //init formData
        let formData = new FormData();

        //assign state value to formData
        formData.append("namaktp", namaktp.value);
        formData.append("statuspembiayaan", statuspembiayaan.value);
        formData.append("norektabungan", norektabungan.value);
        formData.append("nopensiun", nopensiun.value);
        formData.append("norekpemohon", norekpemohon.value);
        formData.append("nmpasangan", nmpasangan.value);
        formData.append("statuskawin", statuskawin.value);
        formData.append("sumberdana", sumberdana.value);
        formData.append("jeniskelamin", jeniskelamin.value);
        formData.append("alamat", alamat.value);
        formData.append("nohp", nohp.value);
        formData.append("_method", "PATCH");

        //store data with API
        await api.post(`/api/posts/${route.params.id}`, formData)
        .then(() => {
            //redirect
            router.push({ path: "/posts" });
        })
        .catch((error) => {
            //assign response error data to state "errors"
            errors.value = error.response.data;
        });
    };
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="updatePost()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Image</label>
                                <input type="file" class="form-control" @change="handleFileChange($event)">
                                <div v-if="errors.image" class="alert alert-danger mt-2">
                                    <span>{{ errors.image[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Title</label>
                                <input type="text" class="form-control" v-model="title" placeholder="Title Post">
                                <div v-if="errors.title" class="alert alert-danger mt-2">
                                    <span>{{ errors.title[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Content</label>
                                <textarea class="form-control" v-model="content" rows="5" placeholder="Content Post"></textarea>
                                <div v-if="errors.content" class="alert alert-danger mt-2">
                                    <span>{{ errors.content[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>