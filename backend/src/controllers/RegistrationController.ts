import { Request, Response } from 'express';
import RegistryView from '../views/Registry_view';

import Registry from '../models/Registry';
import { getRepository } from 'typeorm';

export default class RegistrationController {
  async index(request: Request, response: Response) {
    const registryRepository = getRepository(Registry);

    const registries = await registryRepository.find({
      
    })
  }
}