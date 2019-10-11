var config_one = {
  name_module_Export: "sendEmail",
  nameFile: "test-email",
  path: "/send-tes_config_email",
  layoutsDir: 'content/template/father/',
  defaultLayout: 'activate',
  partialsDir: 'content/template/father/activate',
  viewPath: 'content/template/father/',
  extName: '.hbs',
  to: "email",
  subject: `Activa tu cuenta en Nanny 365`,
  template: 'activate',
  listening: false
}

var config_two = {
  name_module_Export: "sendEmail2",
  nameFile: "test-email2",
  path: "/send-tes_config_email2",
  layoutsDir: 'content/template/father/',
  defaultLayout: 'activate',
  partialsDir: 'content/template/father/activate',
  viewPath: 'content/template/father/',
  extName: '.hbs',
  to: "email",
  subject: `Activa tu cuenta en Nanny 365`,
  template: 'activate',
  listening: false
}

window.config = new send_email_PlugdoNode([config_one, config_two]);

