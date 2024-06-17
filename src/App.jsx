
import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import InboxScreen from './components/task/InboxScreen';
import { worker } from './mocks/browser';
import { http } from 'msw';
import { MockedState } from './components/task/TaskList.stories';

worker.start();
console.log(
  http.get(
    'https://jsonplaceholder.typicode.com/todos?userId=1',
    (req, res, ctx) => {
      console.log(res(ctx.json(MockedState.tasks)))
      console.log(res(ctx.status(403)))
      return res(ctx.status(403));
    }
  )
);

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;