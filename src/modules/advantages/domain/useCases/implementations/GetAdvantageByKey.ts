import { IGetAdvantageByKeyDTO } from '@/modules/advantages/domain/dtos';
import { IAdvantagesRepository } from '@/modules/advantages/domain/repositories/IAdvantagesRepository';

export default class GetAdvantageByKey {
  constructor(private advantagesRepository: IAdvantagesRepository) {}

  public async execute({ key }: IGetAdvantageByKeyDTO) {
    return this.advantagesRepository.findByKey(key);
  }
}
