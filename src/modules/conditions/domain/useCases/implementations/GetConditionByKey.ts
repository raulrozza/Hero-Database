import { IGetConditionByKeyDTO } from '@/modules/conditions/domain/dtos';
import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';

export default class GetConditionByKey {
  constructor(private conditionsRepository: IConditionsRepository) {}

  public async execute({ key }: IGetConditionByKeyDTO) {
    return this.conditionsRepository.findByKey(key);
  }
}
