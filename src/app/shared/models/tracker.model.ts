import { LocationPoint } from './locationPoint.model';

export interface Tracker {
  id: number;
  active: boolean;
  locationPoints: LocationPoint[];
}