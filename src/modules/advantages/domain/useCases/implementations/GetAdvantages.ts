import { IAdvantagesRepository } from '@/modules/advantages/domain/repositories/IAdvantagesRepository';

export default class GetAdvantages {
  constructor(private advantagesRepository: IAdvantagesRepository) {}

  public async execute() {
    return this.advantagesRepository.findAll();
  }
}
