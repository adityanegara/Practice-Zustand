import create from "zustand";
import axios from "axios";
import {devtools} from 'zustand/middleware';

const useStore = create(set => ({
    contacts: [],
    getContacts: async ()=> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        set({ contacts: response.data })
    },
    addContacts: async () =>{
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', 
            {   
                id: 99,
                name: 'Name Aditya Negara',
                username: 'Username Aditya Negara',
            }
        )
        
      set((state) => ({contacts : [...state.contacts, response.data]}))
    }
  }))

export default useStore;