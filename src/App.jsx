import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/Loading';
import { NavBarStart } from './components/NavBarStart';
import { PrivateRoutes } from './components/PrivateRoutes';
import { History } from './pages/History';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { Start } from './pages/Start';

function App() {
	const { isLoading } = useSelector((state) => state.loading);

	return (
		<>
			{isLoading && <Loading />}
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
					element={<PrivateRoutes />}>
					
					<Route
						path='/inicio'
						element={<Home />}
					/>
					<Route
						path='/agendar'
						element={<Schedule />}
					/>
					<Route
						path='/historial'
						element={<History />}
					/>
				</Route>
			</Routes>
		</>
	);
}
export default App;
