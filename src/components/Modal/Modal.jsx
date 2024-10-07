import css from './Modal.module.css'

const Modal = ({onCloseModal}) => {
  return (
      <div className={css.backdrop}>
          <div className={css.modal}>
              <button onClick={onCloseModal} className={css.closeBtn} type='button'>❌</button>
            <h2>Additional bar info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum reiciendis ex assumenda adipisci modi eos aperiam, sunt cumque reprehenderit harum.
            </p>

          </div>  
         
         
         
         
         
      </div>
  )
}

export default Modal