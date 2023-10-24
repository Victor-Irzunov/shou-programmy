import Image from "next/image";
import dynamic from 'next/dynamic';
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";

const FotoSection = dynamic(() => import('@/components/fotoSection/FotoSection'));
const VideoGallery = dynamic(() => import('@/components/videoGallery/VideoGallery'));

export const metadata = {
	title: 'Цыганский ансамбль на корпоратив в Минске и Беларуси',
	description: 'Закажите профессиональный Цыганский ансамбль для корпоративного мероприятия в Минске и по всей Беларуси. Живая музыка, танцы и незабываемая атмосфера.',
	alternates: {
		canonical: 'http://localhost:3000/uslugi/cyganskij-ansambl-na-korporativ'
	}
}



const CyganskijAnsamblNaKorporativPage = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<section className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Цыганский ансамбль на корпоратив
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/uslugi/cyganskij-ansambl/main3.webp' className="mx-auto" alt="Цыганский ансамбль на корпоратив" width={645} height={608} />
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
						Шоу для корпоратива с участием Цыганского ансамбля: Восточные Эмоции для Вашего Корпоратива
					</h2>

					<article className="text-center mt-6">
						<p className='mb-3 italic'>
							Ощутите настоящую страсть и дух востока на вашем корпоративе с участием Цыганского ансамбля! Закажите наше шоу и подарите своим сотрудникам незабываемый опыт, который они будут вспоминать долгие годы.
						</p>

						<h3 className='mt-2 mb-4 font-semibold'>
							Преимущества нашего Цыганского Шоу для Корпоратива:
						</h3>
						<ul className=''>
							<li className='mb-3'>
								<span className="font-light italic">
									Уникальность и Оригинальность:
								</span>
								Ваш корпоратив станет по-настоящему уникальным и оригинальным с Цыганским ансамблем. Это нечто невероятное, чего ваши сотрудники еще не видели.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Атмосфера Страсти и Эмоций:
								</span>
								Наши профессиональные артисты создадут атмосферу страсти, музыки и танцев, которая перенесет вас и ваших гостей в мир восточных чудес.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Интерактивные Элементы:
								</span>
								Ваши сотрудники не будут просто наблюдателями, они станут активными участниками шоу, участвуя в танцах и играх.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Вдохновляющее Финальное Шоу:
								</span>
								Мы завершим вечер динамичным финальным номером, который оставит всех вдохновленными и восторженными.
							</li>
							<li className='mb-3'>
								<span className="font-light italic">
									Отсутствие Рутины:
								</span>
								Забудьте о стандартных корпоративах. Наши Цыганские шоу добавят яркие краски в ваше мероприятие, и никому не будет скучно.
							</li>
						</ul>
					</article>

					<FotoSection path={'cyganskij-ansambl'} count={16} />


					<article className='mt-10'>

						<p className='text-center text-lg font-semibold'>
							Заказать Цыганский ансамбль для корпоратива - это вложение в восточное волшебство, которое подарит незабываемые моменты и украсит любое корпоративное мероприятие. Не упустите шанс удивить и порадовать ваших сотрудников. Сделайте ваш корпоратив неповторимым - сделайте его восточным!
						</p>

					</article>

					<VideoGallery videos={videosCyganskoe} />
				</div>

				<article className='mt-10 text-center text-gray-800 sd:px-5 sd:py-7 xz:px-0 xz:py-0 sd:shadow-lg xz:shadow-none'>
					<h5 className='font-bold mb-4 text-xl'>
						Программа для корпоратива с участием Цыганского ансамбля
					</h5>

					<p className='mt-2 italic font-light'>
						Организация корпоративного мероприятия - это не только рабочие задачи, но и возможность отпраздновать успехи и создать незабываемые воспоминания. Наша "Программа для корпоратива с участием Цыганского ансамбля" предоставляет уникальное решение, чтобы ваш корпоратив был чем-то особенным и волшебным.
					</p>

					<h6 className='mb-3 mt-6 font-semibold'>
						Сценарий Программы для Корпоратива:
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Грандиозное Открытие:
							</span>{' '}
							Ваш корпоратив начнется с яркого и грандиозного открытия, которое удивит и вдохновит всех гостей.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Звучание Востока:
							</span>{' '}
							Цыганский оркестр начнет играть живую музыку, наполняя воздух магией востока.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Захватывающие Танцы:
							</span>{' '}
							Профессиональные цыганские танцоры вплетут вечер в вихрь захватывающих танцев, подарив всем гостям страсть и радость.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Интерактивные Моменты:
							</span>{' '}
							Ваши сотрудники смогут участвовать в танцевальных номерах и играх, что создаст еще больше эмоций.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Цыганская Магия:
							</span>{' '}
							Наши артисты продемонстрируют цыганскую магию, что придаст вечеру загадочности и удивления.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Вдохновляющее Финале:
							</span>{' '}
							Великолепное завершение вечера с фееричным финальным номером, который оставит незабываемые впечатления.
						</li>
					</ul>


					<h6 className='font-semibold mb-4 text-lg'>
						Преимущества Программы для Корпоратива:
					</h6>
					<ul className=''>
						<li className='mb-3'>
							<span className="font-light italic">
								Уникальность:
							</span>{' '}
							Ваш корпоратив будет непохожим на все остальные, что придаст ему уникальности и ярких моментов.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Интерактивность:
							</span>{' '}
							Ваши сотрудники будут активными участниками программы, а не просто зрителями.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Ощущение Востока:
							</span>{' '}
							Все гости почувствуют дух востока и волшебство этой культуры.
						</li>
						<li className='mb-3'>
							<span className="font-light italic">
								Завершение в Стиле:
							</span>{' '}
							Вечер завершится в стиле настоящего Цыганского ансамбля, оставляя вас в восторге.
						</li>
					</ul>
				</article>
				<p className='mt-10 text-lg font-semibold text-center'>
						Заказать Цыганский ансамбль для корпоратива - это сделать ваше мероприятие ярким и незабываемым. Позвольте своим сотрудникам ощутить восточную магию и вдохновение. Дайте начало волшебству - заказывайте программу для корпоратива уже сегодня!
					</p>
			</section>
		</main >
	)
}

export default CyganskijAnsamblNaKorporativPage;