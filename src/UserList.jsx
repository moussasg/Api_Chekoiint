import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function UserList() {
const [listOfUSer , setlistOfUser] = useState([]); // listOfUSer initialisitha b tab vide pour 
// stockez les données renvoyées dans listOfUSer en utilisant setlistOfuser
  useEffect(() => { // useEffect pour effectuer une action  après une mise à jour
    //axios pour envoyé une requête HTTP GET à partir de l'Api jsonplaceholder 
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(el => {  // njibe data
        setlistOfUser(el.data);
      })
      .catch(error => { // catch en cas d'éreur
        console.log(error); //Si la requête a échoue,
      });
  } , []);// exécuté qu'une seule fois, lors du montage initial du composant.
  return (
    <>
      <h1>Listes des utilisateurs</h1>
        {listOfUSer.map(el => ( //mapi tout ce que o na stockez : les données renvoyées dans listOfUSer 
        //en utilisant setlistOfuser
          <li key={el.id}>{el.name}</li>
        ))}
    </>
  );
}