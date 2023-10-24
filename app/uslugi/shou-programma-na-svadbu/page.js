import FotoSection from "@/components/fotoSection/FotoSection";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import { videosCyganskoe } from "@/constants/video/VideoCyganskijConst";
import { QRCode } from "antd";
import Image from "next/image";

export const metadata = {
	title: 'Шоу программа на свадьбу | Заказать Артистов | Свадебное шоу',
	description: 'Украсьте свадьбу незабываемыми выступлениями и шоу программой от профессиональных артистов. Закажите свадебное шоу и сделайте вашу свадьбу по-настоящему яркой и незабываемой!',
	alternates: {
		canonical: ''
	}
};

const ShouNaSvadbu = () => {
	return (
		<main className='sd:pt-36 xz:pt-24 pb-10 overflow-x-hidden'>
			<div className='container mx-auto'>

				<section className="">
					<div className="text-center mb-4">
						<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

						<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
							Шоу программа на свадьбу
						</h1>
					</div>
					<div className="w-full mt-10 mx-auto">
						<Image src='/uslugi/shou-programma-na-yubilej/main1.webp' className="mx-auto" alt="Шоу программа на свадьбу" width={645} height={608} />
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
					<h2 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center font-bold text-[#c9a035]">
						Незабываемое Шоу на Свадьбу
					</h2>
					<p className="mt-6 text-gray-600 text-center">
						Ваша свадьба - это один из самых важных и запоминающихся моментов в вашей жизни, и мы готовы превратить его в невероятное приключение! Наши Цыганское или Испанское шоу - это не просто выступления, это магия, которая наполняет вечер страстью, живой музыкой и захватывающими танцами. Доверьтесь профессионалам и создайте свадебное шоу, о котором ваши гости будут вспоминать с восхищением и восторгом!
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
					<h3 className='font-semibold mb-5 text-lg'>
						Закажите артистов на свою свадьбу и сделайте этот день по-настоящему уникальным!
					</h3>

					<p className='mb-4'>
						Ваша свадьба - это не просто событие, это момент, который будет запечатлен в вашей памяти навсегда. Этот день олицетворяет вашу любовь, вашу уникальность, и поэтому он заслуживает особого внимания и волшебства. Чтобы сделать свадьбу по-настоящему уникальной и незабываемой, мы предлагаем вам заказать артистов с Цыганским или Испанским шоу, которые сделают этот день по-настоящему волшебным!
					</p>

					<h4 className='uppercase text-lg mb-3'>
						Живая Музыка
					</h4>

					<p className='mb-6'>
						Ничто не создает такую атмосферу, как живая музыка. Профессиональные музыканты могут исполнить ваши любимые песни, создавая неповторимое звучание, которое наполняет воздух волшебством и радостью.
					</p>

					<h4 className='uppercase text-lg mb-3'>
						Тематические Шоу
					</h4>
					<p className='mb-6'>
						Хотите, чтобы ваша свадьба была особенной? Мы предлагаем тематические шоу, которые создадут атмосферу загадки, романтики или веселья, в зависимости от ваших пожеланий.
					</p>

					<h4 className='uppercase text-lg mb-3'>
						Интерактивное Взаимодействие
					</h4>
					<p className='mb-6'>
						Артисты могут взаимодействовать с вашими гостями, приглашая их присоединиться к танцам или играм. Это добавит дополнительное веселье и радость к вашему празднику.
					</p>
					<h4 className='uppercase text-lg mb-3'>
						Незабываемые Моменты
					</h4>
					<p className=''>
						Заказ артистов - это способ создать незабываемые моменты, которые вы будете вспоминать с улыбкой на лице. Это моменты волшебства, когда ваша свадьба становится чем-то уникальным и неповторимым.
					</p>

					<p className='font-bold text-lg mt-7'>
						Ваша свадьба - это ваша сказка, и артисты помогут вам сделать каждую страницу этой сказки невероятно красочной и яркой. Закажите наших артистов с Цыганским или Испанским шоу на свою свадьбу, и дайте этому дню шанс стать по-настоящему уникальным и волшебным!
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
						<span className="text-2xl block">Программа</span> "Цыганское Шоу: Магия и Страсть на Вашей Свадьбе"
					</h6>
					<ul className=''>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Горячее Приветствие
							</p>
							<p className='text-gray-800'>
								Начнем свадебное торжество с яркого и чувственного приветствия. Наши артисты в цыганских костюмах поразят ваших гостей своей красотой и энергией.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Музыкальное Очарование
							</p>
							<p className='text-gray-800'>
								Живая цыганская музыка заполнит воздух восторженными звуками скрипки, гитары и барабанов. Гости будут в восторге от увлекательных мелодий, которые будут звучать на протяжении всей свадьбы.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Танцевальное Представление
							</p>
							<p className='text-gray-800'>
								Наши цыганские артисты представят вам захватывающие танцевальные номера, в которых каждый движется с бурей страсти и эмоций. Их живые выступления принесут вечеру непередаваемую энергию.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Участие Гостей
							</p>
							<p className='text-gray-800'>
								Мы приглашаем ваших гостей присоединиться к цыганскому шоу. Давайте вместе танцевать, петь и создавать моменты, которые будут жить в вашей памяти навсегда.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Финальное Представление
							</p>
							<p className='text-gray-800'>
								Шоу завершается великолепным финальным представлением, которое принесет море эмоций и аплодисментов. Это момент, который навсегда останется в вашем сердце и памяти.
							</p>
						</li>
					</ul>

					<p className='font-semibold'>
						Ваша свадьба - это особенный день, и наше Цыганское Шоу призвано сделать его невероятно красочным и незабываемым. Доверьтесь нам, и мы создадим атмосферу, в которой страсть и магия будут сливаться воедино, чтобы сделать этот день неповторимым. Насладитесь моментом, наслаждайтесь музыкой и танцами, и дайте этому дню шанс стать по-настоящему особенным!
					</p>
				</article>

				<article className='mt-16 text-center'>
					<h6 className='font-semibold uppercase mb-8 text-xl'>
						<span className="text-2xl block">Программа</span> "Испанское Шоу: Пламя и Ритм на Вашей Свадьбе"
					</h6>

					<ul className='mt-4'>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Поцелуй Солнца
							</p>
							<p className='text-gray-800'>
								Добро пожаловать в мир Испании с традиционным испанским приветствием! Ваше торжество начнется с пышного и страстного приветствия от наших артистов.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Звуки Фламенко
							</p>
							<p className='text-gray-800'>
								Зажигайте вечер под звуки фламенко - настоящего символа Испании. Живая фламенко-гитара и живой вокал наполнят воздух страстью и эмоциями.
							</p>

						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Вихрь Танца
							</p>
							<p className='text-gray-800'>
								Наши испанские артисты представят вам увлекательные танцевальные номера в стиле фламенко. Их страстные выступления заставят сердца гостей биться в ритме музыки.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Подвижный Вечер
							</p>
							<p className='text-gray-800'>
								Предлагаем вашим гостям вступить в мир испанских танцев и ритмов. Давайте вместе танцевать, петь и создавать волшебные моменты, которые останутся в вашей памяти.
							</p>
						</li>
						<li className='mb-5'>
							<p className='uppercase mb-2'>
								Живой Звук
							</p>
							<p className='text-gray-800'>
								Насладитесь живым исполнением музыки и вокала, которые принесут вечеру непередаваемую атмосферу и эмоции.
							</p>
						</li>
						<li className='mb-5'>

							<p className='text-gray-800'>
								Испанское Шоу - это возможность погрузиться в мир страсти, музыки и искусства. Мы гарантируем, что ваша свадьба станет невероятно ярким и незабываемым событием, и вы и ваши гости будете помнить этот день с удовольствием и восторгом. Дайте волшебству Испании шанс сделать вашу свадьбу по-настоящему особенной!"
							</p>
						</li>
					</ul>

					<p className='mt-16 font-semibold text-lg'>
						Не упустите возможность добавить яркие краски и страсть в ваше мероприятие! Закажите "Цыганское шоу" или "Испанское шоу" уже сегодня и создайте неповторимый праздник, о котором будут говорить еще долгие годы. Наши артисты гарантируют вам незабываемые моменты и эмоции, которые запомнятся на всю жизнь. Подарите себе и вашим гостям незабываемое приключение с нашими уникальными шоу!
					</p>
				</article>
			</div>
		</main>
	)
}

export default ShouNaSvadbu;