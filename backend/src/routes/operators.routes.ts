import { Router } from 'express';
import CreateOperatorService from '../services/CreateOperator';

const operatorsRouter = Router();

operatorsRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;

    const createOperator = new CreateOperatorService();

    const operator = await createOperator.execute({
      name,
    });

    return response.json(operator);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

export default operatorsRouter;