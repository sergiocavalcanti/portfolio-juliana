import React from 'react'
import styles from './styles.module.css'
import Form from './form'

const index = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <h2 className={styles.titleDesktop}>Coloque sua marca em movimento</h2>
        <h2 className={styles.titleMobile}>Vídeos com estratégia, criatividade e velocidade </h2>
        <p>Vem co-criar com a ju!</p>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>FALA COMIGO!</h2>
          <p>Tá com uma ideia, precisa de orçamento ou quer falar sobre algum projeto? Tô te esperando!<br/> É só chamar!</p>
        </div>

        <div className={styles.col2}>
          <Form />

        </div>

      </div>

    </div>
  )
}

export default index