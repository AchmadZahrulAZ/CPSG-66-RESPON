import PuskesmasSource from '../data/puskesmas-source';

const addPatient = (button, name, nik, alamat, telepon, pembayaran, poli, jadwal, tanggal) => {
  button.addEventListener('click', async () => {
    const dataPatient = {
      NamaPasien: name.value,
      NIK: nik.value,
      Alamat: alamat.value,
      NomerTelepon: telepon.value,
      Pembayaran: pembayaran.value,
      Poli: poli.value,
      Jadwal: jadwal.value,
      Tanggal: tanggal.value
    };
    const dataPasien = await PuskesmasSource.addPasien(dataPatient);
    return dataPasien;
  });
};

export default addPatient;
