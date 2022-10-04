import React,{useState} from 'react'
 
export default function Form() {
  const [formData,setFormData] = useState({firstname:"",lastname:"",country:""})

    
     
  return (
     <div>
      <p>{`Firstname:${formData.firstname},Secondname:${formData.lastname},Country:${formData.country}`}</p>
      <form className='my-form' >
     
            <label htmlFor="fname">First Name:</label>
            <input type="text"  id="fname" name="firstname" value={formData.fnmae} placeholder="Your name.."></input><br></br>

            <label htmlFor="lname">Last Name:</label>
            <input type="text"   id="lname" name="lastname" placeholder="Your last name.." value={formData.lname}></input><br></br>

            <label for="country"_>Country</label>
            <select id="country" name="country" >
            <option value="Kenya">Kenya</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Uganda">Uganda</option>
            </select>
  
            <input type="submit" value="Submit"></input>
      </form>
     </div>
  )
}
