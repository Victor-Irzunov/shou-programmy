import Image from "next/image";
import dynamic from 'next/dynamic';
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";

const FotoSection = dynamic(() => import('@/components/fotoSection/FotoSection'));
const VideoGallery = dynamic(() => import('@/components/videoGallery/VideoGallery'));

export const metadata = {
	title: 'Цыганский ансамбль на свадьбу в Минске и Беларуси',
	description: 'Заказать цыганский ансамбль на свадебное мероприятие в Минске и по всей Беларуси. Профессиональные артисты, живая музыка и весёлые танцы для незабываемой свадьбы.',
	alternates: {
		canonical: 'http://localhost:3000/uslugi/cyganskij-ansambl-na-svadbu'
	}
}


const CyganskijAnsamblNaSvadbuPage = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<section className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Цыганский ансамбль на свадьбу
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/uslugi/cyganskij-ansambl/main2.webp' className="mx-auto" alt="Цыганский ансамбль на свадьбу" width={645} height={608} />
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
						Шоу программа для свадьбы с участием Цыганского ансамбля
					</h2>

					<article className="text-center mt-6">
						<p className='mb-3'>
							Представьте себе волшебный момент вашей свадьбы, где энергия страсти, музыки и танцев сливаются в незабываемой шоу программе. Если вы мечтаете о чем-то особенном, что добавит яркие краски и восточное очарование в ваше торжество, тогда наше "Шоу программа для свадьбы с участием Цыганского ансамбля" - идеальное решение.
						</p>
						<p className='mb-3'>
							Наши талантливые цыганские артисты создадут атмосферу настоящей восточной сказки. Ваша свадьба станет уникальной и незабываемой благодаря профессиональным выступлениям, живой музыке и захватывающим танцам.
						</p>
					</article>

					<FotoSection path={'cyganskij-ansambl'} count={16} />


					<article className='mt-10'>
						<h3 className='uppercase text-lg mb-4 font-semibold'>
							Шоу программа включает в себя:
						</h3>
						<ul className=''>
							<li className='mb-3'>
								<span className="font-semibold">
									Профессиональных Цыганских Артистов:
								</span>{' '}
								Наши артисты в великолепных костюмах придут на вашу свадьбу и создадут непередаваемую атмосферу восточной страсти и веселья.
							</li>
							<li className='mb-3'>
								<span className="font-semibold">
									Живую Музыку:
								</span>{' '}
								Оркестр Цыганского ансамбля исполнит душевные мелодии, которые затронут сердца всех гостей.
							</li>
							<li className='mb-3'>
								<span className="font-semibold">
									Захватывающие Танцы:
								</span>{' '}
								Профессиональные цыганские танцоры воспламенят вечер своими энергичными выступлениями.
							</li>
							<li className='mb-3'>
								<span className="font-semibold">
									Интерактивные Элементы:
								</span>{' '}
								Ваши гости смогут участвовать в играх, танцах и веселых развлечениях с артистами.
							</li>
							<li className='mb-3'>
								<span className="font-semibold">
									Финальное Шоу:
								</span>{' '}
								Завершите вечер динамичным финальным номером, который оставит вас вдохновленными и восхищенными.
							</li>
						</ul>
						<p className='mt-2'>
							Заказать Цыганский ансамбль на свадьбу - это выбор уникального развлечения, который привнесет неповторимую атмосферу в ваше торжество. Пусть ваша свадьба станет восточной сказкой, которую вы и ваши гости запомнят навсегда.
						</p>
						<p className='font-semibold mt-4 text-lg'>
							Не упустите возможность сделать вашу свадьбу особенной - свяжитесь с нами и заказывайте Цыганский ансамбль прямо сейчас!
						</p>
					</article>

					<VideoGallery videos={videosCyganskoe} />
				</div>

				<article className='mt-10 text-center text-gray-800 sd:px-5 sd:py-7 xz:px-0 xz:py-0 sd:shadow-lg xz:shadow-none'>
					<h5 className='font-bold mb-4 text-xl'>
						Программа для свадьбы с участием Цыганского ансамбля
					</h5>

					<h6 className='mb-3 font-semibold'>
						Часть 1: Приветствие и Начало Праздника
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Горячее Приветствие:
							</span>
							Гости встречаются с профессиональными артистами Цыганского ансамбля в национальных костюмах, что придает особую атмосферу восточной культуры.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Живая Музыка:
							</span>
							Оркестр Цыганского ансамбля начинает вечер с живой музыки, играя душевные мелодии и создавая умиротворяющую атмосферу.
						</li>
					</ul>


					<h6 className='font-semibold mb-4 text-lg'>
						Часть 2: Танцевальное Шоу
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Цыганские Танцы:
							</span>{' '}
							Профессиональные цыганские танцоры воспламеняют вечер своими захватывающими танцевальными номерами, включая вихрь страсти и виртуозные движения.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Интерактивные Танцы:
							</span>{' '}
							Гости приглашаются к участию в танцевальных номерах под руководством артистов. Это создает веселую и интерактивную атмосферу.
						</li>
					</ul>

					<h6 className='font-semibold mb-4 text-lg'>
						Часть 3: Финальное Шоу и Завершение Вечера
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Цыганский Оркестр:
							</span>{' '}
							Оркестр поднимает атмосферу, играя более энергичную музыку, приглашая гостей танцевать и веселиться.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Финальное Шоу:
							</span>{' '}
							Завершите вечер динамичным финальным номером, который оставит вас вдохновленными и восхищенными.
						</li>
					</ul>

					<h6 className='font-semibold mb-4 text-lg'>
						Часть 4: Развлекательные Элементы
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Арт-Мастер-классы:
							</span>{' '}
							Гости могут участвовать в создании традиционных цыганских украшений или живописи.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Интерактивные Игры:
							</span>{' '}
							Артисты проводят игры и конкурсы с гостями, чтобы добавить веселья и разнообразия.
						</li>
					</ul>

					<h6 className='font-semibold mb-4 text-lg'>
						Завершение Вечера
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Завершение в стиле Цыганского Ансамбля:
							</span>{' '}
							Шоу заканчивается на высокой ноте с благодарностями и приветствиями от артистов.
						</li>
					</ul>

					<p className='mt-4'>
						Это уникальное и восхитительное Цыганское шоу принесет яркие краски и восточное очарование на вашу свадьбу, оставив в воспоминаниях яркие краски страсти и восточной культуры.
					</p>
				</article>

				<article className='mt-11 text-justify'>
					<h6 className='font-bold mb-4 text-center'>
						Заказать Цыганский ансамбль
					</h6>
					<p className='mb-4'>
						Заказать цыганское шоу на вашей свадьбе - это больше, чем просто развлечение. Это момент, который запомнится навсегда, момент страсти, веселья и невероятных впечатлений. Давайте вместе создадим памятное событие, которое будет жить в ваших сердцах!
					</p>
					<p className='mb-4'>
						Представьте себе, как вы и ваши гости окажетесь в восточной сказке, где живая музыка и горячие танцы захватят вас с головой. Вы будете чувствовать страсть и волшебство каждого момента.
					</p>
					<p className='mb-4'>
						И самое главное, это не будет скучно! Мы пригласим вас к танцам, взорвем вечер светлыми эмоциями и завершим вечер в стиле настоящего Цыганского ансамбля. Ведь свадьба - это особенный день, который заслуживает особенного развлечения!
					</p>

					<p className='font-lg font-bold mt-5'>
						Не упустите шанс сделать свою свадьбу незабываемой и оставить невероятные воспоминания, которые будут с вами всю жизнь. Закажите цыганское шоу для свадьбы прямо сейчас, и дайте начало невероятным танцам и эмоциям, которые запомнятся на долго!
					</p>
				</article>

			</section>
		</main >
	)
}

export default CyganskijAnsamblNaSvadbuPage;