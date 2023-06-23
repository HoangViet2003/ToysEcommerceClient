import React,{useState} from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import useOrder from "../../hooks/useOrder";

function OrderDashboard() {
  const { order, handleGetOrder,handleConfirmOrder,handleGetOrderByTime,handleSearchOrder } = useOrder();

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [keyword, setKeyword] = useState("")

console.log(keyword)

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row.is_confirmed ? "Confirmed" : "Not Confirmed"),
      sortable: true,
    },
    {
      name: "User ID",
      selector: (row) => row.user_id,
      sortable: true,
    },
   
    {
      name: "Action",
      cell: (row) => (
        <button onClick={() => handleConfirmOrder(row._id)}>Confirm</button>
      ),
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button onClick={() => handleDeleteProduct(row._id)}>Delete</button>
    //   ),
    // },
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
    handleGetOrder();
  }, []);

//   const ExpandedComponent = ({ order }) => (

//      order.map((item) => (
//         <div key={item._id}>a</div>
//      ))
//   );


const [expandedRows, setExpandedRows] = useState([]);

const handleRowExpand = (row) => {
  const isRowExpanded = expandedRows.includes(row._id);

  setExpandedRows((prevExpandedRows) =>
    isRowExpanded
      ? prevExpandedRows.filter((id) => id !== row._id)
      : [...prevExpandedRows, row._id]
  );
};

const expandableRowsComponent = ({ data }) => {
  const rowStyles = {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  };

  const productStyles = {
    marginBottom: "5px",
    padding: "5px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={rowStyles}>
      {data.products.map((product) => (
        <div key={product._id} style={productStyles}>
          <div>
            <strong>Product ID:</strong> {product.product_id}
          </div>
          <div>
            <strong>Quantity:</strong> {product.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

const expandableRowExpanded = (row) => {
  return expandedRows.includes(row._id);
};




  console.log(order);
  return (
    <div style={{ margin: "30px", border: "1px", marginLeft: "100px" }}>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} style={{border:"1px"}}/>
      <button onClick={ () => handleSearchOrder(keyword)}>Filter</button>

      <DataTable
        columns={columns}
        data={order}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={5}
        expandableRows
        expandableRowExpanded={expandableRowExpanded}
        expandableRowsComponent={expandableRowsComponent}
        onRowExpandToggled={handleRowExpand}    
      />
    </div>
  );
}

export default OrderDashboard;
