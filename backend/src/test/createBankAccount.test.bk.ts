import request from "supertest";
const faker = require("faker");

const apiEndpoint = "http://localhost:3000";

describe("Create Bank Account", () => {
  it("should create a new bank", async () => {
    const randomNumbers = Array.from({ length: 21 }, () => Math.floor(Math.random() * 10)).join("");
    const iban = `PT50${randomNumbers}`;

    console.log(iban)

    const response = await request(apiEndpoint)
      .post("/api/v1/bankAccount/")
      .field("iban", iban) 
      .field("current_balance", 0.0)
      .field("available_balance", 0.0)
      .field("accountTypeId", "115687ec-2ca0-4623-86ec-8b30fc45c143") 
      .field("statusId", "3a8b509b-951c-4232-bbda-f3e08e29eba8"); 




    expect(response.status).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.code).toBe(201);

    expect(response.body.description).toBe("Bank account created successfully.");
    /*  const bank = response.body.data;

    expect(typeof bank.id).toBe("string");
    expect(bank.id.length).toBeGreaterThan(0);

    expect(bank.iban).toBe(iban);

    expect(typeof bank.accountTypeId).toBe("string");
    expect(bank.accountTypeId.length).toBeGreaterThan(0);

    expect(typeof bank.statusId).toBe("string");
    expect(bank.statusId.length).toBeGreaterThan(0);

    expect(bank.current_balance).toBe(0.0);
    expect(bank.available_balance).toBe(0.0);*/
  });
});
