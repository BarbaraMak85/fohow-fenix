import React from "react";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import ContactForm from "../../components/ContactForm/ContactForm";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <ContactDetails />
      {/* tutaj contactDetailsFooter */}
      <ContactForm />
    </>
  );
};

export default Contact;
