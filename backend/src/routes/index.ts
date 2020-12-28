import { Router } from 'express';
import registriesRouter from './registries.routes';
import operatorsRouter from './operators.routes';

const routes = Router();

routes.use('/registries', registriesRouter);
routes.use('/operators', operatorsRouter);

export default routes;