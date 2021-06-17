import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { CreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUserRequestDTO) {
    const usersAlreadyExist = await this.usersRepository.findByEmail(
      data.email,
    );

    if (usersAlreadyExist) throw new Error('User already exists');

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
