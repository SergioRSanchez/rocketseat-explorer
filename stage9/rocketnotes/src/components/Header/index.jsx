import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/SergioRSanchez.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Sergio R Sanchez</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}