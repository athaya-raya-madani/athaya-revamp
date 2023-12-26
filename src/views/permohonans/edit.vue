<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import api from "../../api";

const router = useRouter();
const route = useRoute();

// Use ref for each variable
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

// Fetch data on component mount
onMounted(async () => {
    try {
        const response = await api.get(`/api/permohonan/${route.params.id}`);
        const data = response.data.data;

        // Assign fetched data to reactive variables
        namaktp.value = data.namaktp;
        statuspembiayaan.value = data.statuspembiayaan;
        norektabungan.value = data.norektabungan;
        nopensiun.value = data.nopensiun;
        norekpemohon.value = data.norekpemohon;
        nmpasangan.value = data.nmpasangan;
        statuskawin.value = data.statuskawin;
        sumberdana.value = data.sumberdana;
        jeniskelamin.value = data.jeniskelamin;
        alamat.value = data.alamat;
        nohp.value = data.nohp;

        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Update Pemohon function
const updatePemohon = async () => {
    try {
        const formData = new FormData();
        formData.append('namaktp', namaktp.value);
        formData.append('statuspembiayaan', statuspembiayaan.value);
        formData.append('norektabungan', norektabungan.value);
        formData.append('nopensiun', nopensiun.value);
        formData.append('norekpemohon', norekpemohon.value);
        formData.append('nmpasangan', nmpasangan.value);
        formData.append('statuskawin', statuskawin.value);
        formData.append('sumberdana', sumberdana.value);
        formData.append('jeniskelamin', jeniskelamin.value);
        formData.append('alamat', alamat.value);
        formData.append('nohp', nohp.value);
        formData.append('_method', 'PATCH');

        const pemohon = await api.put(`/api/permohonan/${route.params.id}/update`, formData);

        console.log('Updated Data:', pemohon.data);
        router.push({ path: '/permohonans' });
    } catch (error) {
        errors.value = error.response?.data || 'An error occurred while updating data.';
        console.error('Error updating data:', error);
    }
};
</script>


<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="updatePemohon()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama KTP</label>
                                <input type="text" class="form-control" v-model="namaktp" >
                                <div v-if="errors.namaktp" class="alert alert-danger mt-2">
                                    <span>{{ errors.namaktp[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Status Pembiayaan</label>
                                <input type="text" class="form-control" v-model="statuspembiayaan" >
                                <div v-if="errors.statuspembiayaan" class="alert alert-danger mt-2">
                                    <span>{{ errors.statuspembiayaan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Rekening Tabungan</label>
                                <input type="text" class="form-control" v-model="norektabungan" >
                                <div v-if="errors.norektabungan" class="alert alert-danger mt-2">
                                    <span>{{ errors.norektabungan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Pensiunan</label>
                                <input type="text" class="form-control" v-model="nopensiun" >
                                <div v-if="errors.nopensiun" class="alert alert-danger mt-2">
                                    <span>{{ errors.nopensiun[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No Rekening Pemohon</label>
                                <input type="text" class="form-control" v-model="norekpemohon" >
                                <div v-if="errors.norekpemohon" class="alert alert-danger mt-2">
                                    <span>{{ errors.norekpemohon[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama Pasangan</label>
                                <input type="text" class="form-control" v-model="nmpasangan" >
                                <div v-if="errors.nmpasangan" class="alert alert-danger mt-2">
                                    <span>{{ errors.nmpasangan[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Status Kawin</label>
                                <input type="text" class="form-control" v-model="statuskawin" >
                                <div v-if="errors.statuskawin" class="alert alert-danger mt-2">
                                    <span>{{ errors.statuskawin[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Sumber dana</label>
                                <input type="text" class="form-control" v-model="sumberdana" >
                                <div v-if="errors.sumberdana" class="alert alert-danger mt-2">
                                    <span>{{ errors.sumberdana[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Jenis Kelamin</label>
                                <input type="text" class="form-control" v-model="jeniskelamin" >
                                <div v-if="errors.jeniskelamin" class="alert alert-danger mt-2">
                                    <span>{{ errors.jeniskelamin[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Alamat</label>
                                <input type="text" class="form-control" v-model="alamat" >
                                <div v-if="errors.alamat" class="alert alert-danger mt-2">
                                    <span>{{ errors.alamat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">No HP</label>
                                <input type="text" class="form-control" v-model="nohp" >
                                <div v-if="errors.nohp" class="alert alert-danger mt-2">
                                    <span>{{ errors.nohp[0] }}</span>
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