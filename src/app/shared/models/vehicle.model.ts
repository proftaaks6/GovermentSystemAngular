import { Tracker } from './tracker.model';

export interface Vehicle {
  id: string;
  vehicleType: string;
  chassisNumber: string;
  fuelType: string;
  emission: string;
  tracker: Tracker;
}
