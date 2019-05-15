import {Vehicle} from "./vehicle.model";

export interface NAWInformationModel {
  name: string;
  address: string;
  residence: string;
  ownedCars: Vehicle[];
  email: string;
}
