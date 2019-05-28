import { Tracker } from './tracker.model';
import { VehicleTracker } from './vehicleTracker.model';

export interface JsonVehicle {
  id: number;
  vehicleType: string;
  chassisNumber: string;
  fuelType: string;
  emission: string;
}
