import nodemailer from 'nodemailer';

export default class Email {
  constructor(email) {
    this.userName = email.userName;
    this.from = email.email;
    this.company = email.company;
    this.subject = email.subject;
    this.message = email.message;
    this.to = process.env.EMAIL;
  }
  newTransport() {
    return nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  async send() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: `<div><h2>From: ${this.from}</h2><h4>User Name: ${this.userName}</h4><h4">company: ${this.company}</h4><h4">Message:</h4><h5>${this.message}</h5></div>`,
    };
    return await this.newTransport().sendMail(mailOptions);
  }
}
