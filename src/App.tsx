import React from 'react';
import Demo from './components/demo';
import { Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Diary from './components/diary';

class App extends React.Component {
	router = [
		{
			path: '/demo',
			key: 'demo',
			component: () => Demo,
		},
		{
			path: '/diary',
			key: 'diary',
			component: () => Diary,
		},
		{
			path: '/login',
			key: 'login',
			component: () => Login,
		},
	];
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Redirect to={'login'} />
					{this.router.map(({ key, path, component }) => (
						<Route key={key} path={path} component={component()}></Route>
					))}
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
