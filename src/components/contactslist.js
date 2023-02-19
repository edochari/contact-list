import { useEffect,useState } from "react";
import { AddContact } from "./addContact";
import { Contact } from "./Contact";

function ContactsList() {
    const [contacts,setContacts]=useState([]);
    const [addingContact,setAddingContact]=useState(false);

    useEffect(()=>{

        const getData=async ()=>{
        const url="https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>response.json()).then((data)=>setContacts(data));
       
        }
        getData();
    },[]);
    const handleAdd=({name,email,phone})=>{
       fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        body:JSON.stringify({
          name:name,
          email:email,
          phone:phone,
        }),
        headers:{"Content-Type": 'application/json; charset=UTF-8',},
       }).then((response)=>response.json())
       .then((data)=>{setContacts((prevContacts)=>[...prevContacts,data])})
       
      console.log("after",contacts);
    }
    const handleDelete=(contact_id)=>{
      fetch("https://jsonplaceholder.typicode.com/users",{
        method:'DELETE',
        body:JSON.stringify(contact_id),
        headers:{"Content-Type": 'application/json; charset=UTF-8',},
       }).then((response)=>response.json())
       .then((data)=>{setContacts((prevContacts)=>{prevContacts.filter(contact=>contact.id!==contact_id)})})
        const con=contacts.filter(contact=>contact.id!==contact_id);
        
        setContacts(con);
         console.log("after delete",contacts);
    }
    // }
    const handleUpdate=(id,updatedContact)=>{
      
      fetch(`https://example.com/api/contacts/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedContact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts((prevContacts) =>
          prevContacts.map((c) => (c.id === id ? data : c))
        );
      });
      const con=contacts.map((c)=>(c.id===id?updatedContact:c))
      setContacts(con);
      console.log("after update",contacts);
    }
  return (
    <div>
    <div className="contact-list">
      <p className="header">My Contacts List</p>
       {contacts.map((contact)=>(
       <Contact
       key={`contact-${contact.id}`}
       contact={contact}
       onUpdate={handleUpdate}
       onDelete={handleDelete}
       />
       ))}
    </div>
    {addingContact?(
    <AddContact onAddingContact={handleAdd} />):(
      <div className="add-contact-btn">
        <button onClick={()=>{setAddingContact(true)}}>Add Contact</button>
      </div>
    )}
    </div>
  );
}

export default ContactsList;