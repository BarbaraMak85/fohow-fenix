import React from "react";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import styles from "./ContactForm.module.scss";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage } from "formik";

const formValidationSchema = Yup.object().shape({
  nameAndSurname: Yup.string().required("Proszę o podanie imienia i nazwiska."),
  email: Yup.string()
    .email("Podany adres e-mail nie jest poprawny.")
    .required("Proszę o podanie adresu e-mail."),
  subject: Yup.string().required("Proszę o podanie tematu."),
  message: Yup.string().required("Proszę o wpisanie treści wiadomości. "),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Musisz wyrazić zgodę na przetwarzanie danych."
  ),
});

const ContactForm = () => {
  return (
    <>
      <Heading
        blackTitle="Skontaktuj"
        goldTitle="Się z nami"
        secondaryText="skorzystaj z naszego formularza kontaktowego"
      />

      <Formik
        initialValues={{
          nameAndSurname: "",
          email: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              values,
              process.env.REACT_APP_USER_ID
            )
            .then(
              function (response) {
                alert("Wiadomość została wysłana");
              },
              function (error) {
                alert(
                  "Przepraszamy... coś poszło nie tak, proszę spróbować jeszcze raz"
                );
              }
            );

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form className={styles.componentForm}>
            <div className={styles.componentFormData}>
              <div className={styles.componentContactName}>
                <label className={styles.contactLabel} for="name_input">
                  Imię i Nazwisko
                </label>
                <input
                  className={styles.contactInput}
                  type="text"
                  placeholder="imię i nazwisko"
                  name="nameAndSurname"
                  value={values.nameAndSurname}
                  onChange={handleChange}
                />
                <div className={styles.error__message}>
                  <ErrorMessage name="nameAndSurname" />
                </div>
              </div>

              <div className={styles.componentContactName}>
                <label className={styles.contactLabel}>E-mail</label>

                <input
                  className={styles.contactInput}
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className={styles.error__message}>
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>

            <div className={styles.componentFormData}>
              <div className={styles.compomentContactName}>
                <div className={styles.contactTopicTwo}>
                  <label className={styles.contactLabel}>Temat</label>
                  <input
                    className={styles.contactInput}
                    type="text"
                    placeholder="temat"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                  <div className={styles.error__message}>
                    <ErrorMessage name="subject" />
                  </div>
                </div>

                <div
                  className={styles.contactTopic}
                  className={styles.topicNewInput}
                >
                  <label className={styles.contactLabel}>
                    Treść wiadomości
                  </label>
                  <textarea
                    className={styles.contactTextarea}
                    type="text"
                    placeholder="wiadomość"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                  <div className={styles.error__message}>
                    <ErrorMessage name="message" />
                  </div>
                </div>
                <div className={styles.componentCheckBox}>
                  <div className={styles.accept__terms}>
                    <input
                      className={styles.componentInput}
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                    />

                    <Link
                      className={styles.componentLink}
                      to={routes.regulations}
                    >
                      Potwierdzam zapoznanie się z regulaminem
                    </Link>
                  </div>
                  <div className={styles.error__message}>
                    <ErrorMessage name="acceptTerms" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.buttonContactFormSubmit}>
              <Button>Wyślij</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
