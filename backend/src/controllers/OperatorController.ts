import { getRepository } from "typeorm";
import Operator from "../models/Operator";

export default class OperatorController {
  async index(request: Request, response: Response) {
    const operatorRepository = getRepository(Operator);

    const operators = await operatorRepository.find({
    })

  }
}