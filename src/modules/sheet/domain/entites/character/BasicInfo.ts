export type IdentityType = 'SECRET' | 'PUBLIC';

interface IConstructor {
  hero?: string;
  identity: string;
  identityType: IdentityType;
  gender?: string;
  age?: number;
  height?: number;
  weight?: number;
  eyes?: string;
  hair?: string;
  groupAffiliation?: string;
  baseOfOperations?: string;
}

export class BasicInfo {
  public hero?: string;
  public identity: string;
  public identityType: IdentityType;
  public gender?: string;
  public age?: number;
  public height?: number;
  public weight?: number;
  public eyes?: string;
  public hair?: string;
  public groupAffiliation?: string;
  public baseOfOperations?: string;

  constructor({
    age,
    gender,
    identity,
    identityType,
    baseOfOperations,
    eyes,
    groupAffiliation,
    hair,
    height,
    hero,
    weight,
  }: IConstructor) {
    this.hero = hero;
    this.identity = identity;
    this.identityType = identityType;
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.eyes = eyes;
    this.hair = hair;
    this.groupAffiliation = groupAffiliation;
    this.baseOfOperations = baseOfOperations;
  }

  public static createBlank() {
    return new BasicInfo({
      identity: '',
      identityType: 'SECRET',
    });
  }
}
