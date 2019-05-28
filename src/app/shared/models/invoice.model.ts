import { PriceRow } from './priceRow.model';

export class Invoice {
  public id: number;
  public vehicleId: number;
  public totalDistance: number;
  public totalPrice: number;
  public isPaid: boolean;
  public date: Date;
  public priceRowList: PriceRow[];
}