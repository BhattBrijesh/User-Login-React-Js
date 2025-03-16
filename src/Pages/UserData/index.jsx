import {
  Button,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import { getUserDetail } from "../../Components/Functions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const navigate = useNavigate();
  const [userDataList, setUserDataList] = useState([]);
  const handleDateFormatter = (date) => {
    return dayjs(date).format("DD/MM/YYYY hh:mm:ss A");
  };
  useEffect(() => {
    handleGetUserDetail();
  }, []);
  const handleGetUserDetail = async () => {
    const res = await getUserDetail();
    if (res?.data?.message === "User Detail fetched successfully") {
      setUserDataList(res?.data?.data);
    }
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Grid2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "First Name",
                  "LastName",
                  "Email",
                  "Password",
                  "JobTile",
                  "Created ON",
                  "Updated ON",
                ].map((item, key) => (
                  <TableCell key={key}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(userDataList) &&
                userDataList.map((item, key) => {
                  const {
                    firstName = "",
                    lastName = "",
                    password = "",
                    email = "",
                    jobTitle = "",
                    createdAt = "",
                    updatedAt = "",
                  } = item;
                  return (
                    <TableRow key={key}>
                      <TableCell>{firstName}</TableCell>
                      <TableCell>{lastName}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{password}</TableCell>
                      <TableCell>{jobTitle}</TableCell>
                      <TableCell>{handleDateFormatter(createdAt)}</TableCell>
                      <TableCell>{handleDateFormatter(updatedAt)}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
export default UserData;
