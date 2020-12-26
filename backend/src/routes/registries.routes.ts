import { Router } from 'express';
import GetRegistryService from '../services/GetRegistryService';

const registriesRouter = Router();

registriesRouter.post('/', async (request, response) => {
  try {
    const { operator_id, registration_number, created_at } = request.body;

    const getRegistry = new GetRegistryService();

    const registry = await getRegistry.execute({
      operator_id,
      registration_number,
      created_at,
    });

    return response.json(registry);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  
});

export default registriesRouter;