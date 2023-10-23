import Image from "next/image";

export const metadata = {
	title: 'Шоу программа на корпоратив | Заказать Артистов',
	description: 'Закажите профессиональное Цыганское шоу для корпоратива и создайте незабываемый праздник с живой музыкой и захватывающими танцами.',
	alternates: {
	  canonical: 'http://localhost:3000/uslugi/shou-na-korporativ'
	}
 }
 

const ShouNaKorporativ = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<div className='container mx-auto'>

				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Шоу программа на корпоратив
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/uslugi/shou-na-korporativ/main1.webp' className="mx-auto" alt="Шоу программа на корпоратив" width={645} height={608} />
				</div>
				<div className='text-center uppercase mb-8 mt-10 text-[#c9a035] font-light text-2xl'>

					<Image src='/uslugi/cyganskij-ansambl/voice.svg' className="mx-auto" alt='Живой голос' width={50} height={50} />
					<p className="mx-2 mb-4">
						Живой голос
					</p>
					<Image src='/uslugi/cyganskij-ansambl/logoGold.svg' className="mx-auto" alt='Профессиональные артисты' width={55} height={55} />
					<p className="mx-2 mt-2 mb-6">
						Профессиональные артисты
					</p>
					<Image src='/uslugi/cyganskij-ansambl/scene.svg' className="mx-auto" alt='Большой сценический опыт' width={50} height={50} />
					<p className="mx-2 mt-2">
						Большой сценический опыт
					</p>
				</div>


			</div>
		</main>
	)
}

export default ShouNaKorporativ;