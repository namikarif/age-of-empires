export class UnitsDto {
  accuracy?: string;
  age?: string;
  armor?: string;
  attack?: number;
  attack_delay?: number;
  build_time?: number
  cost?: {
    Wood?: number,
    Food?: number
    Gold?: number
  }
  description?: string;
  expansion?: string;
  hit_points?: number;
  id?: number;
  line_of_sight?: number;
  movement_rate?: number;
  name?: string;
  range?: number;
  reload_time?: number;
}
