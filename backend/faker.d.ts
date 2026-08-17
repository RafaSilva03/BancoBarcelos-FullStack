declare module "@faker-js/faker" {
    interface FakerStatic {
      name: {
        findName(): string;
        gender(): string;
      };
      date: {
        past(): Date;
      };
      address: {
        streetAddress(): string;
        city(): string;
        zipCode(): string;
      };
      random: {
        arrayElement<T>(array: T[]): T;
        number(options?: { min?: number; max?: number }): number;
      };
      internet: {
        email(): string;
        password(): string;
      };
      phone: {
        phoneNumber(): string;
      };
    }
  
    const faker: FakerStatic;
    export = faker;
  }