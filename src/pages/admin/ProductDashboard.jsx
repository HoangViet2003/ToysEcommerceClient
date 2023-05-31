import React from "react";
import DataTable from "react-data-table-component";
import useProduct from "../../hooks/useProduct";

function ProductDashboard() {
  const { product, handleGetProductWithoutLimit } = useProduct();

  const columns = [
    {
      name: "ID",
        selector: (row) => row._id,
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
        name: "Quantity",
        selector: (row) => row.quantity,
    }
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
    <div style={{margin:"30px" ,border:"1px",marginLeft:"100px"}}>
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
