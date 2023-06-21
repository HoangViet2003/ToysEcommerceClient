import React from "react";
import DataTable from "react-data-table-component";
import useProduct from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";


function ProductDashboard() {
  const { product, handleGetProductWithoutLimit,handleDeleteProduct } = useProduct();

    const navigate = useNavigate();

    const handleDetails = (id) => {
      navigate(`/update-product/${id}`, {
        state: {
          productDetail: product.find((item) => item._id === id),
        },
      });
      // console.log(product.find((item) => item._id === id))
    };
 

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => <button onClick={() => handleDetails(row._id)}>Edit</button>,
    },
    {
      name: "Action",
      cell: (row) => <button onClick={() => handleDeleteProduct(row._id)}>Delete</button>,
    },
  ];



  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  React.useEffect(() => {
    handleGetProductWithoutLimit();
  }, []);

  console.log(product);
  return (
    <div style={{ margin: "30px", border: "1px", marginLeft: "100px" }}>
      <DataTable
        columns={columns}
        data={product}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={5}
      
      />
    </div>
  );
}

export default ProductDashboard;
