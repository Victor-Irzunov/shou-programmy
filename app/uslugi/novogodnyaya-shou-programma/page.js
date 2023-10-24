import FotoSection from "@/components/fotoSection/FotoSection";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";
import { QRCode } from "antd";
import Image from "next/image";

export const metadata = {
	title: 'Шоу программа на новый год | Заказать новогодний корпоратив',
	description: 'Устроить незабываемый новогодний корпоратив можно с нашими уникальными шоу программами. Закажите шоу и сделайте свой праздник по-настоящему волшебным!',
	alternates: {
		canonical: ''
	}
};


const ShouNaSvadbu = () => {
	return (
		<main className='sd:pt-24 xz:pt-24 pb-10 overflow-x-hidden'>
			<div className='container mx-auto'>

				<section className="">
					<div className="text-center mb-4">
						<Image src='/shapka.webp' alt='Новогодня шапка на корпоратив' width={100} height={100} className="mx-auto" />
						<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

						<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
							Шоу программа на новый год
						</h1>

					</div>
					<div className="w-full mt-10 mx-auto">
						<Image src='/uslugi/shou-programma-na-yubilej/main1.webp' className="mx-auto" alt="Шоу программа на новый год" width={645} height={608} />
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
					<div className="flex sd:justify-end xz:justify-center items-center sd:pr-6 xz:pr-0 sd:mt-20 xz:mt-12">
						<div className="">
							<Image src='/instagram.svg' className="" alt="сслыка для перехода на instagram" width={30} height={30} />
						</div>
						<div className="ml-4">
							<Image src='/youtube.svg' className="" alt="сслыка для перехода на youtube" width={30} height={30} />
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
					<h2 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]">
						Волшебное Шоу на новогодний корпоратив
					</h2>
					<p className="mt-6 text-gray-600 text-center">
						Сделайте ваш новогодний корпоратив по-настоящему волшебным с нашим шоу, включающим в себя "Цыганское" или "Испанское" выступление. Наши профессиональные артисты создадут непередаваемую атмосферу страсти и живой энергии, представляя захватывающие номера под аккомпанемент живой музыки. Доверьтесь нам, чтобы сделать этот корпоратив незабываемым для вас и ваших гостей, наполнив его волшебством и радостью.
					</p>


					<div className='flex justify-between mt-12 xz:flex-wrap sd:flex-nowrap'>

						<div className="sd:w-1/2 xz:w-full xz:mx-auto sd:mx-12 xz:mb-12 sd:mb-0 relative">
							<div className="relative overflow-hidden">

								<Image src='/main/foto-main.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />

								<div className="absolute text-[#c9a035] bottom-0 left-1/2 right-0 transform -translate-x-1/2 text-center bg-gradient-to-b from-black/0 to-black/80 pt-20 pb-8" style={{ width: '645px', margin: '0 auto' }}>

									<p className="uppercase sd:text-lg xz:text-sm xy:text-lg text-center">
										Развлекательные Шоу программы <br className="xz:block sd:hidden" /> с участием <span className="block font-semibold sd:text-4xl xz:text-xl xy:text-2xl mt-2">Цыганского ансамбля</span>
									</p>
									<p className=''>
										страсти Востока
									</p>
								</div>
							</div>
						</div>

						<div className="sd:w-1/2 xz:w-full  xz:mx-auto sd:mx-12  relative">
							<div className="relative overflow-hidden">

								<Image src='/main/foto-main2.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />
								<div className="absolute text-[#c9a035] bottom-0 left-1/2 right-0 transform -translate-x-1/2 text-center bg-gradient-to-b from-black/0 to-black/80 pt-20 pb-8" style={{ width: '645px', margin: '0 auto' }}>

									<p className="uppercase sd:text-lg xz:text-sm xy:text-lg text-center">
										Развлекательные Шоу программы <br className="xz:block sd:hidden" /> с участием <span className="block font-semibold sd:text-4xl xz:text-xl xy:text-2xl mt-2">Испанского ансамбля</span>
									</p>
									<p className=''>
										страсти Испании
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<article className='xz:mt-10 sd:mt-16 sd:px-10 xz:px-0 text-center'>
					<h3 className='font-semibold uppercase mb-5 xz:text-lg sd:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FC466B]  to-[#3F5EFB]'>
						Заказать артистов на новогодний корпоратив
					</h3>

					<p className='mb-4'>
						Заказать артистов на новогодний корпоратив - это отличное решение для создания неповторимой атмосферы в этот праздничный сезон. Ведь Новый год - время, когда каждый ожидает чего-то особенного, и ничто не может сравниться с увлекательной шоу программой. Наши профессиональные артисты способны преобразить ваш Новогодний корпоратив, создав магию и восхищение среди ваших гостей.
					</p>
					<p className='mb-4'>
						Заказывая артистов для вашего Новогоднего корпоратива, вы открываете двери в мир удивительных выступлений и развлечений. Наши артисты могут представить вам разнообразные шоу программы, включая Цыганское и Испанское шоу, которые принесут страсть, живую музыку и захватывающие танцы на ваше мероприятие. Это не просто выступления, это настоящее искусство, которое оживит ваш корпоратив и сделает его незабываемым для всех присутствующих.
					</p>
					<p className='mb-4'>
						Заказ артистов также обеспечит вам профессиональную реализацию вашей идеи и создание атмосферы волшебства и радости. Мы заботимся о каждой детали, чтобы ваш Новогодний корпоратив был идеальным. Наши артисты - это настоящие профессионалы, готовые удивить вас и ваших гостей своими выдающимися навыками.
					</p>
					<p className='mb-4'>
						Так что не упустите шанс сделать свой Новогодний корпоратив незабываемым с нашей помощью. Заказывайте артистов, и дарите себе и своим коллегам праздник, который будет запомнен надолго. Доверьтесь профессионалам, и позвольте себе насладиться моментами волшебства и радости в этот Новый год.
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
					<h6 className='font-semibold uppercase mb-8 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
						<span className="text-2xl block text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">Программа</span> "Ночь Магии и Страсти: Встречайте Новый Год с Цыганским Шоу"
					</h6>
					<ul className=''>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 1: Загадочная Интродукция
							</p>
							<p className='text-gray-800 mb-3'>
								Гости встречаются в украшенном в стиле восточного базара зале, где звучит мелодичная цыганская музыка.
							</p>
							<p className='text-gray-800'>
								Артисты в национальных костюмах встречают гостей и предсказывают им удачу в новом году.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 2: Шоу Навыков и Магии
							</p>
							<p className='text-gray-800 mb-3'>
								Цыганский ансамбль представляет удивительное Цыганское шоу с виртуозными музыкантами и танцорами.
							</p>
							<p className='text-gray-800 mb-3'>
								Живая музыка, исполненная на струнных инструментах, наполняет воздух мелодиями востока, а виртуозные танцы приносят страсть и энергию на праздник.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 3: Ужин под живую музыку
							</p>
							<p className='text-gray-800'>
								Гости наслаждаются изысканным ужином, цыганская группа продолжает играть живую музыку, создавая атмосферу невероятного праздника.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 4: Танцы и Веселье до Утра
							</p>
							<p className='text-gray-800'>
								После ужина гости приглашаются на танцевальный пол, где звучит драйвовая музыка и можно потанцевать под звездами.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 5: Завершение Вечера
							</p>
							<p className='text-gray-800 mb-2'>
								В конце вечера гости собираются в круг и вместе с артистами Цыганского ансамбля поют и танцуют.
							</p>
							<p className='text-gray-800'>
								Все собравшиеся получают талисманы и предсказания от гадалок в качестве памятных подарков.
							</p>
						</li>
					</ul>

					<p className='font-semibold'>
						Эта уникальная программа обещает вашим сотрудникам и гостям Новогоднего корпоратива незабываемый вечер, наполненный страстью, магией и радостью, который они будут вспоминать с восторгом.
					</p>
				</article>

				<article className='mt-16 text-center'>
					<h6 className='font-semibold uppercase mb-8 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
						<span className="text-2xl block text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">Программа</span> "Испанская Новогодняя Ночь"
					</h6>

					<ul className='mt-4'>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 1: Гостеприимство Испании
							</p>
							<p className='text-gray-800 mb-2'>
								Гости встречаются в прекрасно оформленном зале, напоминающем испанский бар вечеринки фламенко.
							</p>
							<p className='text-gray-800'>
								Профессиональные фламенко-танцоры и музыканты в национальных костюмах встречают гостей и создают атмосферу страсти и энергии.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 2: Огонь Фламенко
							</p>
							<p className='text-gray-800 mb-2'>
								Испанский ансамбль представляет удивительное Фламенко шоу с виртуозными танцорами, музыкантами и певцами.
							</p>
							<p className='text-gray-800'>
								Живая гитарная музыка и пламенные танцы приносят огонь и страсть в праздник, завладевая вниманием всех присутствующих.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 3: Танцы и Веселье
							</p>
							<p className='text-gray-800 mb-2'>
								После выступления гости приглашаются на танцевальную площадку, где испанская музыка создает веселую атмосферу для танцев.
							</p>
							<p className='text-gray-800'>
								Виртуозные фламенко-танцоры учат гостей элементам фламенко и вовлекают их в танцевальные баталии.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 4: Магия и Сюрпризы
							</p>
							<p className='text-gray-800 mb-2'>
								Ансамбль представляет удивительные сюрпризы и фокусы, чтобы подарить гостям незабываемые моменты и удивление.
							</p>
							<p className='text-gray-800'>
								Магические номера создают атмосферу волшебства и тайны.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2 text-rose-600'>
								Часть 5: Завершение Вечера
							</p>
							<p className='text-gray-800 mb-2'>
								В конце вечера все собираются в круг, и вместе с артистами исполняют фламенко-танец в огненном круге.
							</p>
							<p className='text-gray-800'>
								Гости получают памятные подарки, чтобы сохранить воспоминания об этой волшебной ночи.
							</p>
						</li>
						<li className='mb-5'>

							<p className='text-gray-800'>
								Эта уникальная программа обещает ваши сотрудники и гости Новогоднего корпоратива незабываемый вечер, наполненный страстью, магией и радостью, который они будут вспоминать с восторгом.
							</p>
						</li>
					</ul>

					<p className='mt-16 font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#EB3349]  to-[#F45C43]'>
					Создайте незабываемое праздничное мероприятие для вашей компании и закажите Новогодний корпоратив с участием Цыганского или Испанского шоу прямо сейчас! Позвольте магии и страсти испанских или цыганских артистов оживить ваш праздник. Наши профессиональные ансамбли гарантируют незабываемые выступления, которые поразят всех присутствующих. Не упустите шанс создать незабываемый Новогодний корпоратив и свяжитесь с нами уже сегодня!
					</p>
				</article>
			</div>
		</main>
	)
}

export default ShouNaSvadbu;