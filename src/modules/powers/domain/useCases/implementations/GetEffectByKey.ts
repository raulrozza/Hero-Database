import { IGetEffectByKeyDTO } from '@/modules/powers/domain/dtos';
import { IEffectsRepository } from '@/modules/powers/domain/repositories/IEffectsRepository';

export default class GetEffectByKey {
  constructor(private effectsRepository: IEffectsRepository) {}

  public async execute({ key }: IGetEffectByKeyDTO) {
    return this.effectsRepository.findByKey(key);
  }
}
