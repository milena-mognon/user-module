interface IMailConfig {
  driver: 'ethereal' | 'mailtrap' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

// IMailConfig garantee that driver is ether 'ethereal' or 'ses' or 'mailtrap'
export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'colocar_o_email_cadastrado_aws',
      name: 'Nome da empresa ou pessoa',
    },
  },
} as IMailConfig;
