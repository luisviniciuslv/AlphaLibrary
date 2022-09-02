import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout'

import Banner from '../assets/Banner.svg'
import Image from 'next/image'
import { MangaCard } from '../components/MangaCard'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Image src={Banner} alt="" />
      <MangaCard
        id='1'
        title='One Piece'
        image='https://i.pinimg.com/originals/1c/1d/1c/1c1d1c8b1f1b1b1b1b1b1b1b1b1b1b1b.jpg'
        description='One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. A história segue as aventuras de Monkey
        D. Luffy, um jovem pirata que busca o maior tesouro do mundo, o "One Piece", a fim de se tornar o Rei dos Piratas.'
        price={10.99}
        rating={4.5}
      />
    </DefaultLayout>
  )
}

export default Home
