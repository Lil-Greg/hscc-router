import './Register.css'

export default function Register() {
    return <>
        <div className="container">
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
        </div>
    </>
}