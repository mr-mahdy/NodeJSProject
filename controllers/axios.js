const axios = require('axios');
const controller = {};

controller.postClientAPI = function () {
    const response = axios({
        method: 'post',
        url: 'https://prototipe.unpas.ac.id/situ/api/public/api-v1/klien/auth/login',
        data: {
          email: 'klien-api@gmail.com',
          password: 'klien1234'
        }
    }).then((response) => response.data);
    return response;
}

controller.postLoginUser = function (token) {
    const response = axios({
        method: 'post',
        url: 'https://prototipe.unpas.ac.id/situ/api/public/api-v1/user/login',
        headers: {
            token: token
        },
        data: {
            nama: '0004015703',
            sandi: '0004015703'
        }
    }).then((response) => response.data);
    return response;
}


// Formulir API
controller.getAllFormulir = function (username, token, page) {
    const response = axios({
        method: 'get',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/formulir?page=${page}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.addFormulir = function (username, token, data) {
    const response = axios({
        method: 'post',
        url: 'https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/formulir',
        data: {
            Nama: data['nama'],
            KodeID: 'demo',
            JumlahPilihan: data['jmlPilihan'],
            Harga: data['harga'],
            HanyaProdi1: data['hanyaProdi1'],
            KecualiProdi1: data['kecualiProdi1'],
            HanyaProdi2: data['hanyaProdi2'],
            KecualiProdi2: data['kecualiProdi2'],
            HanyaProdi3: data['hanyaProdi3'],
            KecualiProdi3: data['kecualiProdi3'],
            Keterangan:  data['ket'],
            NA: data['Y'] ? 'Y' : 'N'
        },
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.editFormulir = function (username, token, data, id) {
    const response = axios({
        method: 'put',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/formulir/${id}`,
        data: {
            Nama: data['nama'],
            KodeID: 'demo',
            JumlahPilihan: data['jmlPilihan'],
            Harga: data['harga'],
            HanyaProdi1: data['hanyaProdi1'],
            KecualiProdi1: data['kecualiProdi1'],
            HanyaProdi2: data['hanyaProdi2'],
            KecualiProdi2: data['kecualiProdi2'],
            HanyaProdi3: data['hanyaProdi3'],
            KecualiProdi3: data['kecualiProdi3'],
            Keterangan:  data['ket'],
            NA: data['NA'] ? 'Y' : 'N'
        },
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.deleteFormulir = function (username, token, id) {
    const response = axios({
        method: 'delete',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/formulir/${id}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}
// End Formulir API


// Periode API
controller.getAllPeriode = function (username, token, page) {
    const response = axios({
        method: 'get',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/gelombang?page=${page}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.addPeriode = function (username, token, data) {
    const response = axios({
        method: 'post',
        url: 'https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/gelombang',
        data: {
            PMBPeriodID: data['kodeP'],
            KodeID: 'demo',
            Nama: data['namaP'],
            TglMulai: data['tglMulai'],
            TglSelesai: data['tglSelesai'],
            WaktuSelesaiOnline: data['waktuSelesaiOnline'],
            UjianMulai: data['ujianMulai'],
            UjianSelesai: data['ujianSelesai'],
            JamUjianMulai: data['jamUjianMulai'],
            JamUjianSelesai: data['jamUjianSelesai'],
            PengumumanMulai:  data['pMulai'],
            PengumumanSelesai:  data['pSelesai'],
            BayarMulai: data['bayarMulai'],
            BayarSelesai: data['bayarSelesai'],
            TelitiBayarProdi: data['tBayarProdi'],
            NA: data['Y'] ? 'Y' : 'N',
            NomorPengumuman: data['noP'],
            NomorSuket: data['noSuket'],
        },
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.deletePeriode = function (username, token, id) {
    const response = axios({
        method: 'delete',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst-pmb/gelombang/${id}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}
// End Periode API

// Komponen USM API
controller.getAllKomponenUSM = function (username, token, page) {
    const response = axios({
        method: 'get',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/usm?page=${page}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.deleteKomponenUSM = function (username, token, id) {
    const response = axios({
        method: 'delete',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/usm/${id}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

// End Komponen USM API

// OPMB API
controller.getAllOpmb = function (username, token, page) {
    const response = axios({
        method: 'get',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst/opmb?page=${page}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

controller.deleteOpmb = function (username, token, id) {
    const response = axios({
        method: 'delete',
        url: `https://prototipe.unpas.ac.id/situ/api/public/api-v1/modul/pmb/mst/opmb/${id}`,
        headers: {
            username: username,
            token: token
        }
    }).then((response) => response.data);
    return response;
}

module.exports = controller;