import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { CreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: CreateUserRequestDTO): Promise<void> {
    const usersAlreadyExist = await this.usersRepository.findByEmail(
      data.email,
    );

    if (usersAlreadyExist) throw new Error('User already exists');

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: { email: data.email, name: data.name },
      from: { email: 'equipe@joao.com', name: 'Equipe do app' },
      subject: 'Bem-vindo a plataforma!',
      body: 'Olá, seja bem-vindo a plataforma, você já pode fazer login.',
    });
  }
}
