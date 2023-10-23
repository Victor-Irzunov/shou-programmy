"use client"

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='sd:py-16 xz:py-6'>
			<div className='container mx-auto'>

			

				<Carousel responsive={responsive}>
					<div className='sd:mx-2 xz:mx-0'>
						<Image src='/main/1.webp' alt="фото портофилио шоу программы Бетельгейз" width={860} height={580} className='' />
					</div>
					<div className='sd:mx-2 xz:mx-0'>
						<Image src='/main/2.webp' alt="фото портофилио шоу программы Бетельгейз" width={860} height={580} className='' />
					</div>
					<div className='sd:mx-2 xz:mx-0'>
						<Image src='/main/3.webp' alt="фото портофилио шоу программы Бетельгейз" width={860} height={580} className='' />
					</div>
					<div className='sd:mx-2 xz:mx-0'>
						<Image src='/main/4.webp' alt="фото портофилио шоу программы Бетельгейз" width={860} height={580} className='' />
					</div>
					<div className='sd:mx-2 xz:mx-0'>
						<Image src='/main/5.webp' alt="фото портофилио шоу программы Бетельгейз" width={860} height={580} className='' />
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp