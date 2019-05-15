import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { NAWInformationModel } from "../../models/nawinformation.model";
import { environment } from "../../../environments/environment";

const users = [
  {
    "_id": 1247,
    "firstname": "Macdonald",
    "surname": "Herring",
    "country": "Nederland",
    "city": "Jacumba",
    "street": "Malbone Street",
    "housenumber": 90,
    "zipcode": 2076
  },
  {
    "_id": 9990,
    "firstname": "Lourdes",
    "surname": "Baker",
    "country": "Nederland",
    "city": "Tuttle",
    "street": "Norwood Avenue",
    "housenumber": 37,
    "zipcode": 6309
  },
  {
    "_id": 6915,
    "firstname": "Mcbride",
    "surname": "Galloway",
    "country": "Nederland",
    "city": "Gracey",
    "street": "Beach Place",
    "housenumber": 12,
    "zipcode": 7340
  },
  {
    "_id": 6018,
    "firstname": "Mcpherson",
    "surname": "Dennis",
    "country": "Nederland",
    "city": "Colton",
    "street": "Montague Street",
    "housenumber": 101,
    "zipcode": 6690
  },
  {
    "_id": 8318,
    "firstname": "Chapman",
    "surname": "Snider",
    "country": "Nederland",
    "city": "Salunga",
    "street": "Huntington Street",
    "housenumber": 60,
    "zipcode": 7097
  },
  {
    "_id": 1147,
    "firstname": "Lea",
    "surname": "Hurst",
    "country": "Nederland",
    "city": "Lumberton",
    "street": "Wolf Place",
    "housenumber": 95,
    "zipcode": 6397
  },
  {
    "_id": 5125,
    "firstname": "Joyce",
    "surname": "Schneider",
    "country": "Nederland",
    "city": "Riverton",
    "street": "Conklin Avenue",
    "housenumber": 88,
    "zipcode": 3076
  },
  {
    "_id": 1945,
    "firstname": "Foster",
    "surname": "Copeland",
    "country": "Nederland",
    "city": "Jacksonburg",
    "street": "Conselyea Street",
    "housenumber": 12,
    "zipcode": 6669
  }
];

@Injectable({ providedIn: 'root' })
export class NawinformationService {
  constructor(private http: HttpClient) { }

  getNAWInformation(id: number) {
    return users.filter(x => x._id === id)[0];
  }

  async changeNAWInformation(nawinformation: NAWInformationModel) {
    console.log(nawinformation);
    let body = new URLSearchParams();
    body.set('name', naw.name);
    body.set('address', naw.address);
    body.set('residence', naw.residence);
    body.set('email', naw.email);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return await this.http.post('governmentAdmin/deploy/v1/government/user', body.toString(), options).toPromise();
  }
}
