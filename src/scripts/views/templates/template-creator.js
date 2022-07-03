const tablePasien = (pasien) => `
    <tr>
        <th>${pasien.id}</th>
        <td>${pasien.NamaPasien}</td>
        <td>${pasien.Poli}</td>
        <td>${pasien.Pembayaran}</td>
    </tr>
`;

const puskesmasCard = (puskesmas) => `
<div class="col-md-6 col-lg-4">
    <div class="puskesmas-item rounded overflow-hidden">
        <img class="img-fluid" src="./images/image3.jpg" alt="">
        <div class="position-relative p-4 pt-0">
            <div class="puskesmas-icon">
                <i class="fa-solid fa-hospital fa-3x"></i>
            </div>
            <h4 class="mb-3">${puskesmas.namaPuskesmas}</h4>
            <p>${puskesmas.alamatPuskesmas}</p>
            <a class="small fw-medium" href="#/detail-puskesmas">Lanjut daftar<i class="fa fa-arrow-right ms-2"></i></a>
        </div>
    </div>
</div>
`;

const detailPuskesmas = () => `
<div class="container">
    <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">${puskesmas.namaPuskesmas}</h1>
        <button class="btn btn-primary btn-lg" type="button"><a href="#/pendaftaran">Lanjut Daftar</a></button>
    </div>
    </div>

    <div class="row">
    <div class="row content">
        <div class="col-lg-6">
        <h2>Informasi Puskesmas</h2>
        <div class="row my-4 ps-5">
            <table class="table-borderless">
            <tbody>
                <tr>
                <td style="width:30%"><strong>Nama Puskesmas</strong></td>
                <td>${puskesmas.namaPuskesmas}</td>
                </tr>
                <tr>
                <td><strong>Alamat</strong></td>
                <td>${puskesmas.alamatPuskesmas}</td>
                </tr>
                <tr>
                <td><strong>No. Telepon</strong></td>
                <td>${puskesmas.noTelepon}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5369.666762885984!2d106.84225004223069!3d-6.389876150948072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf25812f2e9%3A0xe2482d75d1ee67b4!2sUPTD%20Puskesmas%20Sukmajaya!5e0!3m2!1sid!2sid!4v1655702322202!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
        </div>
    </div>

    <div class="row content">
        <div class="col-lg-6 mt-5">
        <h2>Kouta Hari Ini</h2>
        <div class="row my-4 ps-5">
            <table class="table-borderless">
            <tbody>
                <tr>
                <td style="width:30%"><strong>Poli Umum</strong></td>
                <td>10 Pasien</td>
                </tr>
                <tr>
                <td><strong>Poli Gigi</strong></td>
                <td>10 Pasien</td>
                </tr>
                <tr>
                <td><strong>Poli Lansia</strong></td>
                <td>100 Pasien</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    
        <div class="col-lg-6 pt-4 pt-lg-0 mt-5">
        <h2>Antrean Berlangsung</h2>
        <div class="row my-4 ps-5">
            <table class="table-borderless">
            <tbody>
                <tr>
                <td style="width:40%"><strong>Sedang Dilayani</strong></td>
                <td style="width:30%">A 005</td>
                <td style="width:30%">B 001</td>
                </tr>
            </tbody>
            </table>

            <table class="table-borderless py-3">
            <tbody>
                <tr>
                <td style="width:40%"><strong>Selanjutnya</strong></td>
                <td style="width:30%">A 005</td>
                <td style="width:30%">B 001</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
</div>
`;

export { tablePasien, puskesmasCard, detailPuskesmas };