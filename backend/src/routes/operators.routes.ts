import { response, Router } from 'express';
import { getRepository } from 'typeorm';
import Operator from '../models/Operator';
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

operatorsRouter.get('/', async (request, response) => {
  const operatorRepository = getRepository(Operator);

  try {
    const operators = await operatorRepository.find();
    return response.json(operators);
  } catch (error) {
    return response.status(400).json(error)
  }
})

export default operatorsRouter;