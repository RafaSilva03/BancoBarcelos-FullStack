import bcrypt from "bcrypt";

class Bcrypt {
  static async getPasswordHash(plain_password: string): Promise<string> {
    const saltRounds = 10;
    const hash = await bcrypt.hash(plain_password, saltRounds);
    return hash;
  }

  static async comparePasswords(plain_password: string, hash: string): Promise<boolean> {
    try {
      const result = await bcrypt.compare(plain_password, hash);
      return result;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
}

export default Bcrypt;
