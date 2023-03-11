import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
const ButtonLogin = () => {
    const igate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }, } = useForm();
    const onSubmit = (formdata) => console.log(formdata);
    return (
        <div>
            <center>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table >
                    <tr>
                        {/* fullname */}
                        Name
                        <td><input required name="4" type="text" placeholder="enter text" {...register("fullname",
                            {
                                required: {
                                    value: true,
                                    message: 'please enter email address'
                                },
                                minLength:
                                {
                                    value: 5,
                                    message: "please enter a valid name",
                                }
                            })} />
                            <p style={{ color: "red" }}>{errors.fullname?.message}</p></td></tr>
                
                            <tr>
                                {/* Password */}

                                Password
                                <td><input required ="8" type="text" placeholder="enter a strong password" {...register("Password",
                                    {
                                        required: true,
                                        minLength:
                                        {
                                            value: 8,
                                            message: "please enter a password with 8 characters",
                                        },
                                        pattern: {
                                            value: /^[a-z A-Z ]*$/,
                                            message: 'please enter special characters',
                                        }
                                    })}
                                />
                                    <p style={{ color: "red" }}>{errors.Password?.message}</p></td></tr><br/>
                    </table>
                    <button class="button button1" type="submit">submit</button>
                </form>
                <br/>
                <button onClick={() => { igate(-1); }}>Go Back</button>
                </center>
                </div>
                );
};
                export default ButtonLogin;