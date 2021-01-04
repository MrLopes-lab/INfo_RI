import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class CreteSessionUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });
    
    if (!user) {
      throw new Error('Email/Password invalid email!');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Email/Password invalid!');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const userIdNumber = user.id;
    const userIdString = userIdNumber.toString();

    const token = sign({}, secret, {
      subject: userIdString,
      expiresIn: expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreteSessionUserService;