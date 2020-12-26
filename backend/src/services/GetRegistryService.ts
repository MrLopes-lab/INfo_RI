import { getCustomRepository } from 'typeorm';
import Registry from '../models/Registry';

import RegistriesRepository from '../repositories/RegistriesRepository';

interface Request {
  operator_id: number;
  registration_number: string;
  created_at: Date;
}

class GetRegistryService {
  public async execute({ operator_id, registration_number }: Request): Promise<Registry> {
    const registriesRepository = getCustomRepository(RegistriesRepository);

    const registry = registriesRepository.create({
      operator_id,
      registration_number,
      created_at: Date(),
    });

    await registriesRepository.save(registry);

    return registry;
  }
}

export default GetRegistryService;