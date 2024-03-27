
// Utiliy / helper function for validation of contact form, used in sendEmail.ts
export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
    return true
  }


// VALIDATION FOR SEND EMAIL FUNCTIONALITY
// REVIEW !!
export const getErrorMessage = (error: unknown): string => {

    let message: string;
  
    if (error instanceof Error) {
        message = String(error.message); 
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message)
      // String(error.message) will convert any type that error.message is into a string
    } else if (typeof error === "string") {
        message = error
    } else {
      message = "Unknown error. Something went wrong."
    }
    return message;
  }  