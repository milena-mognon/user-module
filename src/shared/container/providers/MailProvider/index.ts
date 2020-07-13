import { container } from 'tsyringe';
import mailConfig from '@config/mail';
import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';
import IMailProvider from './models/IMailProvider';
import MailtrapMailProvider from './implementations/MailtrapMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
  mailtrap: container.resolve(MailtrapMailProvider),
};

/**
 * can be ethereal or ses.
 * Dinamic way to avoid ifs
 */
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
