import React from 'react'
import InputBox from '../Custom_Components/input'
import {useState, useEffect} from 'react';

export default function Test() {
    const [merchants, setMerchants] = useState(false);

    useEffect(() => {
      getMerchant();
    }, []);
  
    function getMerchant() {
      fetch('http://localhost:3002')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setMerchants(data);
        });
    }
  
    function createMerchant() {
      let name = prompt('Enter merchant name');
      let email = prompt('Enter merchant email');
  
      fetch('http://localhost:3002/merchants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    function deleteMerchant() {
      let id = prompt('Enter merchant id');
  
      fetch(`http://localhost:3002/merchants/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    return (
      <div>
        {merchants ? merchants : 'There is no merchant data available'}
        <br />
        <button onClick={createMerchant}>Add</button>
        <br />
        <button onClick={deleteMerchant}>Delete</button>
      </div>
    );
}
