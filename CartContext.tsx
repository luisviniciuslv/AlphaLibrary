import { ObjectId } from 'mongoose'
import { createContext } from 'react'

import { MangaCart } from './src/model/manga'

interface CartContextProps {
  cart: MangaCart[],
  addManga: (manga: MangaCart) => void,
  removeManga: (id: ObjectId) => void,
  updateAmount: (manga: MangaCart) => void,
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextProps)