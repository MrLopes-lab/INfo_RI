import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import registriesRouter from './registries.routes';
import operatorsRouter from './operators.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);

routes.use(ensureAuthenticated);

routes.use('/registries', registriesRouter);
routes.use('/operators', operatorsRouter);
routes.use('/users', usersRouter);

export default routes;