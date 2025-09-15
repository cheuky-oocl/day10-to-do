import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from 'antd';
import {useState} from "react";

const {Header, Footer, Sider, Content} = Layout;

export function DefaultLayout() {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: 'Home',
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: 'Done List',
            label: <NavLink to={"/done"}>Done List</NavLink>
        },
        {
            key: 'About us',
            label: <NavLink to={"/aboutUs"}>About Us</NavLink>
        }
    ]

    return <Layout>
        <Header>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><NavLink to={"/"}>Home</NavLink></li>*/}
            {/*        <li><NavLink to={"/todos"}>Todos</NavLink></li>*/}
            {/*        <li><NavLink to={"/about-us"}>AboutUs</NavLink></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <Menu onClick={onClick}
                  selectedKeys={[current]}
                  theme="dark"
                  mode="horizontal" items={items}/>
        </Header>
        <Content>
            <Outlet/>
        </Content>
        <Footer>
            @Copyright Cheuky
        </Footer>
    </Layout>
}