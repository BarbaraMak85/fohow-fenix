import React from "react";
import { contactDetailsData } from "../../data/contactDetailsData";
import Heading from "../Heading/Heading";
import Person from "../PersonContact/PersonContact";
import styles from "./ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <div className={styles.contactImage}>
      <Heading
        whiteTitle="Masz pytania?"
        secondaryText="Skontaktuj się z nami"
      />

      <div className={styles.personContactDetails}>
        <ul className={styles.contactPerson}>
          {contactDetailsData.map((item) => {
            return (
              <div className={styles.componentPerson}>
                <Person {...item} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
