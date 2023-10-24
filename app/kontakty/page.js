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
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden min-h-screen'>
			<section className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Контакты
					</h1>
				</div>



			</section>
		</main >
	)
}

export default ContactPage;