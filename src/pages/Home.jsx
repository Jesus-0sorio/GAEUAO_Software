import React from 'react';
import { ConsultanciesList } from '../components/Home/ConsultanciesList';
import { Searchbar } from '../components/Home/SearchBar';

export const Home = () => {
	const [items, setItems] = React.useState([
		{ value: 1, label: 'Cálculo' },
		{ value: 2, label: 'Física' },
		{ value: 3, label: 'Algoritmia y Programación' },
	]);

	return (
		<>
			<div className='select-none'>
				<br />
				<div className='flex flex-col col-span-1 items-center'>
					<Searchbar items={items} />
					<br />
					<ConsultanciesList />
				</div>
			</div>
		</>
	);
};
