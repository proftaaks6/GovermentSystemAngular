import { LocationPoint } from './locationPoint.model';
import { SquareRegion } from './squareRegion.model';

export class PriceRow {
  public id: number;
  public distance: number;
  public price: number;
  public region: SquareRegion;
  public locationPoints: LocationPoint[];
  public vehicleId: number;
}