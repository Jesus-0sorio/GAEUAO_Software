import React, { useEffect, useState } from 'react';
import { NotificationItem } from './NotificationItem';

export const NotificationsTable = () => {
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		setDataLoaded(true);
	}, []);

	const [items, setItems] = useState([
		{
			icon: 'Cancelled',
			title: 'Cancelación',
			label: 'Asesoria de Calculo 1 el 11 de Mayo, 2023 cancelada',
			date: 'Hace 10 minutos',
		},
        {
            icon: 'Approved',
            title: 'Aprobación',
            label: 'Asesoria de Calculo 1 el 11 de Mayo, 2023 aprobada',
            date: 'Hace 15 minutos',
        },
        {
            icon: 'Info',
            title: 'Información',
            label: 'Nuevo asesor para Algoritmia y Programación',
            date: 'Hace 35 minutos',
        }
	]);
	return (
		<>
			<div className='flex flex-col border border-black rounded-xl w-3/4'>
				<div className='bg-red-600 text-white border-b border-black rounded-t-xl text-center text-xl'>
					Notificaciones
				</div>
				<div className='box'>
					{dataLoaded &&
						items.map((item, key) => (
							<NotificationItem
								key={key}
								item={item}
								className={`${
									key == items.length - 1 ? 'rounded-b-xl' : false
								}`}
							/>
						))}
				</div>
			</div>
		</>
	);
};
