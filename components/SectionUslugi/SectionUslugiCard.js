"use client"
import { useState } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

const dataUslugi = [
	{
		id: 1,
		img: '/uslugi/1.webp',
		title: 'Цыганский ансамбль',
		key: 'cigan',
		content: '',
		link: 'uslugi/cyganskij-ansambl'
	},
	{
		id: 2,
		img: '/uslugi/2.webp',
		title: 'Цыганский ансамбль на свадьбу',
		key: 'cigan-wedding',
		content: '',
		link: 'uslugi/cyganskij-ansambl-na-svadbu'
	},
	{
		id: 3,
		img: '/uslugi/1.webp',
		title: 'Цыганский ансамбль на корпоратив',
		key: 'cigan-corporate',
		content: '',
		link: 'uslugi/cyganskij-ansambl-na-korporativ'
	},
	{
		id: 4,
		img: '/uslugi/2.webp',
		title: 'Цыганский ансамбль на юбилей',
		key: 'cigan-anniversary',
		content: '',
		link: 'uslugi/cyganskij-ansambl-na-yubilej'
	},
	{
		id: 5,
		img: '/uslugi/3.webp',
		title: 'Шоу программа на корпоратив',
		key: 'shou-na-korporativ',
		content: '',
		link: 'uslugi/shou-na-korporativ'
	},
	{
		id: 6,
		img: '/uslugi/3.webp',
		title: 'Шоу программа на юбилей',
		key: 'shou-programma-na-yubilej',
		content: '',
		link: 'uslugi/shou-programma-na-yubilej'
	},
	{
		id: 7,
		img: '/uslugi/3.webp',
		title: 'Шоу программа на свадьбу',
		key: 'shou-programma-na-svadbu',
		content: '',
		link: 'uslugi/shou-programma-na-svadbu'
	},
	{
		id: 8,
		img: '/uslugi/3.webp',
		title: 'Новогодняя шоу программа',
		key: 'novogodnyaya-shou-programma',
		content: '',
		link: 'uslugi/novogodnyaya-shou-programma'
	},
];

const SectionUslugiCard = () => {
	const [selectedFilter, setSelectedFilter] = useState('all');
	return (
		<div className='mt-10'>
			<div className="flex">
				<ul className='flex justify-center flex-wrap sd:text-base xz:text-xs'>
					<li
						className={`mx-2 my-1 cursor-pointer border rounded-full px-3 py-1 border-gray-600 ${selectedFilter === 'all' ? 'bg-gray-600 text-white' : 'text-gray-600'}`}
						onClick={() => setSelectedFilter('all')}
					>
						Все
					</li>
					{dataUslugi.map((item) => (
						<li
							key={item.key}
							className={`mx-2 my-1 cursor-pointer border rounded-full px-3 py-1 border-gray-600 ${selectedFilter === item.key ? 'bg-gray-600 text-white' : 'text-gray-600'}`}
							onClick={() => setSelectedFilter(item.key)}
						>
							{item.title}
						</li>)
					)}
				</ul>
			</div>

			<div className="flex flex-wrap justify-center -mx-3 mt-10 sd:px-10 xz:px-0">
				{dataUslugi
					.filter((item) => selectedFilter === 'all' || selectedFilter === item.key)
					.map((item) => (
						<motion.div
							key={item.key}
							initial={{ opacity: 0 }}
							animate={{
								opacity: selectedFilter === 'all' || selectedFilter === item.key ? 1 : 0,
								// height: selectedFilter === 'all' || selectedFilter === item.key ? 'auto' : 0,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }} // Измените продолжительность по желанию
							className={`sd:w-2/5 xz:w-full my-4 sd:mx-4 xz:mx-0 relative overflow-hidden`}
						>
							<div className="relative overflow-hidden px-2">
								<Image src={item.img} alt={item.title} width={636} height={636} className="mx-auto" />
								<div className='absolute top-0 xz:px-2 sd:px-2 w-full left-1/2 right-0 transform -translate-x-1/2 text-center'>
									<h3 className='text-white uppercase px-2 bg-gradient-to-t from-black/0 to-black/70 text-2xl pt-4 pb-5'>{item.title}</h3>
								</div>
								<div className='absolute w-full bottom-6 left-1/2 right-0 transform -translate-x-1/2 text-center'>

									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.link}`}
										as={`/${item.link}`}
										className="sd:px-6 sd:py-4 xz:px-3 xz:py-2 bg-white text-black text-xs uppercase font-semibold"
									>
										Перейти к просмотру
									</Link>
								</div>
							</div>
						</motion.div>
					))}
			</div>
		</div>
	)
}

export default SectionUslugiCard;