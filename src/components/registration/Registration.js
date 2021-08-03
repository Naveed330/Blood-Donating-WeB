import './RegStyle.css'
import { db } from '../config/firebase/Firebase'
import { useState } from 'react'
function Register() {


    // React Hooks
    const [firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [BloodGroup, setBloodGroup] = useState('');
    const [Contact, setContact] = useState('');

    // const [user , setuser] = usestate('4')
    // setuser(7)


    // Arrow Function
    const ctahandler = (e) => {
        e.preventDefault();

        // Object Created
        let data = {
            Firstname: firstname,
            Lastname: Lastname,
            Email: Email,
            BloodGroup: BloodGroup,
            Contact: Contact

        }

        db.collection('Donar Data').add(data)
            .then(() => {
                alert('Form is Submitted Successfully')
            })
            .catch(error => {
                alert(error.message);
            })
        setFirstname('')
        setLastname('')
        setEmail('')
        setBloodGroup('')
        setContact('')
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Register As a Doner</h1>
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col">
                        <form action="/action_page.php">
                            <h2>Register Form</h2>

                            <div class="input-container">
                                <i class="fa fa-user icon"></i>
                                <input class="input-field" type="text" placeholder="First Name" value={firstname} First Name="First Name" onChange={(e) => {
                                    setFirstname(e.target.value)
                                }} />
                            </div>
                            <br />

                            <div class="input-container">
                                <i class="fa fa-user icon"></i>
                                <input class="input-field" type="text" placeholder="Last Name" value={Lastname} name="usrnm" onChange={(e) => {
                                    setLastname(e.target.value)
                                }} />
                            </div>
                            <br />

                            <div class="input-container">
                                <i class="fa fa-key icon"></i>
                                <input class="input-field" type="text" placeholder="Blood Group" value={BloodGroup} name="psw" onChange={(e) => {
                                    setBloodGroup(e.target.value)
                                }} />
                            </div>
                            <br />


                            <div class="input-container">
                                <i class="fa fa-envelope icon"></i>
                                <input class="input-field" type="text" placeholder="Email" name="email" value={Email} autoComplete='none' onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <br />

                             <div class="input-container">
                                <i class="fa fa-envelope icon"></i>
                                <input class="input-field" type="Number" placeholder="Contact" name="Contact" value={Contact} autoComplete='none' onChange={(e) => {
                                    setContact(e.target.value)
                                }} />
                            </div>
                            <br />


                            <div className="row">
                                <div className="col">
                                    <button type='button' className='btn btn-block btn-primary btn-lg' onClick={ctahandler} >Submitt</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Register;