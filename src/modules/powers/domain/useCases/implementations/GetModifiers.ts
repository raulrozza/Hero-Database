import { IModifiersRepository } from '@/modules/powers/domain/repositories/IModifiersRepository';

export default class GetModifiers {
  constructor(private modifiersRepository: IModifiersRepository) {}

  public async execute() {
    return this.modifiersRepository.findAll();
  }
}
