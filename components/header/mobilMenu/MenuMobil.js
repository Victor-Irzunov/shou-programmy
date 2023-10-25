// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
import Image from 'next/image'
// import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }

	return (
		<div className='h-full flex flex-col justify-between'>
			<nav className='pt-10 pl-6'>
				<ul className='h-full uppercase text-lg cursor-pointer'>
					<li className='mb-5'>
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
							as='/' className=""
							onClick={onClose}
						>
							Главная
						</Link>
					</li>
					{/* <Divider style={{ marginTop: '8px', marginBottom: '8px' }} /> */}

					<li className='mb-5'>
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi`}
							as='/uslugi' className=""
							onClick={onClose}
						>
							Услуги
						</Link>
					</li>
					{/* <Divider style={{ marginTop: '8px', marginBottom: '8px' }} /> */}

					<li className='mb-5'>
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
							as='/kontakty' className=""
							onClick={onClose}
						>
							Контакты
						</Link>
					</li>
					{/* <Divider style={{ marginTop: '8px', marginBottom: '8px' }} /> */}
				</ul>
			</nav>

			<div className='pl-6'>
				<div className='flex'>
					<a href='tel:80445992515' className='text-lg'>
						+375 44 599-25-15
					</a>
					<Image src='/a1.svg' className='ml-2' alt='оператор А1' width={18} height={18} />
				</div>
				<div className='flex mt-5'>
					<a href='tel:80293159439' className='text-lg'>
						+375 29 315-94-39
					</a>
					<Image src='/mts.svg' className='ml-2' alt='оператор МТС' width={48} height={48} />
				</div>
			</div>

			<div className=''>
				<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />
			</div>
		</div>
	)
}
