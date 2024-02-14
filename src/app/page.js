"use client"

import React, { useState, useEffect } from 'react';
import Card from "./components/card/card";
import { useSession } from 'next-auth/react';
import { createUser,getUsersByEmail } from '../../sanity/sanity-utils';
import Homepage from './homepage/page';

const Home = () => {

  

const session = useSession()

//get user and send to sanity

useEffect(() => {
  const fetchData1 = async () => {
    if (!session) {
      console.log('No session found');
      return;
    }

    try {
      console.log('Fetching user data for:', session?.data.user.email);
      const existingUser = await getUsersByEmail(session?.data.user.email);

      console.log('Existing user data:', existingUser);

      if (existingUser.length === 0) {
        console.log('Creating a new user');
        await createUser({
          name: session?.data.user.name || 'DefaultName',
          email: session?.data.user.email || 'DefaultEmail@example.com',
        });
      } else {
        console.log('User already exists. No new user created.');
      }

    } catch (error) {
      console.error('Error fetching or creating user:', error);
    }
  };

  fetchData1();
}, [session]);





  

 
  return (
    <main className="">
     
    
<Homepage/>


      
    </main>
  );
};

export default Home;
