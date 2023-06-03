import React from 'react';

const ContactList = ({ dataUsers }) => {
  return (
    <>
      <ul>
        {dataUsers.map(dataUser => (
          <li key={dataUser.id}>
            {dataUser.name} : {dataUser.number}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
