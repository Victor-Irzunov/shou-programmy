import Image from "next/image";
import dynamic from 'next/dynamic';
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";

const FotoSection = dynamic(() => import('@/components/fotoSection/FotoSection'));
const VideoGallery = dynamic(() => import('@/components/videoGallery/VideoGallery'));

export const metadata = {
	title: 'Цыганский ансамбль на юбилей в Минске и Беларуси',
	description: '',
	alternates: {
		canonical: 'http://localhost:3000/uslugi/cyganskij-ansambl-na-yubilej'
	}
}



const CyganskijAnsamblNaYubilejPage = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<section className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Цыганский ансамбль на юбилей
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/uslugi/cyganskij-ansambl/main4.webp' className="mx-auto" alt="Цыганский ансамбль на корпоратив" width={645} height={608} />
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

				<div className="mt-16 text-center">
					<h2 className='uppercase sd:text-4xl xz:text-3xl'>
						Почему замечательно заказать Шоу для юбилея с участием Цыганского ансамбля? Волшебство на Вашем Юбилее!
					</h2>

					<article className="text-center mt-6">
						<p className='mb-3 italic'>
							Юбилей - это особенное событие, которое требует особенного развлечения. Что может быть более волшебным, чем "Шоу для юбилея с участием Цыганского ансамбля"? Отметьте этот важный момент с яркостью, страстью и эмоциями!
						</p>

						<p className='mt-2 mb-4 font-semibold'>
							Почему это так особенно:
						</p>
						<ul className=''>
							<li className='mb-3'>
								<span className="font-light italic">
									Атмосфера Востока:
								</span>{' '}
								Цыганский ансамбль принесет атмосферу восточной сказки на ваш юбилей. Гости будут окружены магией и загадочностью востока.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Живая Музыка и Танцы:
								</span>{' '}
								Оркестр Цыганского ансамбля исполнит живую музыку, а артисты покажут захватывающие танцы, что добавит страсти в ваш праздник.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Профессиональные Артисты:
								</span>{' '}
								Наши артисты - это профессионалы в искусстве цыганских выступлений. Их мастерство поразит всех гостей.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Интерактивные Элементы:
								</span>{' '}
								Ваши гости смогут участвовать в танцевальных номерах и интерактивных играх, что придаст вечеру веселую атмосферу.
							</li>
						</ul>
					</article>

					<FotoSection path={'cyganskij-ansambl'} />


					<article className='mt-10'>

						<h3 className='font-semibold text-lg mb-4 mt-4'>
							Преимущества Шоу для юбилея:
						</h3>

						<ul className=''>
							<li className='mb-3'>
								<span className="font-light italic">
									Неповторимость:
								</span>{' '}
								Ваш юбилей будет уникальным и незабываемым, чем-то, чего не испытывают каждый день.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Яркие Эмоции:
								</span>{' '}
								Гости будут полны эмоций и восхищения, а вечер останется в их памяти навсегда.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Ощущение Праздника:
								</span>{' '}
								Вечер будет наполнен праздничным настроением, а Цыганский ансамбль добавит ярких красок.
							</li>
						</ul>
						<p className='font-semibold text-lg mt-8'>
							Заказать Цыганский ансамбль на юбилей - это сделать ваш праздник незабываемым и удивительным. Волшебство, страсть и восточная магия ожидают вас и ваших гостей. Закажите шоу для юбилея и дарите незабываемые моменты!
						</p>
					</article>

					<VideoGallery videos={videosCyganskoe} />
				</div>

				<article className='mt-10 text-center text-gray-800 sd:px-5 sd:py-7 xz:px-0 xz:py-0 sd:shadow-lg xz:shadow-none'>
					<h5 className='font-bold mb-4 text-xl'>
						Программа для юбилея с участием Цыганского ансамбля
					</h5>

					<p className='mt-2 italic font-light'>
						Юбилей - это момент, когда каждый мгновение ценно, и нет лучшего способа отметить его, чем с участием Цыганского ансамбля. Этот день будет запоминающимся и ярким, полным страсти и восточной атмосферы.
					</p>

					<h6 className='mb-3 mt-6 font-semibold'>
						Сценарий Программы для Юбилея:
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Встреча Гостей:
							</span>{' '}
							Гости встречаются с профессиональными артистами Цыганского ансамбля, что придаст вечеру особый стиль и атмосферу.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Живая Музыка:
							</span>{' '}
							Оркестр Цыганского ансамбля начинает вечер с живой музыки, играя мелодии, наполняющие воздух страстью.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Цыганские Танцы:
							</span>{' '}
							Профессиональные цыганские танцоры показывают захватывающие танцевальные номера, что придаст вечеру дух страсти и востока.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Интерактивные Танцы:
							</span>{' '}
							Гости приглашаются к участию в танцах, создавая веселую и интерактивную атмосферу.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Цыганская Магия:
							</span>{' '}
							Артисты Цыганского ансамбля демонстрируют цыганскую магию, что добавляет загадочности и удивления.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Финальное Шоу:
							</span>{' '}
							Завершите вечер динамичным финальным номером, который поднимет всех на ноги.
						</li>
					</ul>


					<h6 className='font-semibold mb-4 text-lg'>
						В заключение
					</h6>
					<p className='mt-4 mb-4'>
						Этот день приходит только один раз в жизни - юбилей, особенный праздник, когда можно насладиться моментом и создать незабываемые воспоминания. Закажите Программу для юбилея с участием Цыганского ансамбля и сделайте этот день по-настоящему особенным!
					</p>
					<p className='mb-4'>
						Вне зависимости от возраста, все гости будут танцевать под звуки живой музыки и под ритмические танцы. Этот вечер будет наполнен весельем, радостью и драйвом. Никто не останется равнодушным к страсти и восточной атмосфере, которую принесет Цыганский ансамбль.
					</p>
				</article>
				<p className='mt-10 text-lg font-semibold text-center'>
					Не упустите шанс сделать свой юбилей незабываемым и создать волшебные моменты, которые будут с вами всю жизнь. Закажите Программу для юбилея прямо сейчас, и дайте начало невероятному празднику, который запомнится навсегда!
				</p>
			</section>
		</main >
	)
}

export default CyganskijAnsamblNaYubilejPage;