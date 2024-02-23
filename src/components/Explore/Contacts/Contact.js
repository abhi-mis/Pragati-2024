import React from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail } from 'react-icons/hi';

function Contact(props) {
    return (
        <>
            {props.contacts.map((contact) => 
            <div className={styles.contact}>
                <div className={styles.nameNumber}>
                    <div className={styles.name}>{contact.name}</div>
                    <div className={styles.number}>{contact.number}</div>
                </div>
                
            </div>)}
        </>
    );
}

export default Contact;