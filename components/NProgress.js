import { useRef, useEffect } from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'

export default function NextNProgress({
  color = '#8B9DFA',
  startPosition = 0.3,
  stopDelayMs = 200,
  height = 3,
  options = { showSpinner: false, speed: 500, trickleSpeed: 200 },
}) {
  let timer = useRef()

  const routeChangeStart = () => {
    NProgress.set(startPosition)
    NProgress.start()
  }

  const routeChangeEnd = () => {
    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      NProgress.done(true)
    }, stopDelayMs)
  }

  const routeChangeError = (err, url) => {
    if (err.cancelled) {
      console.warn(`Route to ${url} was cancelled!`)
    }
  }

  useEffect(() => {
    if (options) {
      NProgress.configure(options)
    }

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeError)

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeEnd)
      Router.events.off('routeChangeError', routeChangeError)
    }
  }, [])

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
        border-radius: 5px;
        background: ${color};
      }

      #nprogress .peg {
        position: absolute;
        right: 0px;
        display: block;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 5px ${color};
        border-radius: 5px;
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
        display: block;
      }

      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${color};
        border-left-color: ${color};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }

      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }

      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }

      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  )
}
