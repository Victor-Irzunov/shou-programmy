// import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

// export const inter = Open_Sans({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// });

export const metadata = {
  title: 'Супер Шоу программа на мероприятие Бетельгейз',
  description: 'Уникальные развлекательные шоу программы с участием Цыганского и Испанского ансамблей для вашего мероприятия. Организация незабываемых выступлений на Новый Год, день рождения, юбилей, корпоратив, и свадьбу. Закажите у нас и создайте незабываемую атмосферу!',
  // alternates: {
  //   canonical: 'https://vi-tech.by/'
  // }
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
       <head>
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
