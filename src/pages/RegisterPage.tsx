import { useState } from 'react';
import './Register.css';
import { debounce } from 'lodash';


export default function Register() {
    const url = import.meta.env.VITE_API_URL;
    const APIkey = import.meta.env.VITE_API_KEY;

    const [isGood, setIsGood] = useState();

    const debounceUser = debounce(async (value) => {
        alert(value + " Xaedontgotmotion");
        const options = {
            headers: {
                'Authorization': APIkey,
                'content-type': 'application/json'
            },
            body: {

            }
        }
        const data = await fetch(`${url}/users/${value}`);
        const result = await data.json();
        console.log(result);
        setIsGood(!result.success);
        return !result.success;
    }, 1000)

    const handeUserChange = async (e) => {
        setIsGood(undefined)
        await debounceUser(e.target.value)
    }

    return <>
        <form>
            <input type="text" id='username' className='box' placeholder='Enter Your Username' onChange={handeUserChange} />
            {/* If is good is not defined do the following, else? return empty string */}
            {isGood != undefined ? ((isGood) ? "Username is Good" : "Username is Not Good") : ('')}
        </form>


        {/* <div className="container">
            <div className="row">
                <div className="col-mod-3">

                </div>
                <div className="col-md-6 main">
                    <form action="/sign_up" method="POST">
                        <h2> Registration Form</h2>
                        <input type="text" className="box" id="name" name="name" placeholder="Name" required />
                        <br />
                        <input type="text" className="box" id="age" name="age" placeholder="Age" required />
                        <br />
                        <input type="text" className="box" id="email" name="email" placeholder="EmailId" required />
                        <br />
                        <input type="text" className="box" id="phno" name="phno" placeholder="Mobile" required />
                        <br />
                        <input type="text" className="box" id="gender" name="gender" placeholder="Gender" required />
                        <br />
                        <input type="text" className="box" id="password" name="password" placeholder="Password" required />
                        <br />
                        <input type="submit" value="Submit" id="submit" />

                    </form>
                </div>
            </div>
        </div> */}
    </>
}