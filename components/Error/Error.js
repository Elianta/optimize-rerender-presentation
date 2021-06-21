import { Container, Title, Paragraph, Button } from '@/components'
import styles from './Error.module.scss'
import Router from 'next/router'
import Link from 'next/link'

export default function Error({ statusCode }) {
  const is404page = statusCode === 404

  return (
    <div className={styles.error}>
      <Container className={styles.container}>
        <div>
          {is404page ? (
            <Title>Страница не найдена</Title>
          ) : (
            <Title>Внутренняя ошибка сервера</Title>
          )}

          <Paragraph>
            {is404page
              ? 'Возможно, она была удалена или ее адрес введен неверно.'
              : 'Попробуйте перезагрузить страницу немного позже.'}
          </Paragraph>

          <div className={styles.btn}>
            {is404page ? (
              <Link href="/" passHref>
                <Button
                  component="a"
                  type="button"
                  size="large"
                  onClick={() => {
                    Router.reload()
                  }}
                >
                  Вернуться на главную
                </Button>
              </Link>
            ) : (
              <Button
                type="button"
                size="large"
                onClick={() => {
                  Router.reload()
                }}
              >
                Перезагрузить
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
