interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: '00118111400@pq.uenf.br',
      name: 'Carlos Vergilio',
    },
  },
} as IMailConfig;
