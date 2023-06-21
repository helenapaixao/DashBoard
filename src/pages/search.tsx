import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

interface TableData {
  id: number;
  name: string;
  age: number;
}

const data: TableData[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Bob Johnson", age: 40 },
];

const SearchPage: React.FC = () => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image
              src="/logobranco.png"
              alt="Logo da empresa"
              width={100}
              height={50}
            />
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Table sx={{ marginTop: 10 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={6} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Button variant="contained" color="primary">
                Incluir
              </Button>
              <TextField
                id="outlined-basic"
                label="Pesquisar"
                variant="outlined"
                sx={{ width: 500, marginLeft: 10, marginTop: 10 }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Estoque</TableCell>
            <TableCell>Financeiro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SearchPage;
