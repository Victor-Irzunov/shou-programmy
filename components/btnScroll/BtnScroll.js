"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';

const BtnScroll = () => {
	return (
		<LinkScroll to='main'
			className="cursor-pointer"
			smooth={true}
			offset={-100}
			duration={800}
		>
			<div className="flex flex-col justify-center items-center">
				<div className="text-xs text-gray-600 font-light rotate-90 w-full">
					вниз
				</div>
				<div className="">
					<Image src='/arrow-down.svg' className="mt-2" alt="стрелка для прокрутки вниз" width={40} height={40} />
				</div>
			</div>
		</LinkScroll>
	)
}

export default BtnScroll