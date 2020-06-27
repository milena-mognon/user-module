import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProviver';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';
import MailtrapProvider from './MailProvider/implementations/MailtrapProvider';
import IMailProvider from './MailProvider/models/IMailProvider';
import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

/**
 * Mail Provider Options
 */

// const mailProvider = MailtrapProvider;
const mailProvider = EtherealMailProvider;

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(mailProvider),
);
