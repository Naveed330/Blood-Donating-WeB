import './ContactStyle.css'
import pic1 from '../assests/pic1.jpg'
import pic2 from '../assests/pic2.jpg'
function Contact() {
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col">
                        <h1 className='h1'>Contact Us</h1>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-6 pt-2">
                        <div className='div1'>
                            <div className='div11'>
                                <img src={pic1} alt="pic1" className='img_pic' />
                            </div>
                            <div className='div12'>
                                <p>Name:M.Abrar Younas</p>
                                <p>Email:abraryounas330@gmail.com</p>
                                <p>Contact:+305-6648770</p>
                                <p>Reg #:2019-GCUF-080903</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-2">
                        <div className='div2'>
                            <div className='div14'>
                                <img src={pic2} alt="pic2" className='img_pic' />
                            </div>
                            <div className='div13'>
                                <p>Name:M.Raheel Asif</p>
                                <p>Email:raheelDk628@gmail.com</p>
                                <p>Contact:+3061033604</p>
                                <p>Reg #:2019-GCUF-080867</p>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col">
                            <div className='mid_div'>
                                <h2 className='h2_tag'>Post Donation Concerns</h2>
                                <p className='ptag'>If you recently donated and have developed a fever or other symptoms that suggest a recent infection or you want to provide additional information about your donation please call +9 306 1033 604 for immediate assistance (Option 2 in the phone system). For your convenience, this number is available 24 hours a day, 365 days a year.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6 ">
                            <div className='Low_div'>
                                <div className='low1'>
                                    <h1>Eligibility Questions?</h1>
                                </div>
                                <div className='low2'>
                                    <p>General information about blood donor eligiblity can be found in the Eligibility section of the website. You may search
                                        <a href="https://www.redcrossblood.org/faq.html#eligibility" target='_blank'> eligiblity topics by keyword</a>or browse an
                                        <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements/eligibility-criteria-alphabetical.html" target='_blank'> alphabetical list of topics.</a>
                                    </p>
                                </div>
                                {/* <div className='low3'>
                                    <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements.html" target='_blank' className='a_tag'>Learn More</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className='Lowdiv'>
                                <div className='low4'>
                                    <h2>Looking for Your Local Red Cross?</h2>
                                </div>
                                <div className='low5'>
                                    <p>Go Local to find blood donor center locations and hours, current and upcoming promotions and important news about Red Cross activities in your area</p>
                                </div>
                                {/* <div className='low6'>
                                     <a href="https://www.redcrossblood.org/local-homepage.html" target='_blank'>Go Local</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            <div> <h1 className='h1tag'>Stay In Touch</h1></div>
                        </div>
                    </div>


                </div>




                {/* Container Div End */}

            </div>
        </>
    )
}
export default Contact;