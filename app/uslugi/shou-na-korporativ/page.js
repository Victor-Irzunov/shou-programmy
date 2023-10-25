import FotoSection from "@/components/fotoSection/FotoSection";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";
import { QRCode } from "antd";
import Image from "next/image";

export const metadata = {
	title: 'Шоу программа на корпоратив | Заказать Артистов',
	description: 'Закажите профессиональное Цыганское или Испанское шоу для корпоратива и создайте незабываемый праздник с живой музыкой и захватывающими танцами.',
	alternates: {
		canonical: 'http://localhost:3000/uslugi/shou-na-korporativ'
	}
}

const ShouNaKorporativ = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<div className='container mx-auto'>
				<section>
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

					<div className='text-center mt-16'>
						<a href="tel:80445992515">
							<button
								className='bg-[#c9a035] px-12 py-2 text-white uppercase hover:transform hover:scale-110 transition-transform'
							>
								Позвонить
							</button>
						</a>
					</div>

					<div className="flex sd:justify-end xz:justify-center items-center sd:pr-6 xz:pr-0 sd:mt-20 xz:mt-12">
						<div className="">
							<a href='https://www.instagram.com/betelgeuze_show/' target='_blank' className="mb-4">
								<Image src='/instagram.svg' className="" alt="сслыка для перехода на instagram" width={30} height={30} />
							</a>
						</div>
						<div className="ml-4">
							<a href="https://www.youtube.com/@biza1986" target='_blank'>
								<Image src='/youtube.svg' className="" alt="сслыка для перехода на youtube" width={30} height={30} />
							</a>
						</div>
						<div className="w-14 ml-4">
							<QRCode
								errorLevel="H"
								size='50'
								value="https://ant.design/"
							/>
						</div>
						<div className="ml-4">
							<Image src='/kod.webp' alt="штрих код организатор" width={60} height={60} />
						</div>
						<div className="ml-4">
							<Image src='/kvitki.svg' alt="квитки" width={100} height={100} />
						</div>
					</div>
				</section>

				<section className="mt-16 min-h-screen">
					<h2 className='uppercase xz:text-xl sd:text-3xl text-center'>
						Лучшее шоу на корпоратив
					</h2>
					<p className='mt-6 text-gray-700 text-center'>
						Откройте мир незабываемых впечатлений с лучшими шоу на корпоратив. Мы предлагаем уникальные и захватывающие программы, включая Цыганское шоу, которое оживляет восточную страсть, и Испанское шоу, приносящее атмосферу праздника Испании. Организуйте незабываемый корпоратив с нами!
					</p>

					<div className='flex justify-between mt-12 xz:flex-wrap sd:flex-nowrap'>

						<div className="sd:w-1/2 xz:w-full xz:mx-auto sd:mx-12 xz:mb-12 sd:mb-0 relative">
							<div className="relative overflow-hidden">

								<Image src='/main/foto-main.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />

								<div className="absolute text-white bottom-0 left-1/2 right-0 transform -translate-x-1/2 text-center bg-gradient-to-b from-red-600/0 to-red-600/80 pt-10 pb-8" style={{ width: '645px', margin: '0 auto' }}>

									<p className="uppercase sd:text-lg xz:text-sm xy:text-lg text-center">
										Развлекательные Шоу программы <br className="xz:block sd:hidden" /> с участием <span className="block font-semibold sd:text-4xl xz:text-xl xy:text-2xl mt-2">Цыганского ансамбля</span>
									</p>
									<p className=''>
										восточная страсть
									</p>
								</div>
							</div>
						</div>

						<div className="sd:w-1/2 xz:w-full  xz:mx-auto sd:mx-12  relative">
							<div className="relative overflow-hidden">

								<Image src='/main/foto-main2.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />
								<div className="absolute text-white bottom-0 left-1/2 right-0 transform -translate-x-1/2 text-center bg-gradient-to-b from-red-600/0 to-red-600/80  pt-10 pb-8" style={{ width: '645px', margin: '0 auto' }}>

									<p className="uppercase sd:text-lg xz:text-sm xy:text-lg text-center">
										Развлекательные Шоу программы <br className="xz:block sd:hidden" /> с участием <span className="block font-semibold sd:text-4xl xz:text-xl xy:text-2xl mt-2">Испанского ансамбля</span>
									</p>
									<p className=''>
										праздник Испании
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<article className='xz:mt-10 sd:mt-16 sd:px-10 xz:px-0 text-center'>
					<h3 className='font-semibold mb-5 text-lg'>
						Артисты на корпоратив: Уникальное Шоу для Вашего Особенного Мероприятия
					</h3>

					<p className='mb-4'>
						Корпоративные мероприятия - это не просто сбор сотрудников в одном месте, это возможность создать неповторимую атмосферу и оставить яркие воспоминания. Одним из ключевых элементов, который делает корпоратив особенным, являются артисты и шоу. Мы предлагаем вам уникальное Цыганское и Испанское шоу для корпоратива, которые придадут вашему мероприятию неповторимый характер и незабываемую атмосферу.
					</p>

					<h4 className='uppercase text-lg mb-3'>
						Шоу на корпоратив: Почему это важно?
					</h4>

					<p className='mb-6'>
						Корпоративы - это отличный способ укрепить командный дух, показать внимание к своим сотрудникам и отпраздновать достижения компании. Однако для того чтобы корпоратив был запоминающимся и веселым, необходимо создать яркую атмосферу. Шоу и артисты - это именно то, что может добавить вечеру неповторимости и радости.
					</p>

					<h5 className='font-semibold mb-4'>
						Заказ Артистов на корпоратив: Ваших гостей ждет незабываемое впечатление
					</h5>
					<p className=''>
						Заказав Цыганское или Испанское шоу для своего корпоратива, вы дарите своим гостям незабываемые впечатления и вечер в стиле. Эти яркие и страстные выступления останутся в их памяти надолго, и они будут вспоминаться с улыбкой.
					</p>
				</article>

				<div className='mt-20 text-center'>
					<h5 className='uppercase'>
						Фото Шоу программы Цыганского ансамбля
					</h5>
					<FotoSection path={'cyganskij-ansambl'} count={16} />
				</div>
				<div className='mt-10 text-center'>
					<h5 className='uppercase'>
						Фото Шоу программы Испанского ансамбля
					</h5>
					<FotoSection path={'ispanskij-ansambl'} count={34} />
				</div>

				<div className='text-center'>
					<VideoGallery videos={videosCyganskoe} title='Видео: Шоу программы на мероприятиях' />
				</div>

				<article className='mt-16 text-center'>
					<h6 className='font-semibold uppercase mb-8 text-xl'>
						<span className="text-2xl block">Программа</span> "Восточная Страсть: Цыганское Шоу"
					</h6>
					<ul className=''>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Встреча гостей
							</p>
							<p className='text-gray-800'>
								Гости встречаются под звуки живой музыки, исполняемой ансамблем.
							</p>
							<p className='text-gray-800'>
								Цыганская атмосфера создает волнение и интерес.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Цыганские танцы
							</p>
							<p className='text-gray-800'>
								Профессиональные танцоры и танцовщицы представляют живописные и страстные цыганские танцы.
							</p>
							<p className='text-gray-800'>
								Гости приглашаются присоединиться к танцам и почувствовать атмосферу восточной страсти.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Живая музыка
							</p>
							<p className='text-gray-800'>
								Живая музыка ансамбля сопровождает мероприятие, создавая уникальную атмосферу.
							</p>
							<p className='text-gray-800'>
								Гости могут заказать песни по своему выбору и наслаждаться живыми выступлениями артистов.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Веселые конкурсы
							</p>
							<p className='text-gray-800'>
								Организаторы проводят веселые конкурсы и игры для гостей, чтобы поддерживать атмосферу веселья.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Финальное представление
							</p>
							<p className='text-gray-800'>
								Шоу завершается великолепным финальным представлением с яркими костюмами и захватывающими номерами.
							</p>
						</li>
					</ul>
				</article>
				<article className='mt-14 text-center'>
					<h6 className='font-semibold uppercase mb-8 text-xl'>
						<span className="text-2xl block">Программа</span> "Испанская Фиеста: Испанское Шоу"
					</h6>
					<ul className=''>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Встреча гостей
							</p>
							<p className='text-gray-800'>
								Гости встречаются в атмосфере настоящей испанской фиесты
							</p>
							<p className='text-gray-800'>
								Звуки фламенко гитары создают уникальное настроение.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Фламенко танцы
							</p>
							<p className='text-gray-800'>
								Профессиональные фламенко-танцовщицы и танцоры исполняют эмоциональные фламенко танцы.
							</p>
							<p className='text-gray-800'>
								Гости приглашаются присоединиться и научиться испанским танцам.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Веселые конкурсы
							</p>
							<p className='text-gray-800'>
								Организаторы проводят веселые конкурсы, игры и розыгрыши, чтобы поддерживать атмосферу веселья.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Живая музыка
							</p>
							<p className='text-gray-800'>
								Живая музыка с испанскими инструментами создает атмосферу праздника.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Фееричное завершение
							</p>
							<p className='text-gray-800'>
								Шоу завершается феерическим финальным номером с огненными элементами и вихрями платьев.
							</p>
						</li>
					</ul>

					<p className='mt-16 font-semibold text-lg'>
						Это всего лишь общая идея, и программа для корпоратива может быть адаптирована под ваши конкретные потребности и пожелания. Независимо от того, выберете ли вы Цыганское или Испанское шоу, такое мероприятие обещает стать незабываемым и оставить светлые воспоминания у всех участников.
					</p>
				</article>
			</div>
		</main>
	)
}

export default ShouNaKorporativ;