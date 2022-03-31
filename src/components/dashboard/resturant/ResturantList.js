import style from "../trainer/trainerList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import React, { useEffect, useState } from "react";
import { getAllRestaurants } from '../../../servicesMethods/RestaurantsServices/RestaurantsServices';

export default function ResturantList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    HTTPServices
      .delete(`http://localhost:5000/resturan/${id}`)
      .then((result) => {
        swal({
          title: "Deleted Resturant Success ",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => { });
  };

  useEffect(async () => {
    const res = await getAllRestaurants();
    if(res)
    setData(res);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Restaurants",
      width: 300,
      renderCell: (params) => {
        return (
          <div className={style.userListUser}>
            <img className={style.userListImg} src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "monthlyPrice",
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
            <Link to={"/dashboard/restaurant/" + params.row.id}>
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
        <h1 className={style.userTitle}>Restaurant List</h1>
        <Link to="/dashboard/newRestaurant">
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
