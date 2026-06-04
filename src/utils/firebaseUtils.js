import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// Save enquiry to enquiries collection
export const saveEnquiry = async (formType, formData) => {
  try {
    const docRef = await addDoc(collection(db, "enquiries"), {
      ...formData,
      formType,
      createdAt: serverTimestamp(),
      status: "new"
    });
    
    // Also send email notification
    await sendEmailNotification(formType, formData);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving enquiry: ", error);
    return { success: false, error };
  }
};

// Send email notification via Firebase extension
export const sendEmailNotification = async (formType, formData) => {
  try {
    // Build HTML email body from form data
    let emailBody = `<h2>New ${formType} Received</h2><p>Here are the details:</p><table border="1" cellpadding="8" style="border-collapse: collapse;">`;
    
    for (const [key, value] of Object.entries(formData)) {
      emailBody += `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`;
    }
    emailBody += "</table>";

    // Add mail document to trigger Firebase extension
    await addDoc(collection(db, "mail"), {
      to: "tns9691@gmail.com",
      message: {
        subject: `New Lead: ${formType} from ${formData.name || formData.fullName || "Website"}`,
        html: emailBody
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error("Error sending email notification: ", error);
    return { success: false, error };
  }
};
