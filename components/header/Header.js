"use client"
import Image from 'next/image'
import logo from '../../public/logo/logo.webp'
import Link from 'next/link'
import { useState } from 'react'
import { useScreens } from '@/constants/constants'
import { DrawerComp } from '../drawer/DrawerComp'
import { Popover } from 'antd';

const Header = () => {
  const [hover, setHover] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [placement, setPlacement] = useState('')
  const [title, setTitle] = useState('')
  const screens = useScreens()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isForm, setIsForm] = useState(false)
  const showModal = (isForm) => {
    setIsForm(isForm)
    setIsModalOpen(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const handleMouseEnter = () => {
    setHover(true)
  }
  const showDrawer = (position, title) => {
    setOpenMenu(true)
    setPlacement(position)
    setTitle(title)
  }
  const navBar = [
    {
      id: 1,
      name: 'Главная',
      link: '/'
    },
    {
      id: 4,
      name: 'Услуги',
      link: 'uslugi'
    },
    {
      id: 5,
      name: 'Контакты',
      link: 'kontakty'
    },
  ]

  const content = (
    <div className='px-4'>
      <div className='flex'>
        <a href='tel:8029' className='text-lg'>
          +375 29 000-00-00
        </a>
        <Image src='/a1.svg' className='ml-2' alt='оператор А1' width={18} height={18} />
      </div>
      <div className='flex mt-2'>
        <a href='tel:8029' className='text-lg'>
          +375 29 000-00-00
        </a>
        <Image src='/mts.svg' className='ml-2' alt='оператор МТС' width={48} height={48} />
      </div>
    </div>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-1 bg-white shadow-xl"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div className=''>

            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} as='/' className="">
              <Image
                src={logo}
                width={screens.lg ? 120 : 120}
                height='auto'
                alt='логотип компании'
              />
            </Link>
          </div>
          <nav className='xz:hidden sd:block'>
            <ul className='flex justify-between items-center pl-20'>
              {
                navBar.map(el => {
                  return (
                    <li key={el.id}
                      className='mx-3 uppercase tracking-wider'
                    >
                      <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${el.link}`} as={`/${el.link}`} className="">
                        {el.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <div className='xz:hidden sd:flex'>
            <a
              href='tel:8029'
              className='block xx:text-xl xz:text-lg'
            >
              +375 29 000-00-00
            </a>
            <Image src='/a1.svg' className='ml-2' alt='оператор А1' width={18} height={18} />
          </div>

          <div className='xz:block sd:hidden pl-5 pt-1'>
            <Popover content={content} title="Телефоны для консультации">
              <Image src='/phone.svg' alt='Телефоны для консультации' width={35} height={35} />
            </Popover>
          </div>

          <div className='xz:inline-block sd:hidden'>
            <Image
              src='/menu.svg'
              alt='Кнопка меню'
              width={45} height={45}
              onClick={() => showDrawer('right', 'Меню')}
            />
          </div>
        </div>
      </div>

      <DrawerComp
        openMenu={openMenu}
        placement={placement}
        title={title}
        setOpenMenu={setOpenMenu}
        isActiveForm={{ menu: true }}
      />
    </header>
  )
}

export default Header
