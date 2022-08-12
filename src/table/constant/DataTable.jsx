export const columns = [
  {
    title: "Nombre",
    dataIndex: "first",
    key: "first",
    align: 'center',
    width: 50,
  },
  {
    title: "Apellido",
    dataIndex: "last",
    key: "last",
    align: 'center',
    width: 100,
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
          <img className='border' src={picture} alt="foto" />
        </div>
      )
    }
  },
]