
import Image from "next/image";
import SectionUslugi from "@/components/SectionUslugi/SectionUslugiCard";
import SectionUslugiContent from "@/components/SectionUslugi/SectionUslugiContent";

export const metadata = {
	title: '',
	description: '',
	alternates: {
		canonical: ''
	}
}
const UslugiPage = () => {





	return (
		<main className='sd:pt-36 xz:pt-24 pb-10'>
			<div className="container mx-auto sd:px-24 xz:px-0">
				<div className="text-center mb-4">
					<Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" width={150} height={143} className="mx-auto" />

					<h1 className="sd:text-6xl xz:text-4xl uppercase my-5 font-light">
						Услуги
					</h1>
				</div>
				<div className="w-full mt-10 mx-auto">
					<Image src='/main/main3.webp' className="mx-auto" alt="искусство шоу Бетельгейз" width={645} height={608} />
				</div>
				<div className="sd:mt-16 xz:mt-8 py-6">
					<h2 className="uppercase text-center sd:text-4xl xz:text-xl">
						Уникальное шоу для каждого мероприятия
					</h2>
					<SectionUslugi />
				</div>

				<SectionUslugiContent />
			</div>
		</main>
	)
}
export default UslugiPage;