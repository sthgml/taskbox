import { http } from 'msw';
import { MockedState } from '../components/task/TaskList.stories';

export const handlers = [
  http.get(
    'https://jsonplaceholder.typicode.com/todos?userId=1',
    (req, res, ctx) => {
      return res(ctx.json(MockedState.tasks));
    }
  ),
  http.get(
    'https://jsonplaceholder.typicode.com/todos?userId=1',
    (req, res, ctx) => {
      return res(ctx.status(403));
    }
  ),
];
