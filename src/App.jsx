import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'
import IconoGitHub from './img/github-mark.svg'

const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  width: 90;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width:400px;
  margin: 100px auto 0 auto;
  width: 80%;
  display: block;
`

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const GitHubIcon = styled.div`
  position: fixed;
  top: 3rem;
  left: 3rem;

  img {
    width: 3rem;
  }

  img:hover {
    cursor: pointer;
  }
`

function App() {

  const [monedas, setMonedas] = useState([])
  const [resCotizacion, setResCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true)
        setResCotizacion({})

        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const res = await (await fetch(url)).json()

        setResCotizacion(res.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas])


  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="Imagenes Criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner />}
        {resCotizacion.PRICE && <Resultado resultado={resCotizacion} />}
      </div>
      <GitHubIcon className='github-icon'>
        <a href="https://github.com/jordimartinezjimenez/crypto-quoter" target='_blank' rel='noreferrer'><img src={IconoGitHub} alt="Icono GitHub" /></a>
      </GitHubIcon>
    </Contenedor>
  )
}

export default App
