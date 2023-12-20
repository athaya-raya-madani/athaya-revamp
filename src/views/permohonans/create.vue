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

    //method for handle file changes
    // const handleFileChange = (e) => {
    //     //assign file to state
    //     namaktp.value = e.target.files[0];
    // };

    //method "storePost"
    const storePost = async () => {

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

        //store data with API
        await api.post('/api/permohonan', formData)
        .then(() => {
            //redirect
            router.push({ path: "/permohonan" });
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
                        <form @submit.prevent="storePost()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama KTP</label>
                                <input type="text" class="form-control" v-model="namaktp" placeholder="Masukkan Nama sesuai KTP">
                                <div v-if="errors.namaktp" class="alert alert-danger mt-2">
                                    <span>{{ errors.namaktp[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Status Pembiayaan</label>
                                <input type="text" class="form-control" v-model="statuspembiayaan" placeholder="Status Pembiayaan">
                                <div v-if="errors.statuspembiayaan" class="alert alert-danger mt-2">
                                    <span>{{ errors.statuspembiayaan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Rekening Tabungan</label>
                                <input type="text" class="form-control" v-model="norektabungan" placeholder="Masukkan No Rekening Tabungan">
                                <div v-if="errors.norektabungan" class="alert alert-danger mt-2">
                                    <span>{{ errors.norektabungan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Pensiunan</label>
                                <input type="text" class="form-control" v-model="nopensiun" placeholder="Masukkan No Pensiun">
                                <div v-if="errors.nopensiun" class="alert alert-danger mt-2">
                                    <span>{{ errors.nopensiun[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Rekening Pemohon</label>
                                <input type="text" class="form-control" v-model="norekpemohon" placeholder="Masukkan No Rek Pemohon">
                                <div v-if="errors.norekpemohon" class="alert alert-danger mt-2">
                                    <span>{{ errors.norekpemohon[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama Pasangan</label>
                                <input type="text" class="form-control" v-model="nmpasangan" placeholder="Masukkan Nama Pasangan jika ada">
                                <div v-if="errors.nmpasangan" class="alert alert-danger mt-2">
                                    <span>{{ errors.nmpasangan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Status Kawin</label>
                                <input type="text" class="form-control" v-model="statuskawin" placeholder="Masukkan Status Kawin">
                                <div v-if="errors.statuskawin" class="alert alert-danger mt-2">
                                    <span>{{ errors.statuskawin[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Sumber dana</label>
                                <input type="text" class="form-control" v-model="sumberdana" placeholder="Masukkan Sumber Dana">
                                <div v-if="errors.sumberdana" class="alert alert-danger mt-2">
                                    <span>{{ errors.sumberdana[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Jenis Kelamin</label>
                                <input type="text" class="form-control" v-model="jeniskelamin" placeholder="Jenis Kelamin">
                                <div v-if="errors.jeniskelamin" class="alert alert-danger mt-2">
                                    <span>{{ errors.jeniskelamin[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Alamat</label>
                                <input type="text" class="form-control" v-model="alamat" placeholder="Masukkan Alamat">
                                <div v-if="errors.alamat" class="alert alert-danger mt-2">
                                    <span>{{ errors.alamat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No HP</label>
                                <input type="text" class="form-control" v-model="nohp" placeholder="Masukkan No HP valid">
                                <div v-if="errors.nohp" class="alert alert-danger mt-2">
                                    <span>{{ errors.nohp[0] }}</span>
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