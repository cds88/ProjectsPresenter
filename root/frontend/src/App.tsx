import * as React from 'react';

 
import { Provider } from 'react-redux';

 
import { store } from "./reducers/ConfigureStore";
  
import Master from './Master';



const App: React.FC = () => {
    return (
 
            <Provider store={store}>
            <Master />
        </Provider>

 
    )
}

export default App;



const elements = [
<img src="https://images.unsplash.com/photo-1571903753771-ce22acbc441c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />,

    <img src="https://images.unsplash.com/photo-1571987906345-1b41e18ccf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />,

<img src="https://images.unsplash.com/photo-1569243963117-78bb6e7ff948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />,

<img src="https://images.unsplash.com/photo-1569261230225-e0d58c2342c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="" /> ]