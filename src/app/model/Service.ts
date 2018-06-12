import {Contactperson} from './Contactperson';

export class Service {

  constructor(public id: string,
              public title: string,
              public description: string,
              public shortDescription: string,
              public catchyPhrase: string,
              public targetedAudience: string[],
              public audienceLevel: string[],
              public contactpersons: Contactperson[],
              public serviceCategory: string,
              public requirements: string,
              public activeService: Boolean,
              public imageFile: string,
              public href: string) {
  }
}
