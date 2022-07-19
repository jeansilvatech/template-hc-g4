export interface CreatePointsDto {
  user_id: string;
  order_id: string;
  order_value: number;
  points: number;
  operation: 'add' | 'debit';
  datetime_operation: Date;
  canceled: boolean;
}
