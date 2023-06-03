import React from 'react';

const ContactList = ({ dataUsers, deleteContact }) => {
  return (
    <>
      <ul>
        {dataUsers.map(dataUser => (
          <li key={dataUser.id}>
            {dataUser.name} : {dataUser.number}
            <button onClick={() => deleteContact(dataUser.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
