import FotoSection from "@/components/fotoSection/FotoSection";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";
import { QRCode } from "antd";
import Image from "next/image";

export const metadata = {
	title: 'Шоу программа на юбилей | Заказать Артистов',
	description: 'Закажите уникальное шоу программу на юбилей с участием артистов. Незабываемая атмосфера и впечатления для вашего особенного события.',
	alternates: {
		canonical: ''
	}
}


const ShouNaYubilej = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<div className='container mx-auto'>

				<section className="">
					<div className="text-center mb-4">
						<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

						<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
							Шоу программа на юбилей
						</h1>
					</div>
					<div className="w-full mt-10 mx-auto">
						<Image src='/uslugi/shou-programma-na-yubilej/main1.webp' className="mx-auto" alt="Шоу программа на юбилей" width={645} height={608} />
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
						Лучшее шоу на юбилей
					</h2>
					<p className='mt-6 text-gray-700 text-center'>
						Устроить незабываемый юбилей можно только с лучшим шоу! Мы предлагаем вам уникальные возможности с Цыганским или Испанским шоу, чтобы сделать ваше мероприятие неповторимым и незабываемым.
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
						Пригласите артистов на свой юбилей и сделайте этот день по-настоящему уникальным!
					</h3>

					<p className='mb-4'>
						Наши профессиональные артисты подарят вам незабываемое Цыганское шоу или Испанское шоу, наполнив ваше мероприятие страстью и атмосферой праздника.
					</p>

					<h4 className='uppercase text-lg mb-3'>
						Шоу Программа на Юбилей: Невероятные Впечатления Гарантированы!
					</h4>

					<p className='mb-6'>
						Мы предлагаем эксклюзивную шоу программу на юбилей, которая перенесет вас в мир ярких танцев, живой музыки и феерических выступлений.
					</p>

					<h5 className='font-semibold mb-4'>
						Закажите Артистов на Юбилей: Сделайте Ваше Мероприятие Особенным!
					</h5>
					<p className='mb-6'>
						Заказать артистов на юбилей легко и просто – доверьтесь профессионалам и сделайте этот день особенным!
					</p>

					<h5 className='font-semibold mb-4'>
						Неважно, где и как вы празднуете свой юбилей. Мы подстраиваемся под ваши пожелания!
					</h5>
					<p className='mb-6'>
						Независимо от того, проводится ли ваш юбилей в уютной обстановке или в большом зале, наше шоу адаптируется под любое место и создаст неповторимую атмосферу. Наши профессиональные артисты восхитят вас и ваших гостей, добавив непередаваемую энергию и яркие моменты в этот особенный день.
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
						<span className="text-2xl block">Программа для юбилея</span> "Цыганское Шоу"
					</h6>
					<ul className=''>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Встреча Гостей
							</p>
							<p className='text-gray-800'>
								Гости встречаются в атмосфере загадочности и таинственности.
							</p>
							<p className='text-gray-800'>
								Профессиональные цыганские музыканты создают живую музыку.
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
								Гости приглашаются присоединиться к танцам и научиться нескольким цыганским движениям.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Живая музыка
							</p>
							<p className='text-gray-800'>
								Профессиональные музыканты играют на традиционных цыганских инструментах.
							</p>
							<p className='text-gray-800'>
								Гости могут заказать песни и наслаждаться живыми выступлениями.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Веселые конкурсы
							</p>
							<p className='text-gray-800'>
								Организаторы проводят веселые конкурсы и игры, чтобы поддерживать атмосферу веселья.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Финальное представление
							</p>
							<p className='text-gray-800'>
								Шоу завершается захватывающим финальным представлением, в котором гости смогут насладиться захватывающими номерами.
							</p>
						</li>
					</ul>
				</article>
				<article className='mt-14 text-center'>
					<h6 className='font-semibold uppercase mb-8 text-xl'>
						<span className="text-2xl block">Программа</span> "Испанский праздник: Испанское Шоу"
					</h6>
					<p className=''>
						Празднование юбилея - это особенный момент в жизни, и для того чтобы этот день стал незабываемым, "Искусство Шоу Бетельгейз" представляет вам наше уникальное "Испанское шоу". Мы создали программу, которая погрузит вас и ваших гостей в мир страсти, романтики и азарта испанских традиций. Вот что вы можете ожидать от нашей программы на юбилей:
					</p>
					<ul className='mt-4'>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Волшебное Приветствие
							</p>
							<p className='text-gray-800'>
								Ваши гости будут встречены волшебной атмосферой испанской страсти и тепла. Мы создадим атмосферу, которая сразит вас с первого взгляда.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Живая Музыка и Танцы
							</p>
							<p className='text-gray-800'>
								Профессиональные испанские музыканты и танцоры представят вам яркие и душевные испанские мелодии и танцы. Вы почувствуете себя в сердце Испании.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Участие Гостей
							</p>
							<p className='text-gray-800'>
								Ваши гости не останутся пассивными наблюдателями. Мы приглашаем их присоединиться к танцам и научиться испанским движениям.
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
								Завершение в Испанском Стиле
							</p>
							<p className='text-gray-800'>
								Шоу завершается великолепным финальным номером, который оставит незабываемые впечатления и воспоминания о вашем юбилее.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Заключение
							</p>
							<p className='text-gray-800'>

								Программа "Испанское шоу" от "Искусство Шоу Бетельгейз" создана для того, чтобы ваш юбилей стал ярким и незабываемым событием. Наши профессиональные артисты и исполнители готовы удивить вас и ваших гостей, подарив незабываемые моменты страсти и радости испанской культуры. ¡Viva la fiesta! ¡Viva el amor! ¡Viva la vida!

							</p>
						</li>
					</ul>

					<p className='mt-16 font-semibold text-lg'>
						Приглашаем вас окунуться в мир страсти и волшебства с нашим "Цыганским шоу" или "Испанским шоу". Не упустите возможность создать незабываемые воспоминания и сделать ваше мероприятие по-настоящему уникальным! Свяжитесь с нами прямо сейчас и приготовьтесь к незабываемому празднику!
					</p>
				</article>
			</div>
		</main>
	)
}

export default ShouNaYubilej;