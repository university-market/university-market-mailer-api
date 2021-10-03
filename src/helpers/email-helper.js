"use strict";
const environment = require("../config/environment");
const environment_email = require("../config/environment.email");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const reader = require("./private/template-reader-helper");
const validator = require("./private/email-config-validator-helper");

const transporterConfig = {
  host: environment_email.host,
  port: environment_email.port,
  secure: false, // true for 465, false for other ports
  tls: {
    ciphers: "SSLv3",
  },
};

const mail = {

  config: {
    template: null,
    subject: null
  },

  contact: null,

  send(data) {

    // Validação das configurações definidas antes do envio do email
    validator(this.contact, this.config, environment.templatesDirectory);

    const account = environment_email.account;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      ...transporterConfig,
      auth: {
        user: account.username,
        pass: account.password,
      },
    });

    const template_path = environment.templatesDirectory + '/'
        + this.config.template.folder + '/'
        + this.config.template.template;

    // send mail with defined transport object
    reader.readTemplate(template_path, (error, html) => {

      const template = handlebars.compile(html);
      const replacements = {
        ...data,
        appName: environment.appName,
      };
      const htmlToSend = template(replacements);
      const mailOptions = {
        from: `${environment.appName} 🪐 <${environment_email.account.username}>`,
        to: this.contact,
        subject: this.config.subject,
        html: htmlToSend
      };

      // Send mail
      transporter.sendMail(mailOptions, function (error, response) {
        if (error)
          console.error(error);
      });
    });
  },
};

module.exports = mail;