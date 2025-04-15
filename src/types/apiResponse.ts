export type ResponseType<T = unknown> = {
  status: number;
  data: T;
  message: string;
};
