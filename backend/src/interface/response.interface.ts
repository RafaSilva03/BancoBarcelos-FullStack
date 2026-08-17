export interface IResponse<T> {
    status: "success" | "error";
    code: number;
    data?: T;
    description?: string;
    error? : string;
}