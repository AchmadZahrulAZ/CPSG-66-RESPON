const puskesmasNoData = `
    <div class="container p-4 my-4 text-center">
        <h1 class="my-4">DATA PUSKESMAS</h1>
        <h4 class="my-5">INFORMASI PUSKESMAS BELUM TERSEDIA<br> SILAHKAN MENGISI DATA TERLEBIH DAHULU</h4>
        <a class="btn btn-primary" href="#/staffisidatapuskesmas" role="button">Tambahkan Data</a>
    </div>
`;

const puskesmasWithData = `
    <div class="container p-4 my-4 fs-4">
        <h1 class="my-4 text-center">DATA PUSKESMAS</h1>
        <div class="row my-4">
            <div class="col-sm-3">Nama Puskesmas</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-8">Puskesmas Bandung</div>
        </div> 
        <div class="row mb-4">
            <div class="col-sm-3">Alamat Puskesmas</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-8">Jalan Bandung Raya No. 34, Kota Bandung, Jawa Barat, Indonesia</div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-3">No. Telp</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-8">085794941406</div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-3">Link Maps</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-8"><a href="http://www.google.com">http://www.google.com</a></div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-3">Poli yang Tersedia</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-6">
                <div>Poli Umum</div>
                <div>  Poli Lansia</div>
                <div>  Poli Anak</div>
                <div>  Poli Gigi</div>
                <div>  Poli Kandungan</div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-3">Denah Puskesmas</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-8">
                <img class="img-fluid" src="data:image/png;base64,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" alt="denah-puskesmas">
            </div>
        </div>
        <div class="row mb-4">
            <div class="d-flex justify-content-end col-12">
                <a class="btn btn-primary" href="#/staffisidatapuskesmas" role="button">Edit</a>
            </div>
        </div> 
    </div>
`;

export {
  puskesmasNoData,
  puskesmasWithData,
};