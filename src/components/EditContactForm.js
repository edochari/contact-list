import { useState } from "react";

export const EditContactForm=(props)=>{
    const {contact,onUpdate,onCancel}=props;
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    
    
    const handleEdit=(e)=>{
      e.preventDefault();
      console.log("on Update",name);

      onUpdate(name,email,phone);

    }

    return (
        <div>
           <form onSubmit={handleEdit}>
                <label className="input-field">Enter name</label>
                <input type="text" className="input-field" placeholder={contact.name} onChange={(e)=>setName(e.target.value)}/>
                <label className="input-field">Enter email</label>
                <input type="email" className="input-field" placeholder={contact.email} onChange={(e)=>setEmail(e.target.value)}/>
                <label className="input-field">Enter phone</label>
                <input type="number" className="input-field" placeholder={contact.phone} onChange={(e)=>setPhone(e.target.value)}/>
                <button type="submit" className="input-field" >Submit</button>
                <button className="input-field" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}