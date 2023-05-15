import { Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { Loading } from './components/Loading';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from './components/PrivateRoutes';
import { History } from './pages/History';
import { NavBarStart } from './components/NavBarStart';

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
					path='/*'
					element={
						<PrivateRoutes>
							<NavBarStart />
							<Routes>
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
							</Routes>
						</PrivateRoutes>
					}
				/>
			</Routes>
		</>
	);
}
export default App;
