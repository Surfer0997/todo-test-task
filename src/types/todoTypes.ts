export type Todo = {
    id:number;
    text:string;
    done: boolean;
    editing: boolean;
}

export const mockTodos: Todo[] = [
    {
      id: 1,
      text: 'Veni',
      done: true,
      editing: false
    },
    {
      id: 2,
      text: 'Vidi',
      done: true,
      editing: false
    },
    {
      id: 3,
      text: 'Vici',
      done: false,
      editing: false
    },
  ];