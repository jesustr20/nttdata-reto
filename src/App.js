import React, { useEffect, useState } from 'react';
import './App.css';
import { DownloadOutlined } from '@ant-design/icons';
import {Table, Button, Radio } from 'antd'
import 'antd/dist/antd.css';
import axios from 'axios';


const baseUrl = "https://randomuser.me/api/?results=15"
const downloadUrl = `${baseUrl}&inc=name,dob,gender,email,nat,picture&format=csv`
function App() {

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      align: 'center',
      width: 50,
      render: (name) => {
        const firstName = Object.keys(name).map(key => key === 'first' ? name[key] : null);
        return firstName
      }
    },
    {
      title: "Apellido",
      dataIndex: "name",
      key: "name",
      align: 'center',
      width: 100,
      render: (name) => {
        const lastName = Object.keys(name).map(key => key === 'last' ? name[key] : null);
        return lastName
      }
    },
    {
      title: "Edad",
      dataIndex: "dob",
      key: "dob",
      align: 'center',
      width: 50,
      sorter: (a,b) => a.dob - b.dob
    },
    {
      title: "Genero",
      dataIndex: "gender",
      key: "gender",
      align: 'center',
      width: 50,
      render: (gender) => {
        const mayuscula = gender[0].toUpperCase()
        return mayuscula
      }
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: 'center',
      width: 150
    },
    {
      title: "Nacionalidad",
      dataIndex: "nat",
      key: "nat",
      align: 'center',
      width: 50
    },
    {
      title: "Foto",
      dataIndex: "picture",
      key: "picture",
      align: 'center',
      width: 50,
      render: (picture) => {
        return(
          <div>
            <img className='border' src={picture.thumbnail} alt="foto" />
          </div>
        )
      }
    },
  ]


  const peticionGet = async () => {
    await axios.get(baseUrl)
    .then(response => {
      const fulldata = response.data.results
      const dataJarvis = fulldata.map(item =>{
        return {
          name: item.name,
          dob: item.dob.age,
          gender: item.gender,
          email: item.email,
          nat: item.nat,
          picture: item.picture,
        }
      })

      setData(dataJarvis)

    }).catch(error => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    peticionGet()
  },[])
  
  return (
    <div className="App">
      <br/><br/>
      <Button type="primary" href={downloadUrl} icon={<DownloadOutlined />} >
        Download
      </Button>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
          defaultPageSize: 15,
        }}/>
    </div>
  );
}

export default App;

//Nota:
//Instalar las dependencias: antd, axios
//npm install antd
//npm install axios
