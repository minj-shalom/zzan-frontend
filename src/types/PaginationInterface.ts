export interface PaginationInterface {
  total: number;
  offset: number;
  limit: number;
  hasNext?: boolean;
}
