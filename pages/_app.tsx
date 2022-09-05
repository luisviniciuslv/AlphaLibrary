import type { AppProps } from "next/app";
import { CartContext } from "../CartContext";
import { useState } from "react";
import { MangaCart } from "../src/model/manga";
import { ObjectId } from "mongoose";
function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<MangaCart[]>([])

  console.log(cart)

  function addManga(manga: MangaCart) {
    setCart([...cart, manga])
  }

  function removeManga(id: ObjectId) {
    setCart(cart.filter((item: MangaCart) => item._id !== id))
  }

  function updateAmount(manga: MangaCart) {
    const mangaIndex = cart.findIndex((item: MangaCart) => item._id === manga._id)

    if (mangaIndex === -1) {
      addManga(manga)
    } else {
      const newCart = [...cart]
      newCart[mangaIndex].amount += manga.amount

      setCart(newCart)
    }
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addManga,
        removeManga,
        updateAmount,
        clearCart
      }}
    >
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp;
