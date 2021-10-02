declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    product: {
      id: string;
    };
  }
}
