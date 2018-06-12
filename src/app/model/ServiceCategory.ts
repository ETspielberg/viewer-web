import {Service} from './Service';

export class ServiceCategory {

  constructor(public  id: string,
              public  name: string,
              public  description: string,
              public  shortDescription: string,
              public  catchyPhrase: string,
              public  services: Service[],
              public  imageFile: string) {
  }
}
