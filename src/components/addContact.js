import { useState } from "react";
export const AddContact=(props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("name",name);
         props.onAddingContact(name,email,phone);
       
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <label className="input-field">Name</label>
            <input type="text" className="input-field" onChange={(e)=>setName(e.target.value)}/>
            <label className="input-field">email</label>
            <input type="email" className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
            <label className="input-field">Phone</label>
            <input type="number" className="input-field" onChange={(e)=>setPhone(e.target.value)}/>
            
            <button type="submit" className="input-field" >Submit</button>
        </form>
    )
}