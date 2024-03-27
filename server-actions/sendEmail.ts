"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY)
// NOTE This function needs to run on server-side because it it a server action.
// This is why I can not use it in the contact component which is a client component.
// But I can write and define the function here and easily import it into the client contact component
// :))))

export const sendEmail = async (formData: FormData) => {
 
    // console.log("Running on SERVER:");
    // console.log(formData.get("senderEmail"));
    // console.log(formData.get("message"));

    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")
    // => get("message") is corresponsding to name="message" in contact.tsx => <textarea>


    // simple server-side validation
   if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
   }

   if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
   }

   try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        // email service from resend.com
        to: "contact@marialitwa.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        // text: message as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string,
        }),
        // Code above is aquivalent to
        // react: <ContactFormEmail message={message} senderEmail={senderEmail} />
    });
   } catch (error: unknown) {
      return {
      error: getErrorMessage(error)
    }
   }

    
  };


