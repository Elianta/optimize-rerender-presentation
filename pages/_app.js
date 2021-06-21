import '../scripts/wdyr'
import '@/assets/styles/vars/css-variables.scss'
import '@/assets/styles/fonts.scss'
import '@/assets/styles/global.scss'

import { Head, NProgress, Page, Layout } from '@/components'
import HomePage from '@/pages'
import { Fragment } from 'react'
import Error from './_error'
import App from 'next/app'

export default function MyApp({ Component, pageProps, hasError, errorStatus }) {
  const Wrapper = Component === HomePage ? Fragment : Layout

  return hasError ? (
    <>
      <Head />
      <Page>
        <NProgress />
        <Error {...pageProps} statusCode={errorStatus} />
      </Page>
    </>
  ) : (
    <>
      <Head />
      <NProgress />
      <Page>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Page>
    </>
  )
}

MyApp.getInitialProps = async appContext => {
  const { Component, ctx } = appContext
  let errorStatus = ctx.err ? ctx.err.statusCode : ctx.res ? ctx.res.statusCode : null
  let hasError = false
  let appProps

  try {
    appProps = await App.getInitialProps(appContext)
  } catch (error) {
    errorStatus = +error.statusCode || 500
    hasError = true
    if (ctx.res && errorStatus) ctx.res.statusCode = errorStatus
  }

  return { ...appProps, hasError: Component === Error || hasError, errorStatus }
}
