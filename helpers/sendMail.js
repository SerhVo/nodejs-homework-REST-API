const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "vsi969@ukr.net",
    pass: UKR_PASSWORD
  }
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const email = { ...data, from: "vsi969@ukr.net" };
  await transporter.sendMail(email);
  console.log(email);
  return true;
};

module.exports = sendMail;