import { useState } from "react";

export const EditContactForm=(props)=>{
    const {contact,onUpdate,onCancel}=props;
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    const [updatedContact,setUpdatedContact]=useState();
    
    const handleEdit=(e)=>{
      e.preventDefault();
      setUpdatedContact({
        id:contact.id,
        name:name,
        email:email,
        phone:phone,
      })
      onUpdate(updatedContact);

    }

    return (
        <div>
           <form>
                <label>Enter name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Enter email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Enter phone</label>
                <input type="number" onChange={(e)=>setPhone(e.target.value)}/>
                <button type="submit" onSubmit={handleEdit}>Submit</button>
                <button type="submit" onClick={onCancel}>Cancel</button>
                </form>
        </div>
    )
}