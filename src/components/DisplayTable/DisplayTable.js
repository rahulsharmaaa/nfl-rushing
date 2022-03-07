import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import formatTableData from "../../utils/formatTableData";

export default function DisplayTable({ data }) {
  return (
    <div
      style={{ height: "90vh", width: "90vw", margin: "50px auto 50px auto" }}
      data-testid='mainDisplayTable'
    >
      <DataGrid
        {...formatTableData(data)}
        getRowId={(row) => row.Player + row.Team}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
