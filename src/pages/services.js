import Header from '../components/header'
import Footer from '../components/footer'
import Eachpart from "../components/eachpart";
import './services.css'
// [Script] => Import all imgs from assets From importingScript file
import { images } from '../components/importingScript';


const Services = () => {
  return (
    <>
      <Header />
      <Eachpart pageName="Services" />
      {/* services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
            <p className="fs-5 fw-medium text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Digital Marketing Services that We Offer</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-5.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Digital Marketing</h5>
                  <p className="mb-0">Any marketing that uses electronic devices and can be used by marketing specialists to convey promotional messaging and measure its impact through your customer journey.</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-6.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Internet Marketing</h5>
                  <p className="mb-0">Internet marketing does not require huge investments but requires good strategies to make your business a hit on the internet.</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-7.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Content Marketing</h5>
                  <p className="mb-0">Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media.</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-8.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">Social Marketing</h5>
                  <p className="mb-0">Social marketing is an approach used to develop activities aimed at changing or maintaining people's behaviour for the benefit of individuals and society as a whole.</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-9.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">B2B Marketing</h5>
                  <p className="mb-0">As the name suggests, business-to-business marketing refers to the marketing of products or services to other businesses and organizations.</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <img className="img-fluid" src={images['./icon/icon-10.png']} alt="Icon" />
                  </div>
                  <h5 className="mb-3">E-mail Marketing</h5>
                  <p className="mb-0">Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services. </p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href>Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <Footer />
    </>
  );
}

export default Services;
