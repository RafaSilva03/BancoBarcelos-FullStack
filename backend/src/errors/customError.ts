class CustomError extends Error {
    public code: string;
    public message: string;
    public status: number;
  
    constructor(code: string, message: string, status: number = 500) {
      super(message);
      this.name = this.constructor.name;
      this.code = code;
      this.message = message;
      this.status = status;
    }
  }
  
  export { CustomError };