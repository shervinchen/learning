import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import styled from "styled-components";

const Tips = styled.div`
    background: orange;
    padding: 10px;
    margin: 30px 0;
    color: #fff;
`

const Component = observer(({children}) => {
    const { UserStore } = useStores()
    return (
        <>
            {UserStore.currentUser ? null : <Tips>{children}</Tips>}
        </>
    )
})

export default Component