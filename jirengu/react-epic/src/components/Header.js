import React, { useState } from 'react'
import LogoUrl from './logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
  color: #fff;
`

const Logo = styled.img`
  height: 30px;
`

const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;

  &.active {
    border-bottom: 1px solid #fff;
  }
`

const Login = styled.div`
  margin-left: auto;
`

const StyledButton = styled(Button)`
  margin-left: 10px;
`

function Component () {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Header>
      <Logo src={LogoUrl} alt='logo' />
      <nav>
        <StyledLink to='/' activeClassName='active' exact>
          首页
        </StyledLink>
        <StyledLink to='/history' activeClassName='active'>
          上传历史
        </StyledLink>
        <StyledLink to='/about' activeClassName='active'>
          关于我
        </StyledLink>
      </nav>
      <Login>
        {
          isLogin ? <>
            饥人谷 <StyledButton type='primary' onClick={() => setIsLogin(false)}>注销</StyledButton>
          </> : <>
            <StyledButton type='primary' onClick={() => setIsLogin(true)}>登录</StyledButton>
            <StyledButton type='primary'>注册</StyledButton>
          </>
        }
      </Login>
    </Header>
  )
}

export default Component
