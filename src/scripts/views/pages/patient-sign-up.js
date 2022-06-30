const SignUp = {
  async render() {
    return `
    <div class="content" id="main-content">
      <section class="contact section-bg">
        <div class="container">
  
          <div class="section-title">
            <h2>Registrasi</h2>
            <p>Lakukan registrasi untuk menggunakan layanan platform kami</p>
          </div>
    
          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <img src="../images/image7.jpg" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" alt="Dokter"/>
              </div>
            </div>
      
            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="" method="post" role="form" class="email-form">
                <div class="row">
                  <div class="form-group">
                      <label for="name">Nama</label>
                      <input placeholder="Masukkan Nama Anda" type="text" name="name" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="nik">NIK</label>
                      <input placeholder="Masukkan No NIK Anda" type="number" name="nik" class="form-control" id="nik" required>
                  </div>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input placeholder="Masukkan Email Anda" type="email" class="form-control" name="email" id="email" required>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input placeholder="Masukkan Password Anda" type="password" class="form-control" name="password" id="password" required autocomplete="current-password">
                    </div>
                    <div class="form-group">
                      <label for="password confirmation">Konfirmasi Password</label>
                      <input placeholder="Masukkan Kembali Password Anda" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                    </div>
                    <p>Sudah memiliki Akun ? <a href="#/masuk" class="link-info"><strong>Masuk disini</strong></a></p>
                    <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Terima Kasih Telah Mendaftar</div>
                  </div>
                  <div class="text-center"><button type="submit">Daftar</button></div>
                </form>
              </div>
            </div>

        </div>
      </section>
    </div>
    `;
  },
       
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
       
export default SignUp;
