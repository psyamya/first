import React from "react";
import { useForm } from "react-hook-form";
import './button.css'
const Form= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formdata) => console.log(formdata);
  return (
    <div>
        <center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table >
            <tr>
        {/* fullname */}
        Name
        <td><input required name="4" type="text" placeholder="enter text" {...register("fullname", 
        {
            required: true,
            minLength: 
            {
              value: 5,
              message: "please enter a valid name",
            },
            pattern:{
                value:/^[a-zA-Z ]*$/,
                message:'please enter a valid name',
            }
        })}
        />
        
        <p style={{ color: "red" }}>{errors.fullname?.message}</p></td></tr>

{/* dob */}  <tr>DOB:<td> <input type="date" placeholder='enter your Date Of Birth' {...register("dob",{
                    required:{
                      value:true,
                      message:'please enter your date of birth'
                    },
                    min:{
                        value:"1990",
                        message:'date of birth should be >1900'
                    },
                    max:{
                        value:"2022",
                        message:'date of birth should be <2022'
                    }
                })}/>
                <p style={{color:'red'}}>{errors.dob?.message}</p></td></tr>

{/* email */}<tr>
        Email:<td><input type="email" placeholder='enter your email address' {...register("email",
                {
                    required:{
                    value:true,
                    message:'please enter email address'
                    },
                     pattern:{
                      value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message:'please enter valid email address'
                     }
                }
                )}/>
                <p style={{color:'red'}}>{errors.email?.message}</p></td></tr>
      
{/* phone number */}<tr>

           Phone no:<td><input type="number" placeholder='enter your phone number' {...register("phoneno",
                {
                    required:{
                      value:true,
                      message:'please enter phone number'
                    },
                    minLength:{
                      value:10,
                      message:'phone number must contain 10 digits'
                    },
                    maxLength:{
                      value:10,
                      message:'phone number must contain 10 digits'
                    }
                })}/>
                <p style={{color:'red'}}>{errors.phoneno?.message}</p></td></tr>

{/* home address */}<tr>
                Address:<td><label>
                <textarea rows={4} cols={40} {...register("address",
                {
                  required:{
                  value:true,
                  message:'please enter your address'
                  }
              }
                )}/>
                </label>
                <p style={{color:'red'}}>{errors.address?.message}</p></td></tr>

{/* gender */}
<tr><td>Gender:</td><td><input type="radio" required name="gender" {...register("gender")}/>Female
                <input type="radio" required name="gender" {...register("gender")}/>Male<br/><br/></td></tr>

{/* hobbies */}

        <br/>
                <tr><td>Hobbies:<br/></td>
                <td><input type="checkbox"  name="singing"{...register("singing")} />        Singing<br/> 
                <input type="checkbox"   name="dancing" {...register("dancing")}/>        Dancing<br/>
                <input type="checkbox"  name="Playing"{...register("playing")}/>           Playing<br/>
                <input type="checkbox"  name="stories"{...register("stories")}/>Reading stories<br/>
                <input type="checkbox"  name="music"{...register("music")}/>Listening music<br/><br/></td></tr>

{/* Major */}
                <tr><td>Major:</td>
                <td><input type="text" id="t1" name="major" list="l1" required></input></td></tr>
        <datalist id="l1">
      <option>DBMS</option>
      <option>Java</option>
      <option>C</option>
      <option>python</option>
      <option>Ds</option>
      
    </datalist><br></br>

        <button class="button button1" type="submit">submit</button>
        </table>
      </form>
      </center>
    </div>
  );
};

export default Form;
