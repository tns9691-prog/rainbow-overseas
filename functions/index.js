const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Read email config from environment variables (configured via firebase functions:secrets or config)
// e.g. firebase functions:config:set gmail.email="your-email@gmail.com" gmail.password="your-app-password"
// For v2 functions, using process.env is recommended, or secrets.
// We'll use process.env to allow setting it in .env file for deployment
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL || "tns9691@gmail.com", // Fallback to your email, but password MUST be set in env
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Firestore-triggered function to send email when a document is added to 'mail' collection
exports.sendEmailOnNewEnquiry = functions
  .firestore
  .document("mail/{docId}")
  .onCreate(async (snap, context) => {
    const mailData = snap.data();
    
    const mailOptions = {
      from: `"Rainbow Overseas Website" <${process.env.GMAIL_EMAIL || "tns9691@gmail.com"}>`,
      to: mailData.to || "tns9691@gmail.com",
      subject: mailData.message?.subject || "New Website Enquiry",
      html: mailData.message?.html || "<p>You have a new enquiry.</p>",
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
      // Optionally update the document status
      return snap.ref.update({ delivery: { state: "SUCCESS" } });
    } catch (error) {
      console.error("Error sending email:", error);
      return snap.ref.update({ delivery: { state: "ERROR", error: error.toString() } });
    }
});
