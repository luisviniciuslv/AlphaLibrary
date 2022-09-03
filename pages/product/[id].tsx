import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import DefaultLayout from '../../components/Layout'

const Product: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id) {
      return
    }
  }, [id])

  if (!id) {
    return (<h1></h1>)
  }

  return (
    <DefaultLayout>
      <h1>{id}</h1>
    </DefaultLayout>
  )
}

export default Product