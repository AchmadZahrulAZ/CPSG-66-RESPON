const Login = {
  async render() {
    return `
    <div class="content" id="main-content">
    <!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Login</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">

        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <img src="../images/image5.jpg" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"/>
          </div>
        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="" method="post" role="form" class="email-form">
            <div class="row">
              <div class="form-group">
                <label for="name">Your Email</label>
                <input type="email" class="form-control" name="email" id="email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Password</label>
              <input type="password" class="form-control" name="password" id="password" required>
            </div>
            <p>Don't have an account? <a href="#/regis" class="link-info">Register here</a></p>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Sign In</button></div>
            
          </form>
        </div>

      </div>

    </div>
  </section><!-- End Contact Section -->
</div>
        `;
  },
     
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
     
export default Login;
