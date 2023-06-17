import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';

export default class GetConditions {
  constructor(private conditionsRepository: IConditionsRepository) {}

  public async execute() {
    return this.conditionsRepository.findAll();
  }
}
