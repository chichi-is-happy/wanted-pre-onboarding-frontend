export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoReadApiResponse {
  status: number;
  errorMessage?: string;
  data?: TodoType[];
}
