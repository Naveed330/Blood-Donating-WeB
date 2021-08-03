import './HomeStyle.css'
import one from '../assests/one.jpg'
import two from '../assests/two.jpg'
import Three from '../assests/Three.png'
import img_1 from '../assests/img_1.PNG'
import img2 from '../assests/img2.PNG'
import img3 from '../assests/img3.PNG'
import img4 from '../assests/img4.PNG'
import img5 from '../assests/img5.PNG'
import img6 from '../assests/img6.PNG'
import img7 from '../assests/img7.PNG'
import img8 from '../assests/img8.PNG'
function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active data-interval='1000'" >
                        <img src={one} class="d-block w-100 img_size" alt="pic2" />
                    </div>
                    <div class="carousel-item  data-interval='1000'">
                        <img src={two} class="d-block w-100 img_size" alt="pic1" />
                    </div>
                    <div class="carousel-item data-interval='1000'" >
                        <img src={Three} class="d-block w-100 img_size" alt="pic3" />
                        {/* <div class="carousel-caption d-md-block">
                        <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                <div className='row new_class'>
                    <div className='col-md-6 text_cen'>
                        <p>Help save lives. Healthy donors are encouraged to book an appointment</p>
                    </div>
                    <div className='col-md-6 text_cen'>
                        <a href="https://www.redcrossblood.org/donate-blood/dlp/coronavirus--covid-19--and-blood-donation.html" target='_blank'>Learn about Coronavirus and our safety protocols.</a>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-3">
                            <div className='class_1'>
                                <div className='class_11'>
                                    <img src={img_1} alt="img 1" />
                                </div>
                                <div className='class_12'>
                                    <p>Access your Red Cross Blood account using the link below.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_2'>
                                <div className='class_21'>
                                    <img src={img2} alt="img 2" />
                                </div>
                                <div className='class_22'>
                                    <p>Learn more about the eligibility requirements for donating blood.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_3'>
                                <div className='class_31'>
                                    <img src={img3} alt="img 3" />
                                </div>
                                <div className='class_32'>
                                    <p>Complete your pre-reading and donation questions online with RapidPass.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_4'>
                                <div className='class_41'>
                                    <img src={img4} alt="img 4" />
                                </div>
                                <div className='class_42'>
                                    <p>Complete your pre-reading and donation questions online with RapidPass.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_5'>
                                <div className='class_51'>
                                    <img src={img5} alt="img 5" />
                                </div>
                                <div className='class_52'>
                                    <p>We'd love to hear from you. Use the form in the link below to contact us.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_6'>
                                <div className='class_61'>
                                    <img src={img6} alt="img 6" />
                                </div>
                                <div className='class_62'>
                                    <p>Learn more about how you can host a blood drive in your area..</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_7'>
                                <div className='class_71'>
                                    <img src={img7} alt="img 7" />
                                </div>
                                <div className='class_72'>
                                    <p>Sign in or learn more about how you can host a blood drive in your area..</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='class_8'>
                                <div className='class_81'>
                                    <img src={img8} alt="img 8" />
                                </div>
                                <div className='class_82'>
                                    <p>Learn more about Red Cross hospital products and services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Home;