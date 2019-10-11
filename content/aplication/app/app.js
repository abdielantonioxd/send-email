var config = "" ; 
window.config = new send_email_PlugdoNode([{
  path: "/send-tes_config_email",
  layoutsDir: 'content/template/father/',
  defaultLayout: 'activate',
  partialsDir: 'content/template/father/activate',
  viewPath: 'content/template/father/',
  extName: '.hbs',
  head_message: {
    to: "email",
    subject: `Activa tu cuenta en Nanny 365`,
    template: 'activate',
    context: {
      token: "token"
    }
  }
},{
  path: "/send-tes_config_email",
  layoutsDir: 'content/template/father/',
  defaultLayout: 'activate',
  partialsDir: 'content/template/father/activate',
  viewPath: 'content/template/father/',
  extName: '.hbs',
  head_message: {
    to: "email",
    subject: `Activa tu cuenta en Nanny 365`,
    template: 'activate',
    context: {
      token: "token"
    }
  }
}]
);

