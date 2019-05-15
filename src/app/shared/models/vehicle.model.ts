import { Tracker } from './tracker.model';
import { VehicleTracker } from './vehicleTracker.model';

export interface Vehicle {
  id: number;
  vehicleType: string;
  chassisNumber: string;
  fuelType: string;
  emission: string;
  activeTracker: Tracker;
  trackers: VehicleTracker[];

}
