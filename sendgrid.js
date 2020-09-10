require("dotenv").config();

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "", // <- recipient
  from: "", // <- sender
  subject: "Sending with Twilio SendGrid is Fun 3",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
sgMail
  .send(msg)
  .then(res => {
    console.log("done");
    console.log(res); // <- response object
  })
  .catch(err => {
    console.log("error");
    console.log(err);
  });
