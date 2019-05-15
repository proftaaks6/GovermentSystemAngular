import { Vehicle } from './vehicle.model';
import { Tracker } from './tracker.model';

export class VehicleTracker {
  public id: number;
  public vehicle: Vehicle;
  public tracker: Tracker;
  public startDate: Date;
  public endDate: Date;
}