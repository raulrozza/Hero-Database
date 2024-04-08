import { IEffectsRepository } from '@/modules/powers/domain/repositories/IEffectsRepository';

export default class GetEffects {
  constructor(private effectsRepository: IEffectsRepository) {}

  public async execute() {
    return this.effectsRepository.findAll();
  }
}
