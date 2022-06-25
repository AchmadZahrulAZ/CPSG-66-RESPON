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
       Pendaftaran secara offline pada sebuah puskesmas dapat menimbulkan beberapa
       permasalahan jika kita melihat kondisi COVID-19 saat ini yang harus taat protokol
       kesehatan. Dalam survei yang kami lakukan tercatat 61 dari 77 orang harus menunggu
       sekitar 10 - 20 menit bahkan 17 diantaranya harus menunggu lebih dari 1 jam. Dari
       permasalahan yang dipaparkan, kami berinisiatif untuk membuat project ini sebagai
       solusi penyelesaian masalah tersebut.
       </p>
     </div>
   </div>

 </div>
</section><!-- End About Us Section -->
 <section id="team" class="team section-bg">
     <div class="container" data-aos="fade-up">

       <div class="section-title">
         <h2>Team</h2>
       </div>

       <div class="row">

         <div class="col-lg-6  mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
             <div class="pic"><img src="./images/team/zahrul2.jpg" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Achmad Zahrul Ali Zadan</h4>
               <span>Back-End Developer</span>
               <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
               <div class="social">
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                 <a href="https://github.com/AchmadZahrulAZ"><i class="fa-brands fa-github"></i></a>
                 <a href="https://www.linkedin.com/in/achmadzahrulalizadan/"><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
             <div class="pic"><img src="./images/team/ilham2.jpg" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Ilham Oktavian</h4>
               <span>Back-End Developer</span>
               <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
               <div class="social">
               <a href="https://www.instagram.com/oktavianilham/"><i class="fa-brands fa-instagram"></i></a>
               <a href="https://github.com/Ilhamokta74"><i class="fa-brands fa-github"></i></a>
               <a href="https://www.linkedin.com/in/ilham-oktavian-580301222/"><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
             <div class="pic"><img src="./images/team/bagas2.jpg" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Bagas Kurnia Ramadhan</h4>
               <span>Front-End Developer</span>
               <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
               <div class="social">
                 <a href="instagram.com/bagaskurniarmdhn"><i class="fa-brands fa-instagram"></i></a>
                 <a href="https://github.com/bagaskurniarmdhn"><i class="fa-brands fa-github"></i></a>
                 <a href="https://www.linkedin.com/in/bagaskurniaramadhan/"><i class="fa-brands fa-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div class="col-lg-6 mt-4">
           <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
             <div class="pic"><img src="./images/team/wahyu2.jpg" class="img-fluid" alt=""></div>
             <div class="member-info">
               <h4>Ahmad Wahyu Pratama</h4>
               <span>Front-End Developer</span>
               <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
               <div class="social">
               <a href="https://www.instagram.com/ah.wahyu_/"><i class="fa-brands fa-instagram"></i></a>
               <a href="https://github.com/ahmadWahyu7"><i class="fa-brands fa-github"></i></a>
               <a href="https://www.linkedin.com/in/ahmad-wahyu-pratama-a735a3221/"><i class="fa-brands fa-linkedin"></i></a>
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
