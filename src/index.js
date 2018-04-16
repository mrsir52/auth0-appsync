import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';
import Client from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider as Provider } from 'react-apollo'
import App from './App'


import config from './appsync'

const client = new Client({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey
    }
})

const WithProvider = () => (
    <Provider client={client}>
        <Rehydrated>
            <App>

            </App>
        </Rehydrated>
    </Provider>
    
)

// const routes = makeMainRoutes();

ReactDOM.render( <WithProvider/>,

  document.getElementById('root')
);
