import style from "../trainer/trainerList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { host, HTTPServices } from "../../../Helper/HTTPMethod.Helper";

export default function GymList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    HTTPServices
      .delete(`http://localhost:5000/gym/${id}`)
      .then((result) => {
        swal({
          title: "deleted gym success ",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => {
      
      });
  };

  useEffect(() => {
    HTTPServices
      .get("http://localhost:5000/gym")
      .then((result) => {
        setData(result.data.result);
      })
      .catch((err) => {
      
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Gym",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={style.userListUser}>
            <img className={style.userListImg} src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "phoneNumber", headerName: "phoneNumber", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "priceMonthly",
      headerName: "priceMonthly",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/gym/" + params.row.id}>
              <button className={style.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={style.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={style.userList}>
      <div className={style.userTitleContainer}>
        <h1 className={style.userTitle}>Gym List</h1>
        <Link to="/dashboard/newGym">
          <button className={style.userAddButton}>Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
