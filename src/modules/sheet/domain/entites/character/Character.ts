import { BasicInfo } from './BasicInfo';

export class Character {
  private constructor(
    public powerLevel: number,

    public basicInfo: BasicInfo,
  ) {}

  public static createBlank(params: { powerLevel: number }) {
    return new Character(params.powerLevel, BasicInfo.createBlank());
  }
}
