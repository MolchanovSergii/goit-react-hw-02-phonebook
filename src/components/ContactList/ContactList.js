// import React, { Component } from 'react';

const ContactList = ({ dataUsers }) => {
  return (
    <>
      <ul>
        {dataUsers.map(dataUser => (
          <li key={dataUser.id}>
            {dataUser.name} : {dataUser.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
