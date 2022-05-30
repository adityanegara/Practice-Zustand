import useStore from "../../store";
import { useEffect } from "react";

const Contacts = () =>{
    const getContacts = useStore(state => state.getContacts);
    const addContacts = useStore(state => state.addContacts);
    const contacts = useStore(state => state.contacts);

    useEffect(()=>{
        let fetchContacts =  async () =>{
            getContacts();
        }
        fetchContacts();
    }, [])

    const renderContacts = (contacts) =>{
        return contacts.map((contact)=>{
            return(
                <div key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.username}</p>
                </div>
            )
        })
    }

    return(
        <div>
            <button onClick={addContacts}>test</button>
            {renderContacts(contacts)}
        </div>
    )
}

export default Contacts;