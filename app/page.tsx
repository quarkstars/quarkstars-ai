"use client"
import { Prisma } from '@prisma/client';
import Image from 'next/image'

export default function Home() {
  async function saveContact(contact: any) {
      const response = await fetch('/contacts/api', {
        method: 'POST',
        body: JSON.stringify(contact)
        
      });

      if (!response.ok) {
        console.error( new Error(response.statusText));
      }
      const result =  await response.json();
      console.log("RETURNED", result)
      return result;
  }
  
  return (
    <button className="btn"
      onClick={async (e)=> {
        const data = {
          firstName: "Michael",
          lastName: "Holmes",
          email: "wearviral@gmail.com",
          avatar: "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }
        await saveContact(data);
      }}
    >
      Button!!
      </button>
  )
}
