import './LoginStyle.css'
import { useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { fire } from '../config/firebase/Firebase';
import {Link , useHistory} from 'react-router-dom'

function LoginOne() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailerror, setemailerror] = useState(false)
    const [passerror, setpasserror] = useState(false)
    // Form submission
    const history = useHistory();
    const submittform = (e) => {
        e.preventDefault()
        console.log(email, password)
        fire.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                alert('success')
            }).catch(error => {
                alert('fail', error)
            })

    }
    // Input Field
    const ctainputhandler = (e) => {
        let items = e.target.value;
        if (items.length < 5 && items != '@') {
            setemailerror(true)
        } else {
            setemailerror(false)
        }
        setemail(items)
    }
    // Password Field
    const ctapasshandler = (e) => {
        let items = e.target.value;
        if (items.length < 5) {
            setpasserror(true)
        } else {
            setpasserror(false)
        }
        setpassword(items)
    }
    // Click Button
    const clickbtn = () => {
        if (email.length < 5 || password.length < 5) {
            alert('error happen')
        } else {
           history.push('/Home')
        }
      
    }
    return (<>
        <div className='conatiner'>
            <div className='row w-100 d-flex justify-content-center align-items-center main_div'>
                <div className='col-12 col-md-8 col-xxl-5 col-lg-6'>
                    <div className='card py-3 px-2'>
                        <p className='p_tag'><span className='main_heading'>Connect With Us</span> </p>
                        <div className='row mx-auto'>
                            <div className='col-4'>
                                <a href="https://www.instagram.com/raheeldk1/" target='_blank'> <AiOutlineInstagram /> </a>
                            </div>
                            <div className='col-4'>
                                <a href="https://www.facebook.com/raheel.dk.737" target='_blank'> <AiFillFacebook /> </a>
                            </div>
                            <div className='col-4'>
                                <a href="https://twitter.com/RaheelDk3" target='_blank'> <AiFillTwitterSquare /></a>
                            </div>
                        </div>
                        <div className='division'>
                            <div className='row'>
                                <div className='col-6 mx-auto'> <span className='main_heading'>Login Form</span> </div>
                            </div>
                        </div>
                        <form action="" className='myform' onSubmit={submittform}>
                            <div className='mb-3'>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Here..." onChange={ctainputhandler} autoComplete='none' />
                                {emailerror ? <h6> User Not Found</h6> : ''}
                            </div>
                            <div className='mb-3'>
                                <input type="Password" className="form-control" id="exampleFormControlInput1" placeholder="*******" onChange={ctapasshandler} autoComplete='none' />
                                {passerror ? <h6> Password Too Short</h6> : ''}
                            </div>
                           
                            <div className='my-3'>
                                <button type='button' className='btn btn-block btn-primary btn-lg main_btn' onClick={clickbtn}>Submitt</button>
                            </div>
                        </form>
                        <div className='mb-3 btn-block btn-primary btn-lg'>
                            <Link to='/SignUpPage'>SignUpPage</Link>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default LoginOne;







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