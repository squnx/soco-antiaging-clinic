import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>About Us</span>
          <h2>About Us</h2>
          <p>Our mission is to provide support for your beauty and health</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/about/about-us.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Comprehensive Wellness and Women's Health Care</h4>
              <p>Our hormone therapy, IV therapy, and women's vaginal health care services have been expertly designed by our medical team in collaboration with Dr. Bo Y. Suh, a renowned specialist in hormones, stem cells, and infertility.</p>
              <p>Dr. Bo Y. Suh, M.D., is a distinguished OBGYN and Reproductive Endocrinology and Infertility Specialist. He holds esteemed credentials as a Fellow of the American College of Obstetricians and Gynecologists (FACOG) and a Fellow of the American College of Endocrinology (FACE). With 28 years of academic experience, Dr. Suh has served as a faculty member at UCLA, USC, and the University of Colorado, contributing extensively to the field of women's health.</p>
              <p className="mb-0">At SoCo, we are committed to serving each and every client with unparalleled care and dedication. Our mission is to empower you to feel beautiful, healthy, and happy—because your well-being is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionals" className="professionals section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Professionals</h2>
          <p>Expert Care by Our Skilled Registered Nurses</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                <img src="/assets/images/temp/about-450x450-man.png" className="img-fluid" alt="Terri Song" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Boyoung Seo</h4>
                  <span>M.D.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                <img src="/assets/images/temp/about-450x450-woman.png" className="img-fluid" alt="Ivan Song" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Kate Jeong</h4>
                  <span>Nurse Practitioner</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member">
                <div className="member-img">
                <img src="/assets/images/temp/about-450x450-woman.png" className="img-fluid" alt="Terri Song" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Soojin Lee </h4>
                  <span>Nurse Practitioner</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member">
                <div className="member-img">
                <img src="/assets/images/about/terri_450x450.jpg" className="img-fluid" alt="Terri Song" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Terri Song</h4>
                  <span>Registered Nurses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/bg-testimonial.jpg" className="testimonial-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Heartfelt Stories from Our Clients</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-man.png" className="testimonial-img" alt="Lupe" />
                <h3>Lupe</h3>
                <h4>Transformative Experience!</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>I've tried many medspa services before, but SoCo MedSpa stands out. Their TLSR combo completely rejuvenated my skin.!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="Susan" />
                <h3>Susan</h3>
                <h4>Professional and Caring Staff</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>The team at SoCo is amazing. They take the time to explain everything and make you feel so comfortable. I've seen real results with their RF microneedling and  PRP treatment!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="Michelle" />
                <h3>Michelle</h3>
                <h4>Incredible Value!</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>I was amazed by how affordable their treatments are compared to other medspas. The quality of service is outstanding, and the results speak for themselves!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="Jasmin" />
                <h3>Jasmin</h3>
                <h4>Customized Care</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>SoCo MedSpa truly listens to your concerns and provides tailored treatments. My skin has never looked better after the TLSR combo!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="esther" />
                <h3>Esther</h3>
                <h4>Absolutely Amazing Results!</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>I've struggled with skin texture issues for years, but after trying the TLSR combo treatment, my skin has transformed. The RF microneedling, Ulthera ,MTS +soco solution and PRP were a game changer!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="esther" />
                <h3>Unice</h3>
                <h4>Affordable and Exceptional Care</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>I couldn't believe how great the prices are for such high-quality treatments. SoCo MedSpa delivers excellent results without breaking the bank!</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </section>
    </>
  );
}

export default About;