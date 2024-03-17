import { IGetModifierByKeyDTO } from '@/modules/powers/domain/dtos';
import { IModifiersRepository } from '@/modules/powers/domain/repositories/IModifiersRepository';

export default class GetModifierByKey {
  constructor(private modifiersRepository: IModifiersRepository) {}

  public async execute({ key }: IGetModifierByKeyDTO) {
    return this.modifiersRepository.findByKey(key);
  }
}
