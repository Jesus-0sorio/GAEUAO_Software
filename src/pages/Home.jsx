import React, { useState } from 'react';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { NotificationsTable } from '../components/NotificationsTable/NotificationsTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { consultaciesServices } from '../services/consultanciesServices';

export const Home = () => {
	const [consultancies, setConsultancies] = useState();

	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.auth);

	const getInfo = async () => {
		try {
			const res = await consultaciesServices.getUpcomingConsultancies(
				token.id,
				token.access_token
			);
			setConsultancies(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getInfo();
	}, [Home]);

	const [completedConsultancies, setCompletedConsultancies] = useState([]);

	const [header, setHeader] = useState([
		{ label: 'Asesor', path: 'advisor' },
		{ label: 'Asignatura', path: 'subject' },
		{ label: 'Fecha', path: 'date' },
		{ label: 'Salón', path: 'room' },
		{ label: 'Estado', path: '' },
	]);

	return (
		<>
			<div>
				{consultancies && (
					<div className='select-none grid grid-cols-3 pt-32'>
						<div className='flex flex-col col-span-2 items-center'>
							<br />
							<ConsultanciesTable
								title={`Encuentros`}
								header={header}
								items={consultancies}
								className='w-3/4'
							/>

							<br />
							<ConsultanciesTable
							title={`Encuentros pasados`}
							header={header}
							items={completedConsultancies}
							className='w-3/4'
						/>
						</div>
						<div className='flex flex-col items-center'>
							<br />
							<NotificationsTable />
						</div>
					</div>
				)}
			</div>
		</>
	);
};
