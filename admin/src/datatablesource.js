
export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
 
];

//temporary data
export const shopsColumns = [
  { field: "_id", headerName: "ID", width: 250 },

  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },


  
];

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "pname",
    headerName: "Product name",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 100,
  },
  
];