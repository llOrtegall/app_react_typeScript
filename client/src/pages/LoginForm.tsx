import { Button, Input, Label } from '../components/ui'
import './styles.css'

export function LoginForm () {
  return (
    <form className='form_main'>

      <article>
        <Label>Usuario</Label>
        <div className=''>
          <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' required />
        </div>
      </article>

      <article>
        <Label>Contraseña</Label>
        <div className=''>
          <Input name='password' type='password' placeholder='**********' autoComplete='password' required />
        </div>
      </article>

      <Button>Iniciar Sesión</Button>
    </form>
  )
}
