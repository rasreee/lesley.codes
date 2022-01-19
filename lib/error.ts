export class NullDataError extends Error {
  constructor(tableName: string, method: string) {
    super(`Expected data to be defined after ${method}ing ${tableName} with no error`);
  }
}
