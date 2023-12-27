import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {Header} from './components/Heared';
import {Body} from './components/Body';

const queryClient = new QueryClient()

class App extends React.Component {
    render() {
      return (
        <QueryClientProvider client={queryClient}>
          <div>
            <Header title="Todo List"/>
            <Body/>
          </div>
        </QueryClientProvider>
      )
    }
  }

export default App