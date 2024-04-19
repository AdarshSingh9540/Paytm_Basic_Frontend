import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import ButtonWarning from '../components/ButtonWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    const handleSignIn = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username: email,
                password: pass
            });

            localStorage.setItem("token", response.data.token);
            // Redirect to dashboard after successful sign in
            navigate("/dashboard");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <div className='bg-slate-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-4 px-4 h-mamx '>
                    <Heading label={"Sign In"}/>
                    <SubHeading label={"Enter your details for signin"} />
                    <InputBox
                        onChange={handleEmailChange}
                        label={"Email"}
                        placeholder={"email"}
                    />
                    <InputBox
                        onChange={handlePassChange}
                        label={"Password"}
                        placeholder={"password"}
                        type="password"
                    />
                    <div className='pt-4'>
                        <Button onClick={handleSignIn} label={"Sign In"} />
                        <ButtonWarning label={"Don't have an account ?"} buttonText={"Sign up"} to={"/signup"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
