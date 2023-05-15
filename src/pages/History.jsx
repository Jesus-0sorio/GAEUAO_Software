import React, { useEffect, useState } from 'react';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { useSelector } from 'react-redux';
import { consultaciesServices } from '../services/consultanciesServices';

export const History = () => {

	const { token } = useSelector((state) => state.auth);

	const header = [
		{ label: 'Asesor' },
		{ label: 'Asignatura' },
		{ label: 'Fecha' },
		{ label: 'Salón' },
		{ label: 'Estado' },
	];

	const [history, setHistory] = useState();

	const getHistory = async () => {
		try {
			const res = await consultaciesServices.getHistoryConsultancies(token.id, token.access_token);
			console.log(res.data)
			setHistory(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getHistory();
	}, [History]);


	return (
		<>
			<div className='flex flex-col items-center mx-auto pt-32 w-1/2'>
				<ConsultanciesTable
					title='Historial de monitorias'
					header={header}
					items={history}
					// className={}
				/>
			</div>
		</>
	);
};
