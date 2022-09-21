import {atom, selector, selectorFamily} from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    {id: 1, text: 'Learn React-Native', done: true},
    {id: 2, text: 'Learn state management', done: false},
  ],
});

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({get}) => {
    const todos = get(todosState);
    // 마지막 항목의 id를 조회하고 만약 값이 존재하지 안으면 0을 사용
    const lastId = todos[todos.length - 1]?.id ?? 0;
    return lastId + 1; // lastIddptj 1을 더한 값을 새로운 항목의 id로 사용
  },
});

export const todoById = selectorFamily({
  key: 'todoById',
  get:
    (id: number) =>
    ({get}) =>
      get(todosState).find(todo => todo.id === id),
});
