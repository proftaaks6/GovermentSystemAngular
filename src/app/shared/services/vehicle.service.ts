import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const BACKEND_URL = environment.base_url + 'registration';

const vehicles: JSON = JSON.parse('[\n' +
  '  {\n' +
  '    "_id": 5,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b3e00d004fd56cad5",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 3.8882,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 51.863155,\n' +
  '        "longitude": 5.86799,\n' +
  '        "date": "2014-05-22T10:23:08 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.516968,\n' +
  '        "longitude": 5.84108,\n' +
  '        "date": "2016-12-23T08:28:04 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.71187,\n' +
  '        "longitude": 5.869598,\n' +
  '        "date": "2016-03-25T01:03:49 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.145581,\n' +
  '        "longitude": 5.808037,\n' +
  '        "date": "2014-12-26T11:16:41 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.215883,\n' +
  '        "longitude": 6.010679,\n' +
  '        "date": "2017-06-16T03:05:15 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.884008,\n' +
  '        "longitude": 5.943176,\n' +
  '        "date": "2015-09-20T09:01:07 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.913941,\n' +
  '        "longitude": 6.141818,\n' +
  '        "date": "2018-05-15T10:21:10 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.370097,\n' +
  '        "longitude": 5.886752,\n' +
  '        "date": "2018-08-25T06:21:05 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.31403,\n' +
  '        "longitude": 5.796838,\n' +
  '        "date": "2018-01-13T03:54:31 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.538407,\n' +
  '        "longitude": 6.189031,\n' +
  '        "date": "2018-02-05T08:42:57 -01:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 2,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b6d288432504f3913",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 9.5198,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 52.598954,\n' +
  '        "longitude": 5.769609,\n' +
  '        "date": "2018-03-28T03:53:02 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.30967,\n' +
  '        "longitude": 5.910648,\n' +
  '        "date": "2018-05-31T03:24:24 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.878763,\n' +
  '        "longitude": 5.857395,\n' +
  '        "date": "2018-10-22T01:15:05 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.482415,\n' +
  '        "longitude": 6.017705,\n' +
  '        "date": "2014-09-29T08:44:24 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.764501,\n' +
  '        "longitude": 6.045857,\n' +
  '        "date": "2018-02-08T02:02:17 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.448051,\n' +
  '        "longitude": 5.907626,\n' +
  '        "date": "2015-08-19T04:56:56 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.527068,\n' +
  '        "longitude": 6.198113,\n' +
  '        "date": "2015-07-19T04:12:18 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.151569,\n' +
  '        "longitude": 6.065105,\n' +
  '        "date": "2018-12-30T05:04:28 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.304834,\n' +
  '        "longitude": 5.904866,\n' +
  '        "date": "2019-02-26T01:37:09 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.979322,\n' +
  '        "longitude": 5.726354,\n' +
  '        "date": "2015-06-03T04:19:12 -02:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 5,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019bc95caf4b2170e3b9",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 6.7893,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 52.084608,\n' +
  '        "longitude": 6.077625,\n' +
  '        "date": "2017-02-21T08:46:18 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.952243,\n' +
  '        "longitude": 6.222217,\n' +
  '        "date": "2016-05-03T07:11:16 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.102251,\n' +
  '        "longitude": 5.923117,\n' +
  '        "date": "2016-11-23T12:57:58 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.955062,\n' +
  '        "longitude": 5.872943,\n' +
  '        "date": "2017-04-26T05:55:40 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.920837,\n' +
  '        "longitude": 6.208012,\n' +
  '        "date": "2016-11-21T02:19:00 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.07037,\n' +
  '        "longitude": 6.214261,\n' +
  '        "date": "2017-09-02T09:01:10 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.058486,\n' +
  '        "longitude": 5.78113,\n' +
  '        "date": "2015-01-22T03:31:21 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.210416,\n' +
  '        "longitude": 5.856852,\n' +
  '        "date": "2015-06-14T08:28:26 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.854339,\n' +
  '        "longitude": 5.859258,\n' +
  '        "date": "2015-08-18T10:40:14 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.096521,\n' +
  '        "longitude": 5.795476,\n' +
  '        "date": "2015-11-18T02:07:02 -01:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 10,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019bc1f377ed92de6136",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 4.0349,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 52.998963,\n' +
  '        "longitude": 6.163058,\n' +
  '        "date": "2015-08-20T12:41:09 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.22031,\n' +
  '        "longitude": 6.022652,\n' +
  '        "date": "2014-12-29T11:29:12 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.238164,\n' +
  '        "longitude": 5.700035,\n' +
  '        "date": "2014-05-26T03:09:54 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.300988,\n' +
  '        "longitude": 5.758327,\n' +
  '        "date": "2014-08-02T05:33:41 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.11075,\n' +
  '        "longitude": 5.99032,\n' +
  '        "date": "2015-09-19T07:19:40 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.96051,\n' +
  '        "longitude": 6.253703,\n' +
  '        "date": "2014-05-23T04:29:45 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.359371,\n' +
  '        "longitude": 5.817929,\n' +
  '        "date": "2017-07-10T04:14:14 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.97328,\n' +
  '        "longitude": 5.909544,\n' +
  '        "date": "2018-07-11T08:50:28 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.301443,\n' +
  '        "longitude": 6.201138,\n' +
  '        "date": "2015-05-23T07:32:28 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.090846,\n' +
  '        "longitude": 5.844059,\n' +
  '        "date": "2016-07-22T09:38:22 -02:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 0,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b2f4aad0aede658c0",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 5.1184,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 52.771303,\n' +
  '        "longitude": 6.118715,\n' +
  '        "date": "2014-12-25T01:53:08 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.43332,\n' +
  '        "longitude": 5.711301,\n' +
  '        "date": "2014-06-16T08:53:16 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.044897,\n' +
  '        "longitude": 6.237586,\n' +
  '        "date": "2017-02-18T10:35:42 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.828417,\n' +
  '        "longitude": 6.126934,\n' +
  '        "date": "2017-08-28T01:21:18 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.271246,\n' +
  '        "longitude": 6.187127,\n' +
  '        "date": "2018-02-23T04:40:31 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.052359,\n' +
  '        "longitude": 6.220824,\n' +
  '        "date": "2014-02-09T07:35:33 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.205881,\n' +
  '        "longitude": 6.263452,\n' +
  '        "date": "2017-11-21T09:41:06 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.561639,\n' +
  '        "longitude": 6.215218,\n' +
  '        "date": "2015-07-06T07:24:28 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.61724,\n' +
  '        "longitude": 6.237037,\n' +
  '        "date": "2014-05-29T07:22:23 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.876325,\n' +
  '        "longitude": 5.926423,\n' +
  '        "date": "2018-03-20T09:29:50 -01:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 0,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b6f97610c8883d5c1",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 4.3047,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 51.96223,\n' +
  '        "longitude": 5.835582,\n' +
  '        "date": "2016-03-30T02:32:11 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.767592,\n' +
  '        "longitude": 6.093729,\n' +
  '        "date": "2017-12-24T02:55:23 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.680654,\n' +
  '        "longitude": 6.10931,\n' +
  '        "date": "2014-04-01T08:51:27 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.483996,\n' +
  '        "longitude": 6.017759,\n' +
  '        "date": "2017-05-13T08:13:29 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.616358,\n' +
  '        "longitude": 5.894717,\n' +
  '        "date": "2018-06-19T03:40:59 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.517455,\n' +
  '        "longitude": 5.753628,\n' +
  '        "date": "2014-05-21T12:33:22 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.232536,\n' +
  '        "longitude": 5.722338,\n' +
  '        "date": "2014-08-31T01:14:53 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.207866,\n' +
  '        "longitude": 5.733263,\n' +
  '        "date": "2018-09-10T03:25:07 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.162222,\n' +
  '        "longitude": 5.985989,\n' +
  '        "date": "2015-12-31T09:15:55 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.09129,\n' +
  '        "longitude": 6.216422,\n' +
  '        "date": "2019-03-12T12:59:55 -01:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 7,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019bbb9b3a9d84c7fc4e",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 8.5085,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 53.363051,\n' +
  '        "longitude": 5.789488,\n' +
  '        "date": "2017-09-03T04:13:55 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.165944,\n' +
  '        "longitude": 5.874584,\n' +
  '        "date": "2016-05-05T05:14:53 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.825036,\n' +
  '        "longitude": 5.895421,\n' +
  '        "date": "2017-02-28T08:27:03 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.102223,\n' +
  '        "longitude": 5.703292,\n' +
  '        "date": "2017-12-10T01:33:17 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.274701,\n' +
  '        "longitude": 5.714882,\n' +
  '        "date": "2018-05-20T09:10:56 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.224361,\n' +
  '        "longitude": 6.232657,\n' +
  '        "date": "2014-04-15T10:50:04 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.280206,\n' +
  '        "longitude": 5.75794,\n' +
  '        "date": "2017-03-21T03:09:26 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.792245,\n' +
  '        "longitude": 6.223368,\n' +
  '        "date": "2019-04-30T09:07:49 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.430393,\n' +
  '        "longitude": 5.754721,\n' +
  '        "date": "2014-12-16T09:33:57 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.016693,\n' +
  '        "longitude": 6.155674,\n' +
  '        "date": "2014-04-27T01:47:34 -02:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 3,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b71569dd1fbfad91a",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 5.4545,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 52.480995,\n' +
  '        "longitude": 5.960043,\n' +
  '        "date": "2014-03-09T06:58:54 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.6077,\n' +
  '        "longitude": 6.208617,\n' +
  '        "date": "2016-01-18T08:03:46 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.177964,\n' +
  '        "longitude": 5.821803,\n' +
  '        "date": "2019-03-10T05:52:42 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.085001,\n' +
  '        "longitude": 6.040808,\n' +
  '        "date": "2014-05-13T07:35:49 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.209982,\n' +
  '        "longitude": 5.828343,\n' +
  '        "date": "2017-03-06T04:40:15 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.210699,\n' +
  '        "longitude": 6.251415,\n' +
  '        "date": "2015-12-11T01:59:09 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.666548,\n' +
  '        "longitude": 5.874294,\n' +
  '        "date": "2015-03-20T12:53:57 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.05668,\n' +
  '        "longitude": 5.910123,\n' +
  '        "date": "2015-09-05T01:54:45 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.605538,\n' +
  '        "longitude": 5.796244,\n' +
  '        "date": "2014-04-25T11:15:11 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.699069,\n' +
  '        "longitude": 5.890772,\n' +
  '        "date": "2018-07-19T02:07:41 -02:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  {\n' +
  '    "_id": 8,\n' +
  '    "vehicleType": "vehicle type",\n' +
  '    "chassisNumber": "5cce019b5e9f81b96afe0861",\n' +
  '    "fuelType": "fuel type",\n' +
  '    "emission": 9.5429,\n' +
  '    "locationPoints": [\n' +
  '      {\n' +
  '        "latitude": 51.945394,\n' +
  '        "longitude": 6.251876,\n' +
  '        "date": "2014-08-04T04:20:14 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.820655,\n' +
  '        "longitude": 6.119323,\n' +
  '        "date": "2018-12-23T10:42:05 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 50.888264,\n' +
  '        "longitude": 5.909676,\n' +
  '        "date": "2018-05-10T05:15:06 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.549858,\n' +
  '        "longitude": 5.93358,\n' +
  '        "date": "2016-08-12T04:20:42 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.985329,\n' +
  '        "longitude": 6.010108,\n' +
  '        "date": "2016-06-07T10:50:51 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.249452,\n' +
  '        "longitude": 6.227662,\n' +
  '        "date": "2014-08-13T07:25:51 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 53.380408,\n' +
  '        "longitude": 6.047872,\n' +
  '        "date": "2017-07-17T01:13:02 -02:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 51.64928,\n' +
  '        "longitude": 5.992642,\n' +
  '        "date": "2016-03-04T12:30:46 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.126104,\n' +
  '        "longitude": 6.050931,\n' +
  '        "date": "2019-02-20T12:20:42 -01:00"\n' +
  '      },\n' +
  '      {\n' +
  '        "latitude": 52.926483,\n' +
  '        "longitude": 5.706914,\n' +
  '        "date": "2015-09-08T02:34:01 -02:00"\n' +
  '      }\n' +
  '    ]\n' +
  '  }\n' +
  ']');

@Injectable({providedIn: 'root'})
export class VehicleService {

  constructor(private http: HttpClient){}



  getVehicles() {
    // let resp = this.http.get<any>(BACKEND_URL + '/vehicles');
    // console.log(resp);
    return vehicles;
  }
}
