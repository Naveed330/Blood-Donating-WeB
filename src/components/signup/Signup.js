import {Link} from 'react-router-dom'
import { useState } from 'react';
import { fire } from '../config/firebase/Firebase';

function SignUpPage() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailerror, setemailerror] = useState(false)
    const [passerror, setpasserror] = useState(false)
    // Form submission
    const submittform = (e) => {
        e.preventDefault()
    }
    // Input Field
    const ctainputhandler = (e) => {
        let items = e.target.value;
        setemail(items)
        // onchange((e)=>{setemail(e.target.value)})
        // setemail(e.target.value)
        // const hello = ()=>{}
    }
    // Password Field
    const ctapasshandler = (e) => {
        let items = e.target.value;
        setpassword(items)
    }
    // Click Button
    const clickbtn = () => {
        console.log(email, password)
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('user Created')
            }).catch(error => {
                alert('User NOt Created', error)
            })
    }
    return (<>
        <div className='conatiner'>
            <div className='row w-100 d-flex justify-content-center align-items-center main_div'>
                <div className='col-12 col-md-8 col-xxl-5 col-lg-6'>
                    <div className='card py-3 px-2'>
                        <p className='p_tag'><span className='main_heading'></span> </p>
                        <div className='division'>
                            <div className='row'>
                                <div className='col-6 mx-auto'> <span className='main_heading'>SignUp Form</span> </div>
                            </div>
                        </div>
                        <form action="" className='myform' onSubmit={submittform}>

                            <div className='mb-3'>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Here..." onChange={ctainputhandler} autoComplete='none' />
                               </div>


                            <div className='mb-3'>
                                <input type="Password" className="form-control" id="exampleFormControlInput1" placeholder="*******" onChange={ctapasshandler} autoComplete='none' />
                            </div>

                            <div className='my-3'>
                                <button type='button' className='btn btn-block btn-primary btn-lg main_btn' onClick={clickbtn}>Submitt</button>
                             </div>

                        </form>
                        <div className='mb-3 btn-block btn-primary btn-lg'>
                        
                        <Link to='/LoginOne'>LoginOne</Link>
                        
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default SignUpPage;







// Extra Code
{/* <div className='mt-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <img src={icon} alt="img" className='img_cls' />
                    <Form.Control type="email" placeholder="Enter email" autoComplete='null' className='input_control' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className='password_control' />
                </Form.Group>
                <Button variant="primary btn-block" type="submit">Login</Button>
            </Form>
        </div> */}