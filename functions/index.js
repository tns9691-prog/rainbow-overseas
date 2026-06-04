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
    user: process.env.GMAIL_EMAIL || "bijjasrikar25@gmail.com", // Fallback to your email, but password MUST be set in env
    pass: process.env.GMAIL_PASSWORD,
  },
});

// HTTP-triggered function to send email
exports.sendEmailOnNewEnquiry = functions
  .region("asia-south1")
  .https.onRequest(async (req, res) => {
    const enquiry = req.body;
  const formType = enquiry.formType || "Website Enquiry";

  // Build the email body from the dynamic form fields
  let emailBody = `<h2>New ${formType} Received</h2><p>Here are the details:</p><table border="1" cellpadding="8" style="border-collapse: collapse;">`;
  
  for (const [key, value] of Object.entries(enquiry)) {
    if (key !== "createdAt" && key !== "formType" && key !== "status") {
      emailBody += `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`;
    }
  }
  emailBody += "</table>";

  const mailOptions = {
    from: `"Rainbow Overseas Website" <${process.env.GMAIL_EMAIL || "bijjasrikar25@gmail.com"}>`,
    to: "bijjasrikar25@gmail.com",
    subject: `New Lead: ${formType} from ${enquiry.name || enquiry.fullName || "Website"}`,
    html: emailBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.toString() });
  }
});
