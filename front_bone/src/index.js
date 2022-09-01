import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router';
import toast, { Toaster } from 'react-hot-toast';


// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <div>
        <Toaster 
            position='top-right'
            toastOptions={{
                success: {
                  style: {
                    background: '#1fbef6ff',
                    color: '#eee',
                    fontWeight:'bold',
                  },
                },
                error: {
                  style: {
                    background: 'red',
                    color: '#eee',
                  },
                },
            }}
        />
    </div>
        <Router / >
    </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// // import configureStore from './store';
// import './index.css';
// import App from './App';
// // import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <Provider >
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
