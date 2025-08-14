
const nodemailer = require('nodemailer');

// Create transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // replace with your email
    pass: 'your_password_or_app_password' // replace with your email password or app password
  }
});

// Email options
let mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient_email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent using Node.js and Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
