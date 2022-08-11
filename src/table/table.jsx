import React, { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import {Table, Button } from 'antd'
import 'antd/dist/antd.css';
import { columns } from './constant/DataTable';
import { getDataJarvis } from '../services/jarvis.service';

function JarvisData(){
  const [data, setData] = useState([]);
  console.log(data)
  async function getData(){
    const response = await getDataJarvis();
    setData(response.results);
  }

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <h1>Jarvis Data</h1>
      <Table 
        columns={columns} 
        dataSource={data?.map(item => ({
          first: item.name.first,
          last: item.name.last,
          dob: item.dob.age,
          gender: item.gender,
          email: item.email,
          nat: item.nat,
          picture: item.picture.thumbnail
        }))}
        pagination={{
        defaultPageSize: 15,
      }}/>
      <Button type="primary" icon={<DownloadOutlined />}>
        Download
      </Button>
      <br/>
    </div>
  )
}

export default JarvisData;