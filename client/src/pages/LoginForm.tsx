import { Button, Input, Label } from '../components/ui'
import './styles.css'

export function LoginForm () {
  return (
    <section>

      <form className='form_main'>

        <figure className='form_icon'>
          <img src='/vite.svg' alt='logo' width={100} />
        </figure>

        <article>
          <Label>Usuario</Label>
          <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' required />
        </article>

        <article>
          <Label>Contraseña</Label>
          <Input name='password' type='password' placeholder='**********' autoComplete='password' required />
        </article>

        <Button>Iniciar Sesión</Button>
      </form>

    </section>

  )
}
