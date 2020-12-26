import { getCustomRepository } from 'typeorm';
import Operator from '../models/Operator';

import OperatorRepository from '../repositories/OperatorRepository'

interface Request {
  name: string;
}

class CreateOperatorService {
  public async execute({ name }: Request): Promise<Operator> {
    const operatorRepository = getCustomRepository(OperatorRepository);

    const operator = operatorRepository.create({
      name,
    });

    await operatorRepository.save(operator);

    return operator;
  }
}

export default CreateOperatorService;