const {
  Router
} = require('express');
const configEmail = new Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const path = require('path');
const fs = require('fs');
configEmail.post('create-file-email', function (req, res) {

})

var dataFile = ` const {
  Router
} = require('express');
const sendconfirmation = new Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const path = require('path');
sendconfirmation.post('${path_api}', function  (req, res) {
  var body = req.body;
  let email = body.email;
  let token = body.message;
  async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secureConnection: false,
    port: 465,
    auth: {
      user: process.env.Email,
      pass: process.env.Password,  
    }
  });
  var options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: '${layoutsDir}',
        defaultLayout : '${layoutsDir}',
        partialsDir : '${partialsDir}' 
    },
    viewPath: '${viewPath}' ,
    extName: '.hbs'
};
  transporter.use('compile', hbs(options));


   transporter.sendMail({
    from: process.env.Email,
    to: email,
    subject: "",
    template: '${layoutsDir}',
    context: {
     name:name
    }
    },function (error, response) {
      console.log('response')
      transporter.close();
  })

  }
  main().catch(console.error);
  res.sendStatus(200)
  res.end()
})
module.exports = ${name_module_Export};`;
function createFile() {
  fs.appendFile(`/content/modules/sendEmail/${name_file}`, dataFile, (err) => {
    if (err) throw err;
    console.log('Archivo Creado Satisfactoriamente');
  });
}
module.exports = configEmail;