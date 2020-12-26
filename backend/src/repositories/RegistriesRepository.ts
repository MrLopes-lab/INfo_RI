import { EntityRepository, Repository } from 'typeorm';

import Registry from '../models/Registry';

@EntityRepository(Registry)
class RegistriesRepository extends Repository<Registry> {
  
}

export default RegistriesRepository;