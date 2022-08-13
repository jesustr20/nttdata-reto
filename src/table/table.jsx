import React, { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import {Table, Button } from 'antd'
import 'antd/dist/antd.css';
import { columns } from './constant/DataTable';
import { getDataJarvis } from '../services/jarvis.service';
import { CSVLink } from 'react-csv'

const dataUrl = process.env.REACT_APP_BASE_URL+"?results=15&inc=name,dob,gender,email,nat,picture&format=csv"

function JarvisData(){
  const [data, setData] = useState([]);

  async function getData(){
    const response = await getDataJarvis();
    setData(response.results);
  }

  const dataTable = data?.map(item => ({
    first: item.name.first,
    last: item.name.last,
    dob: item.dob.age,
    gender: item.gender,
    email: item.email,
    nat: item.nat,
    picture: item.picture.thumbnail
  }))
 
  const csvExport = []
  const contentColumns = []

  const betaColumTable = columns?.map(item => item.title )
  contentColumns.push(betaColumTable)

  const betaDataTable = dataTable?.map(item => Object.values(item))
  csvExport.push(...contentColumns, ...betaDataTable)

  const csvReport = {
    filename: 'jarvis-data.csv',
    data: csvExport
  }

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <h1>Jarvis Table Data</h1>
      <Table
        columns={columns} 
        dataSource={dataTable}
        pagination={{
        defaultPageSize: 15,
      }}/>
      <Button type="primary" href={dataUrl} icon={<DownloadOutlined />} style={{margin:"10px"}}>
        Download from Url
      </Button>
      <Button type="link" icon={<DownloadOutlined />}>
      <CSVLink {...csvReport}>Download from Table</CSVLink>
      </Button>
      <br/>
    </div>
  )
}

export default JarvisData;