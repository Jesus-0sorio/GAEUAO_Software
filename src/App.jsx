import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Start } from './pages/Start';
import { Home } from './pages/Home';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Start />}
				/>
				<Route
					path='/pilos'
					element={<h1>pilos</h1>}
				/>
				<Route
					path='/excelencia'
					element={<h1>Excelencia</h1>}
				/>
				<Route
					path='/inicio'
					element={<Home />}
				/>
			</Routes>
		</>
	);
}

export default App;
