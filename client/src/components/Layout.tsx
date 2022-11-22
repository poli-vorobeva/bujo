import * as React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
const LayoutStyled= styled.div`
display:flex;
height:100vh;
width:100vw;
`

const PageNav= styled.nav`
position:relative;

background:orange;
display:flex;
flex-flow:column nowrap;
align-items:center;
height:100%;
width:120px;
transition:all ease 500ms;
`

const Layout = () => {
	const [asideHover,setAsideHover]=useState(false)
	const navLinks={
		'/':"Home",
		"/main":"Main",
		'/weeksTasks':'Tasks',
		'/canvasChart':'CanvasCharts'
	}
	return (
		<LayoutStyled>
			<PageNav
				onMouseLeave={()=>setAsideHover(!asideHover)}
				onMouseEnter={()=>setAsideHover(!asideHover)}
				//style={{transform:asideHover?"translate(100px)":"translate(0)"}}
			>
				{
					Object.entries(navLinks).map(link=>{
						return 	<NavLink to={link[0]}>{link[1]}</NavLink>
					})
				}
			</PageNav>
			<div style={{display:'flex', flexFlow:'column',justifyContent:'space-between'}}>
				<Outlet/>
				<footer>footer</footer>
			</div>
		</LayoutStyled>
	)
}
export default Layout