const SignIn = {
  async render() {
    return `
    <div class="content" id="main-content">
      <section class="contact section-bg">
        <div class="container">

          <div class="section-title">
            <h2>Masuk</h2>
            <p>Masukkan Akun Anda Untuk Melakukan Reservasi</p>
          </div>

          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <img src="../images/image5.jpg" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" alt="Dokter"/>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="" method="post" role="form" class="email-form">
                <div class="row">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input placeholder="Masukkan Email Anda" type="email" class="form-control" name="email" id="email" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="name">Password</label>
                  <input placeholder="Masukkan Password Anda" type="password" class="form-control" name="password" id="password" required>
                </div>
                <p>Belum memiliki akun ? <strong><a href="#/daftar" class="link-info">Daftar disini</a></strong></p>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                </div>
                <div class="text-center"><button type="submit">Masuk</button></div>
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
     
export default SignIn;
