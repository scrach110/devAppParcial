import express, { Express } from 'express';
import cors from 'cors';
import { getLogger } from './logger.config';
import { ErrorHandler } from '../middlewares/error.handler';
import { MascotasRouter } from '../routes/mascotas.routes';
import { NotFoundHandler } from '../middlewares/notFound.handler';

let app : Express;

export const configureApp = async () => {
  //getLogger().debug('Configurando la aplicación...');

  app = express();

  app.use(cors())
  app.use(express.json());
  app.use('/api/mascotas', MascotasRouter());
  app.use(NotFoundHandler);
  app.use(ErrorHandler);

  //getLogger().info('⚙️ Aplicación configurada');
}

export const getApp = (): Express => {
  if (!app) throw new Error('Aplicacion no configurada');
  return app;
}
