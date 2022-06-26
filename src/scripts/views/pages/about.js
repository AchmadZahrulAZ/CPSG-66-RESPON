const About = {
  async render() {
    return `
    <div class="content" id="main-content">
    <!-- ======= About Us Section ======= -->
<section id="about" class="about">
 <div class="container" data-aos="fade-up">

   <div class="section-title">
     <h2>About Us</h2>
   </div>

   <div class="row content">
   <div class="col-lg d-flex align-items-stretch">
   <div class="info">
     <img src="../images/logo/respon-logo1.png" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"/>
   </div>
     <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
       <p>
         Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </p>
     </div>
   </div>

 </div>
</section><!-- End About Us Section -->
 <section id="team" class="team section-bg">
     <div class="container" data-aos="fade-up">

       <div class="section-title">
         <h2>Team</h2>
         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
       </div>

       <div class="row">

         <div class="col-lg-6">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
             <div class="pic"><img src="" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Achmad Zahrul Ali Zadan</h4>
               <span>Back-End Developer</span>
               <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
               <div class="social">
                 <a href=""><i class="fa-brands fa-twitter"></i></a>
                 <a href=""><i class="fa-brands fa-facebook"></i></a>
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                 <a href=""><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4 mt-lg-0">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
             <div class="pic"><img src="" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Ilham Oktavian</h4>
               <span>Back-End Developer</span>
               <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
               <div class="social">
                 <a href=""><i class="fa-brands fa-twitter"></i></a>
                 <a href=""><i class="fa-brands fa-facebook"></i></a>
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                 <a href=""><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
             <div class="pic"><img src="" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Bagas Kurnia Ramadhan</h4>
               <span>Front-End Developer</span>
               <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
               <div class="social">
                 <a href=""><i class="fa-brands fa-twitter"></i></a>
                 <a href=""><i class="fa-brands fa-facebook"></i></a>
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                 <a href=""><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
             <div class="pic"><img src="" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Ahmad Wahyu Pratama</h4>
               <span>Front-End Developer</span>
               <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
               <div class="social">
                 <a href=""><i class="fa-brands fa-twitter"></i></a>
                 <a href=""><i class="fa-brands fa-facebook"></i></a>
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                 <a href=""><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

       </div>

     </div>
   </section><!-- End Team Section -->

 
       
</div>
      `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
   
export default About;
