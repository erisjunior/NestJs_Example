export class CreateDogDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateDogDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class ListAllEntities {
  readonly limit: number;
}