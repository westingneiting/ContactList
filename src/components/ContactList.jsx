
import React from 'react';
import ContactRow from './ContactRow';

const ContactList = (props) => {
    return (
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
              </thead>
              <tbody>
              {props.contacts.map(contact => (
                    <ContactRow key={contact.id} contact={contact} />
              ))}
            </tbody>
        </table>
    );
};

export default ContactList;
