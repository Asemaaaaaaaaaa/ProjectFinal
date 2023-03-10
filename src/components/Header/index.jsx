import React from 'react'
import { ReactComponent as  LightIcon} from '../../assets/images/icon-sun.svg'
import { ReactComponent as  DarkIcon}  from '../../assets/images/icon-moon.svg'

export const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      <button aria-label="Switch Theme" className="btn-switch" onClick={() => toggleTheme()}>
       { theme === 'light' ? <DarkIcon/> : <LightIcon/>}
      </button>
    </div>
  )
}
