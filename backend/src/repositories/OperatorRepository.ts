import { EntityRepository, Repository } from 'typeorm';

import Operator from '../models/Operator';

@EntityRepository(Operator)
class RegistriesRepository extends Repository<Operator> {
  
}

export default RegistriesRepository;