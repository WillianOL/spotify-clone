import React from 'react'
import "./Header.scss"
import BotoesLogin from './BotoesLogin'
import ButtonMobile from './MenuMobile/ButtonMobile'
import MenuMobile from './MenuMobile/MenuMobile'

const Header = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <>
    <header>
      <ButtonMobile ativo={ativo} setAtivo={setAtivo} />
      <BotoesLogin />
    </header>
    <MenuMobile ativo={ativo} />
    </>

  )
}

export default Header
