import Image from "next/image";
import dynamic from 'next/dynamic';
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";

const FotoSection = dynamic(() => import('@/components/fotoSection/FotoSection'));
const VideoGallery = dynamic(() => import('@/components/videoGallery/VideoGallery'));

export const metadata = {
	title: 'Заказать цыганский ансамбль в Минске и Беларуси',
	description: 'Шоу программы с участием цыганского ансамбля для различных мероприятий в Минске и по всей Беларуси. Профессиональные артисты, живая музыка и танцы.',
	alternates: {
	  canonical: 'http://localhost:3000/uslugi/cyganskij-ansambl'
	}
 }
 

const CyganskijAnsamblPage = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<section className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Цыганский ансамбль
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/uslugi/cyganskij-ansambl/main.webp' className="mx-auto" alt="Цыганский ансамбль" width={645} height={608} />
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
						Шоу программа с участием Цыганского ансамбля
					</h2>

					<article className="text-center mt-6">
						<p className='mb-3'>
							Шоу программа с участием цыганского ансамбля - это уникальное событие, которое погружает зрителей в мир страстей, музыки и танцев цыган. Цыганский ансамбль, с его богатым культурным наследием, способен создать неповторимую атмосферу праздника и восторга.
						</p>
						<p className='mb-3'>
							Заказать цыганское шоу программу означает пригласить в свое мероприятие настоящих артистов, передающих душу и страсть цыганской музыки. Их мастерство владения инструментами, виртуозные выступления и непередаваемая харизма цыган погрузят ваше мероприятие в атмосферу восторга.
						</p>
					</article>

					<FotoSection path={'cyganskij-ansambl'} />


					<article className='mt-10'>
						<p className='mb-3'>
							Цыганская культура богата национальными традициями и обычаями, которые артисты цыганского ансамбля умело вплетают в свои выступления. Они представляют настоящее искусство в исполнении музыки, песен и танцев, передавая зрителям частичку своей страсти и свободы.
						</p>
						<p className='mb-3'>
							Шоу программа с участием цыганского ансамбля подарит вашему мероприятию неповторимый колорит и эмоции. Она может включать в себя яркие национальные костюмы, восхитительные танцы под живую музыку, и даже возможность для гостей активно участвовать в выступлениях.
						</p>
						<p className='font-semibold'>
							Не упустите шанс проникнуться магией цыганской культуры, заказав цыганский ансамбль для вашего следующего мероприятия. Это будет незабываемый опыт, который останется в памяти вашей аудитории надолго.
						</p>
					</article>

					<VideoGallery videos={videosCyganskoe} />
				</div>

				<article className='mt-10 text-center text-gray-800 sd:px-5 sd:py-7 xz:px-0 xz:py-0 sd:shadow-lg xz:shadow-none'>
					<h5 className='font-bold mb-4 text-xl'>
						Вечер Цыганской Культуры: Незабываемое Шоу с Участием Цыганского Ансамбля
					</h5>
					<p className='mb-6'>
						Добро пожаловать на захватывающее шоу Цыганского Ансамбля, где искусство, музыка и танцы сливаются в потрясающем симбиозе, чтобы создать незабываемый опыт для вашего мероприятия. Наши талантливые артисты подарят вам ночь, наполненную страстью, красками и восточным очарованием.
					</p>
					<h6 className='font-semibold mb-4 text-lg'>
						Программа мероприятия включает в себя:
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								1. Горячее Приветствие:
							</span>{' '}
							Вас встретят наши артисты в национальных костюмах, чтобы внести яркие краски в вашу встречу гостей.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								2. Живая Музыка:
							</span>{' '}
							Оркестр Цыганского Ансамбля исполнит душевные мелодии, которые проникают в сердце каждого слушателя. Гитара, скрипка и другие инструменты создадут атмосферу настоящей Цыганской музыки.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								3. Танцевальное Шоу:
							</span>{' '}
							Профессиональные танцоры представят вам увлекательные танцевальные номера в национальных костюмах. Энергия и страсть цыганских танцев завоюют ваше внимание.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								4. Интерактивные Элементы:
							</span>{' '}
							Участвуйте в играх, танцах и веселых развлечениях с артистами Цыганского Ансамбля.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								5. Финальное Шоу:
							</span>{' '}
							Завершите вечер динамичным финальным номером, который оставит вас вдохновленными и восхищенными.
						</li>
					</ul>

					<p className='mt-5'>
						Цыганское Шоу - это возможность погрузиться в уникальную культуру, испытать ее волшебство и подарить себе и вашим гостям незабываемые впечатления.
					</p>

					<h6 className='mt-5 uppercase mb-4'>
						Организация мероприятия:
					</h6>
					<p className=''>
						Для заказа Цыганского Ансамбля и создания незабываемого мероприятия, пожалуйста, свяжитесь с нами по телефону: <a href="tel:80290000000" className="font-semibold block text-lg">
							8 029 000-00-00
						</a>
					</p>
					<p className='font-bold text-lg mt-7'>
						Позвольте Цыганскому Ансамблю принести в ваше мероприятие страсть, магию и неповторимую атмосферу востока. Добро пожаловать в удивительное путешествие в мир цыганской культуры!
					</p>
				</article>
			</section>
		</main >
	)
}

export default CyganskijAnsamblPage;