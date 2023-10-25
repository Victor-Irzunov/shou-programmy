import Image from "next/image";

export const metadata = {
	title: 'Контакты искусство шоу Бетельгейз',
	description: 'Свяжитесь с нами, чтобы заказать незабываемое искусство Цыганского и Испанского шоу для вашего мероприятия.',
	alternates: {
		canonical: ''
	}
}


const ContactPage = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<section className="container mx-auto">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Контакты
					</h1>

					<div className='mt-20 flex flex-col items-center justify-center'>
						<p className='uppercase font-light mb-2'>
							Телефоны
						</p>
						<div className='flex'>
							<Image src='/phone2.svg' alt='' width={25} height={25} />
							<a href='tel:80445992515' className='xz:text-xl sd:text-2xl mx-3'>
								+375 44 599-25-15
							</a>
							<Image src='/a1.svg' className='' alt='оператор А1' width={18} height={18} />
						</div>
						<div className='flex mt-4'>
							<Image src='/phone2.svg' alt='' width={25} height={25} />
							<a href='tel:80293159439' className='xz:text-xl sd:text-2xl mx-3'>
								+375 29 315-94-39
							</a>
							<Image src='/a1.svg' className='' alt='оператор МТС' width={18} height={18} />
						</div>
					</div>

					<div className='mt-10'>
						<p className='uppercase font-light mb-2'>
							Адрес
						</p>
						<p className='text-xl'>
							Минск, ул. Долгобродская 24
						</p>
					</div>

					<div className='mt-10'>
						<p className='uppercase font-light mb-2'>
							Режим работы
						</p>
						<p className='text-xl'>
							8:00 - 22:00
						</p>
						<p className='uppercase text-sm my-1'>
							Без выходных
						</p>
					</div>

					<div className='mt-20'>
						<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6950a0843de9b2e10952e210643d5cd5291d6b0767879e074ac891dc0e421a88&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
					</div>
				</div>



			</section>
		</main >
	)
}

export default ContactPage;