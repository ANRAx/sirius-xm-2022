import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { prettyDate } from "../helpers/functions";
import "./TrackTable.css";

const TrackTable = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="track table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ borderBottom: "none" }} align="left" />
          <TableCell sx={{ borderBottom: "none" }} align="left">
            <span className="table-header-title">Podcast Episodes</span>
          </TableCell>
          <TableCell sx={{ borderBottom: "none" }} align="right">
            <span className="table-header-title">Date Created</span>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows?.map((row, i) => (
          <TableRow key={row.id}>
            <TableCell sx={{ borderBottom: "none" }} align="center">
              <span className="table-row-info">{i + 1}</span>
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }} component="th" scope="row">
              <div className="table-row-info">{row.name} </div>
              <span className="table-row-caption">{row.episode}</span>
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }} align="right">
              <div className="table-row-created">{prettyDate(row.created)}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TrackTable;
