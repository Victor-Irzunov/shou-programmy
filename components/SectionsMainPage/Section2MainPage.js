import Link from "next/link";


const Section2MainPage = () => {
	return (
		<section className="pt-4 pb-4">
			<div className="container mx-auto">
				<div className="text-center mb-4">
					<h6 className="sd:text-2xl xz:text-lg sd:my-5 xz:my-1 font-semibold">
						Популярные запросы
					</h6>

					<div className="sd:w-[70vw] xz:w-full mx-auto flex justify-center flex-wrap text-gray-700">
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/cyganskij-ansambl`} as='/uslugi/cyganskij-ansambl' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Цыганская шоу программа
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/cyganskij-ansambl-na-svadbu`} as='/uslugi/cyganskij-ansambl-na-svadbu' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Цыганский ансамбль на свадьбу
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/cyganskij-ansambl-na-korporativ`} as='/uslugi/cyganskij-ansambl-na-korporativ' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Цыгане на корпоратив
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/shou-na-korporativ`} as='/uslugi/shou-na-korporativ' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Шоу программа на корпоратив
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/shou-programma-na-yubilej`} as='/uslugi/shou-programma-na-yubilej' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Шоу программа на юбилей
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/shou-programma-na-svadbu`} as='/uslugi/shou-programma-na-svadbu' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Шоу программа на свадьбу
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/cyganskij-ansambl-na-yubilej`} as='/uslugi/cyganskij-ansambl-na-yubilej' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Цыганский ансамбль на юбилей
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/shou-programma-na-svadbu`} as='/uslugi/shou-programma-na-svadbu' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
								Развлекательные программы на свадьбу
							</Link>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/uslugi/novogodnyaya-shou-programma`} as='/uslugi/novogodnyaya-shou-programma' className="underline sd:mx-2 xz:mx-0 sd:mb-0 xz:mb-1">
							Новогодняя шоу программа
							</Link>

					</div>
				</div>
			</div>
		</section>
	)
};
export default Section2MainPage;