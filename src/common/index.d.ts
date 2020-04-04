interface IResponseBody {
  result: boolean;
  message?: string;
  data?: any;
}

interface ITodo {

  id: string;
  deletedAt: -1 | string;
  createdAt:  string | number;
  isCompleted: boolean;
  task: string;

}