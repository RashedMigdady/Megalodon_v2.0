import style from "./trainerList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import React, { useEffect, useState } from "react";
import { getAllTrainers } from '../../../servicesMethods/TrainersServices/trainersServices';

export const TrainerList = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    HTTPServices
      .delete(`http://localhost:5000/trainer/${id}`)
      .then((result) => {
        swal({
          title: "Deleted Trainer Success ",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => { });
  };

  useEffect(async () => {
    const res = await getAllTrainers();
    if (res)
      setData(res);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Trainer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={style.userListUser}>
            <img className={style.userListImg} src={params.row.image} alt="" />
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    { field: "phoneNumber", headerName: "phoneNumber", width: 200 },

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
            <Link to={"/dashboard/trainer/" + params.row.id}>
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
        <h1 className={style.userTitle}>Trainers List</h1>
        <Link to="/dashboard/newTrainer">
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
