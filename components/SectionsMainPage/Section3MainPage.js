import Image from "next/image"
import Link from "next/link"

const Section3MainPage = () => {
	return (
		<section className="sd:pt-16 xz:pt-4 pb-6">
			<article className="container mx-auto">
				<div className="text-center mb-4">
					<h6 className="sd:text-5xl xz:text-4xl my-5 uppercase font-light">
						Организация шоу программ
					</h6>
				</div>

				<div className="sd:mt-20 xz:mt-8">
					<div className="sd:w-1/2 xz:w-full mx-auto mb-20 relative">
						<div className="relative overflow-hidden">
							<Image src='/main/foto-main.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-red-600/0 to-red-600/90 py-7" style={{ width: '645px', margin: '0 auto' }}>
								<p className="text-white uppercase text-xl text-center">
									Развлекательные Шоу программы с участием <span className="block font-semibold text-3xl">Цыганского ансамбля</span>
								</p>
							</div>
						</div>
					</div>

					<div className="sd:w-1/2 xz:w-full mx-auto relative">
						<div className="relative overflow-hidden">
							<Image src='/main/foto-main2.webp' alt='Цыганский ансамбль' className="mx-auto" width={645} height={608} />
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-red-600/0 to-red-600/90 py-7" style={{ width: '645px', margin: '0 auto' }}>
								<p className="text-white uppercase text-xl text-center">
									Развлекательные Шоу программы с участием <span className="block font-semibold text-3xl">Испанского ансамбля</span>
								</p>
							</div>
						</div>
					</div>
				</div>


				<div className="sd:mt-20 xz:mt-14 text-center sd:px-24 xz:px-0">

					<p className="sd:mb-4 xz:mb-3">
						Организация развлекательных мероприятий требует особого внимания к деталям, чтобы создать незабываемую атмосферу. Мы гордимся предлагать вам шоу программы, в которых вы можете насладиться виртуозными выступлениями Цыганского и Испанского ансамблей.
					</p>
					<p className="sd:mb-4 xz:mb-3">
						Наша цель - подарить вам уникальный и захватывающий опыт, который останется в вашей памяти на долгие годы. Цыганские ансамбли с их красивыми танцами и живой музыкой принесут нотку страсти и тайны в ваше мероприятие. А Испанские ансамбли с их пышными платьями и энергичными номерами добавят ярких красок и атмосферу фиесты.
					</p>
					<p className="sd:mb-4 xz:mb-3">
						Наши профессиональные ансамбли гарантируют качественные выступления, которые подарят вам море положительных эмоций и восторженные аплодисменты вашей аудитории. Мы работаем с различными типами мероприятий, включая Новый Год, дни рождения, юбилеи, корпоративы и свадьбы.
					</p>
					<p className="sd:mb-4 xz:mb-3">
						Для подробной информации о наших услугах, пожалуйста, посетите страницу<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi`} as='/uslugi' className="text-blue-800 mx-2">
							услуги
						</Link> на нашем сайте. Мы всегда готовы обсудить ваши потребности и пожелания, чтобы создать именно тот формат шоу программы, который будет соответствовать вашему мероприятию.
					</p>
					<p className="mt-8 text-center font-bold sd:text-lg xz:text-base">
						Закажите шоу программу с участием Цыганского или Испанского ансамбля у нас, и превратите ваше мероприятие в незабываемое приключение, которое будет обсуждаться еще долго после его завершения!
					</p>
				</div>
			</article>
		</section>
	)
}
export default Section3MainPage