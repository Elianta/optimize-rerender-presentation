import { Error } from '@/components'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import Head from 'next/head'

const NextError = ({ statusCode = 500 }) => {
  useEffect(() => {
    NProgress.done(true)
  }, [])

  const is404page = statusCode === 404

  const title404 = 'Ошибка 404. Страница не найдена'
  const title500 = 'Ошибка 500. Внутренняя ошибка сервера'

  return (
    <>
      <Head>
        <title>{is404page ? title404 : title500}</title>
      </Head>
      <Error statusCode={statusCode} />
    </>
  )
}

NextError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  if (res && statusCode) {
    res.statusCode = statusCode
  }
  return { statusCode }
}

export default NextError
