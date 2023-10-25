import Image from "next/image";
import { Button, QRCode } from 'antd';
// import BtnComp from "@/components/btn/BtnComp";
import Section1MainPage from "@/components/SectionsMainPage/Section1MainPage";
import Section2MainPage from "@/components/SectionsMainPage/Section2MainPage";
import Section3MainPage from "@/components/SectionsMainPage/Section3MainPage";
import BtnScroll from "@/components/btnScroll/BtnScroll";

export default function Home() {
  return (
    <main className='sd:py-12 xz:pt-12 container mx-auto bg-white mt-16 rounded-sm'>

      <section className="relative w-full">

        <div className="sd:block xz:hidden absolute top-1/2 bottom-0 transform -translate-y-1/2 left-2 mr-4 mb-4 flex items-center">
          <div className="flex flex-col items-center">
            <a href='https://www.instagram.com/betelgeuze_show/' target='_blank' className="mb-4">
              <Image src='/instagram.svg' alt="сслыка для перехода на instagram" width={20} height={20} />
            </a>
            <a href="https://www.youtube.com/@biza1986" target='_blank'>
              <Image src='/youtube.svg' className="mb-10" alt="сслыка для перехода на youtube" width={20} height={20} />
            </a>
            <BtnScroll />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-600 uppercase text-5xl font-light">
            шоу
          </p>
          <Image src='/logo/logo-word2.webp' alt="логотип Бетельгейз" className="mx-auto" width={500} height={143} />

          <div className="sd:w-1/2 xz:w-full mt-10 mx-auto text-center">
            <Image src='/main/main3.webp' className="mx-auto" alt="искусство шоу Бетельгейз" width={645} height={608} />
          </div>

          <div className="text-center mt-8">
            <p className="uppercase mb-6 font-light sd:text-2xl xz:text-lg">
              Незабываемое шоу для вашего мероприятия
            </p>
            <div className='sd:flex xz:flex-row mb-8 text-[#c9a035] font-semibold text-2xl'>
              <p className="mx-2 my-2">
                Живой голос
              </p>
              <p className="mx-2 my-2">
                Профессиональные артисты
              </p>
              <p className="mx-2 my-2">
                Большой сценический опыт
              </p>
            </div>

            {/* <BtnComp /> */}
            <a href="tel:80445992515">
              <button
                className='bg-orange-500 px-8 py-2 text-white uppercase hover:transform hover:scale-110 transition-transform'
              >
                Позвонить
              </button>
            </a>
          </div>
        </div>

        <div className="flex sd:justify-end xz:justify-center items-center sd:pr-6 xz:pr-0 sd:mt-20 xz:mt-12">
          <div className="sd:hidden xz:block">
            <Image src='/instagram.svg' className="" alt="сслыка для перехода на instagram" width={30} height={30} />
          </div>
          <div className="ml-4 sd:hidden xz:block">
            <Image src='/youtube.svg' className="" alt="сслыка для перехода на youtube" width={30} height={30} />
          </div>
          <div className="w-14 ml-4">
            <QRCode
              errorLevel="H"
              size='50'
              value="https://ant.design/"
            />
          </div>

          <div className="ml-4">
            <Image src='/kod.webp' alt="штрих код" width={60} height={60} />
          </div>
          <div className="ml-4">
            <Image src='/main/visa.png' alt="visa карта" width={60} height={60} />
          </div>
          <div className="ml-4">
            <Image src='/main/master.png' alt="mastercard карта" width={40} height={40} />
          </div>
        </div>
      </section>


      <Section1MainPage />

      <Section2MainPage />

      <Section3MainPage />
    </main >
  );
}
