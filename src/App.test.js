import * as React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from './Calculator';
import ResultPanel from './components/ResultPanel';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('renders Calculator', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders ResultPanel with string value', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultPanel result={'5'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
