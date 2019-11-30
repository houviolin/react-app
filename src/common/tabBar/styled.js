import styled from "styled-components"

export const TabBarContainer = styled.div`
#footer{
    width:100%;
    height: 1rem;
    background: #fff;
    position: fixed;
    left:0;
    bottom: 0;
    border-top:1px solid #ccc;
}

#footer ul{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0;
    margin:0;
}

#footer ul li{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#footer ul .active{
    color:#c33;
}

#footer ul li i{
    font-size:.4rem;
}

#footer ul li span{
    font-size: .3rem;
}
`