// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
// import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }

	return (
		<div className='h-full'>
			<nav className='h-full pt-10'>
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
		</div>
	)
}
