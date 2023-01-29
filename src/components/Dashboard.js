import React, { useState, useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import { useNavigate } from 'react-router-dom'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import AddForm from './AddForm';
import ViewData from './ViewData';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Menu', 'sub1', <MailOutlined />, [
      getItem('Add Data', '1'),
      getItem('View Data', '2'),
      getItem('Logout', '3'),
    ]),
  ];

function Dashboard() {
    const [state, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleSignOut = () => {
        localStorage.clear()
        dispatch({
            type: 'SET_USER',
            user: null
        })
        navigate("/");
    }

    useEffect(() => {
        if(current === '3'){
            localStorage.clear()
        dispatch({
            type: 'SET_USER',
            user: null
        })
        navigate("/");
        }

    }, [current])

  return (
    <div style={{display:"flex", width: "100vw"}}>
       <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
        </>
        { current === "1" &&   <AddForm  /> }
        { current === "2" &&   <ViewData />}
    </div>
  )
}

export default Dashboard
