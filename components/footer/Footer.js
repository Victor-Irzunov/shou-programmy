'use client'
import telegram from '../../public/social-icon/telegram.svg'
import viber from '../../public/social-icon/viber.svg'
import instagram from '../../public/social-icon/instagram.svg'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	const screens = useScreens()
	return (
		<footer className="relative pt-6 pb-3 mt-20 bg-black" id='contact'>
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-white flex-wrap'>

					<div className='xs:mb-4'>
						<p className='font-light text-gray-400 uppercase text-xs mb-2'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`} as={`/kontakty`} className="font-extralight">
									Контакты
								</Link>
							</li>
						</ul>
					</div>

					<div className='xs:mb-4'>
						<p className='font-light text-gray-400 uppercase text-xs mb-2'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90' />
							<a href='tel:8029' className='font-extralight'>
								+375 29 000-00-00
							</a>
						</p>
						<p className='font-extralight'>
							<MailOutlined className='mr-3' />
							....@yandex.by
						</p>
					</div>

					<div className='xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='font-light text-gray-400 uppercase text-xs mb-2'>
							Адрес
						</p>
						<p className='font-extralight'>
							200000, г.Минск, ул. Минская, 99A
						</p>
					</div>
					<div className='xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='font-light text-gray-400 uppercase text-xs mb-2'>
							График работы
						</p>
						<p className='font-extralight'>
							Пн-Вс 08:00 - 21:00
						</p>
						<p className='font-extralight'>
							Без выходных
						</p>
					</div>

					<div className='font-light xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='font-light text-gray-400 uppercase text-xs mb-2'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/betelgeuze_show/' target='_blank' >
								<Image src={instagram} width={25} alt='иконка инстаграма' />
							</a>
							<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`} target='_blank' >
								<Image src={telegram} width={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src={viber} width={25} alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>


				<div
					className='mt-6 border-t border-slate-500 pt-2'
				>
					<p className='text-white xs:text-xs xz:text-[10px] font-extralight' >
						Copyright © 2023 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 no-underline font-semibold'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</div>
		</footer >
	)
}


export default Footer
