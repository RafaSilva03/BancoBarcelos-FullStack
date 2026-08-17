import request from "supertest";
const faker = require("faker");

const apiEndpoint = "http://localhost:3000";

describe("Create User Endpoint", () => {
  it("should create a new user", async () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const randomAddress = faker.address.streetAddress();
    const randomZipCode = faker.address.zipCode();
    const randomCity = faker.address.city();
    const randomPhone = faker.phone.phoneNumber();
    const randomNif = faker.datatype.number({ min: 100000000, max: 999999999 }).toString();
    const randomPassword = faker.internet.password();
    const randomDob = faker.date.past(30).toISOString().split("T")[0];
  
    const response = await request(apiEndpoint)
      .post("/api/v1/user/")
      .field("name", randomName)
      .field("pronoun_id", '1dfc6cb4-49e5-4558-b199-b12fe67ef06e')
      .field("dob", randomDob)
      .field("address", randomAddress)
      .field("sex_type_id", 'a4b905db-3049-4660-8862-422101a7583a')
      .field("postal_code[code]", "4924-344")
      .field("postal_code[location]", randomCity)
      .field("contacts[0][contact_type]", "email")
      .field("contacts[0][contact_value]", randomEmail)
      .field("contacts[1][contact_type]", "phone")
      .field("contacts[1][contact_value]", randomPhone)
      .field("status_id", '3a8b509b-951c-4232-bbda-f3e08e29eba8')
      .field("nif", randomNif)
      .field("password", randomPassword)
      .attach("image", "src/test/test.jpg");


    expect(response.status).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.code).toBe(201);

    expect(response.body.description).toBe("User created successfully.");
    const userData = response.body.data;
    expect(userData.name).toBe(randomName);
    expect(typeof userData.id).toBe("string");
    expect(userData.id.length).toBeGreaterThan(0);
    expect(typeof userData.pronoun_id).toBe("string");
    expect(userData.pronoun_id.length).toBeGreaterThan(0);

    expect(typeof userData.picture_name).toBe("string");
    expect(userData.picture_name.length).toBeGreaterThan(0);

    const userDataDob = new Date(userData.dob).toISOString().split("T")[0];
    const randomDobFormatted = new Date(randomDob).toISOString().split("T")[0];

    expect(userDataDob).toBe(randomDobFormatted);
    expect(userData.address).toBe(randomAddress);
  

    expect(typeof userData.sex_type_id).toBe("string");
    expect(userData.sex_type_id.length).toBeGreaterThan(0);

    expect(typeof userData.postal_code.id).toBe("string");
    expect(userData.postal_code.id.length).toBeGreaterThan(0);

    expect(userData.postal_code.code).toBe("4924-344");
    expect(userData.postal_code.location).toBe(randomCity);

    expect(typeof userData.status_id).toBe("string");
    expect(userData.status_id.length).toBeGreaterThan(0);

    expect(userData.nif).toBe(randomNif);
    expect(userData.contacts.length).toBe(2);
    const emailContact = userData.contacts.find((contact: any) => contact.type === "email");
    expect(emailContact.contact_value).toBe(randomEmail);

    const phoneContact = userData.contacts.find((contact: any) => contact.type === "phone");
    expect(phoneContact.contact_value).toBe(randomPhone);
  });
});
