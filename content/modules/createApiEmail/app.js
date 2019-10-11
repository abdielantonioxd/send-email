const {
  Router
} = require('express');
const configEmail = new Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const path = require('path');
const fs = require('fs');
configEmail.post('/create-file-email', function (req, res) {
  let body = req.body;
  let name_module_Export = body.name_module_Export;
  let path_api = body.path;
  let layoutsDir = body.layoutsDir;
  let nameFile = body.nameFile;
  let defaultLayout = body.defaultLayout;
  let partialsDir = body.partialsDir;
  let viewPath = body.viewPath;
  let extName = body.extName;
  let to = body.to;
  let subject = body.subject;
  let template = body.template
  createFile();
  function createFile() {
    var dataFile = ` const {
    Router
  } = require('express');
  const ${name_module_Export} = new Router();
  var nodemailer = require('nodemailer');
  var hbs = require('nodemailer-express-handlebars');
  const path = require('path');
  ${name_module_Export}.post('${path_api}', function  (req, res) {
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
          extname: '${extName}',
          layoutsDir: '${layoutsDir}',
          defaultLayout : '${defaultLayout}',
          partialsDir : '${partialsDir}' 
      },
      viewPath: '${viewPath}' ,
      extName: '${extName}'
  };
    transporter.use('compile', hbs(options));
  
  
     transporter.sendMail({
      from: process.env.Email,
      to: ${to},
      subject: "${subject}",
      template: '${template}',
      context: {
       
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
    fs.appendFile(`content/modules/sendEmail/${nameFile}.js`, dataFile, (err) => {
      if (err) throw err;
      console.log('Archivo Creado Satisfactoriamente');
    });
  }
  res.sendStatus(200)
  res.end()
})


module.exports = configEmail;