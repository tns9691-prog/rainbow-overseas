import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveEnquiry = async (formType, formData) => {
  try {
    const docRef = await addDoc(collection(db, "enquiries"), {
      ...formData,
      formType,
      createdAt: serverTimestamp(),
      status: "new"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving enquiry: ", error);
    return { success: false, error };
  }
};
