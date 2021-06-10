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
module.exports = controller;