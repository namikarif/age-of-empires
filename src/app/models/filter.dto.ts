export class FilterDto {
  age: string;
  costs: Array<CostDto>
}

export class CostDto {
  enable: boolean;
  type: string;
  values: Array<number>;
}
