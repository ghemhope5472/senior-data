import React from 'react'
import { Button, Form, Input, Select, message } from 'antd';
import { auth, db } from '../config/firebase'

import { Space, Table, Tag } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Educational Attainment',
    dataIndex: 'educational_attainment',
    key: 'educational_attainment',
  },
];

function ViewData() {
    const [ datas, setDatas ] = useState(null)

    useEffect(() => {
        const getData = async() => {
            let data = []
            await db.collection("DATA").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    data.push(doc.data());
                });
            });
            setDatas(data)
        }

        getData()
    },[])




    console.log(datas)
   
  return (
    <div style={{width:"100%", marginTop:"5rem"}}>
            <Table columns={columns} dataSource={datas} />
    </div>
  )
}

export default ViewData
