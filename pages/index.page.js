import About from '../components/About';
import Header from '../components/Header';
import servicesData from './ServicesData';
import Service from '../components/Service';
import coursesData from './coursesData';
import Course from '../components/Course';
import teamsData from './teamsData';
import TeamProfile from '../components/TeamProfile';
import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>

      <Header />

      <main>
        <Banner />
        <div className="services-area">
          <div className="container">
            <div className="row justify-content-sm-center">
              {servicesData.map((service, index) => (
                <Service key={index} imageSrc={service.imageSrc} imageAlt={service.imageAlt} serviceHeading={service.serviceHeading} serviceDescription={service.serviceDescription} />
              ))}
            </div>
          </div>
        </div>


        <div className="courses-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Our featured courses</h2>
                </div>
              </div>
            </div>
            <div className="courses-actives" style={{ display: "flex" }}>
              {coursesData.map((course, index) => (
                <Course key={index} courseImage={course.courseImage} courseImageAlt={course.courseImageAlt} courseCategories={course.courseCategories} courseTitle={course.courseTitle} courseDescription={course.courseDescription} courseRating={course.courseRating} coursePayed={course.coursePayed} coursePrice={course.coursePrice} />
              ))}
            </div>
          </div>
        </div>
        <About />
        <div className="topic-area section-padding40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Explore top subjects</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic1.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic2.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic3.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic4.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic5.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic6.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic7.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/topic8.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3><a href="#">Programing</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  <a href="courses.html" className="border-btn">View More Subjects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-area3 fix">
          <div className="support-wrapper align-items-center">
            <div className="right-content3">
              <div className="right-img">
                <img src="/assets/img/gallery/about3.png" alt="" />
              </div>
            </div>
            <div className="left-content3">
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2 className="">Learner outcomes on courses you will take</h2>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>Techniques to engage effectively with vulnerable children and young people.</p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>Join millions of people from around the world
                    learning together.</p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="/assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>Join millions of people from around the world learning together.
                    Online learning is as easy and natural.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Community experts</h2>
                </div>
              </div>
            </div>
            <div className="team-active">
              {teamsData.map((profile, index) => (
                <TeamProfile key={index} imageSrc={profile.imageSrc} imageAlt={profile.imageAlt} profileName={profile.profileName} profileDescription={profile.profileDescription} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}