import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import ButtonWarning from '../components/ButtonWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [lastname, setLastName] = useState("");
    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            const response = await axios.post("https://paytm-basic-backend.vercel.app/api/v1/user/signup", {
                username: email,
                firstname,
                lastname,
                password: pass
            });

            localStorage.setItem("token",response.data.token)
           
            localStorage.setItem("firstName", firstname);
          
            navigate("/dashboard");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className='bg-slate-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-4 px-4 h-mamx '>
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your details for signup"} />
                    <InputBox
                        onChange={handleFirstNameChange}
                        label={"First Name"}
                        placeholder={"Adarsh"}
                    />
                    <InputBox
                        onChange={handleLastNameChange}
                        label={"Last Name"}
                        placeholder={"Singh"}
                    />
                    <InputBox
                        onChange={handleEmailChange}
                        label={"Email"}
                        placeholder={"email"}
                    />
                    <InputBox
                        onChange={handlePassChange}
                        label={"Password"}
                        placeholder={"password"}
                    />
                    <div className='pt-4'>
                        <Button onClick={handleSignUp} label={"Sign Up"} />
                        <ButtonWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
