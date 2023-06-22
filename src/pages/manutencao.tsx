import {
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import Image from "next/image";
import Plus from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import Stop from "@mui/icons-material/StopCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const SettingsPage = () => {
  const handleLogout = () => {
    //remove token
    removeToken();
    //redirect user to login
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <Image
              src="/logobranco.png"
              alt="Logo da empresa"
              width={100}
              height={30}
            />
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          mt: "20",
        }}
      >
        <TextField
          label="Descrição"
          variant="standard"
          sx={{ width: 500, marginLeft: 10, marginTop: 10 }}
        />
        <Select
          label="Tipo de Operação"
          variant="standard"
          sx={{ width: 500, marginLeft: 10, marginTop: 10 }}
        >
          <MenuItem value={1}>Entrada</MenuItem>
          <MenuItem value={2}>Saída</MenuItem>
        </Select>

        <Select
          label="Finaceiro"
          variant="standard"
          sx={{ width: 500, marginLeft: 10, marginTop: 10 }}
        >
          <MenuItem value={1}>Receber</MenuItem>
          <MenuItem value={2}>Pagar</MenuItem>
        </Select>
        <Grid item xs={12} sm={6} alignItems={"flex-end"}>
          <Button variant="outlined" startIcon={<Plus />} color="primary">
            Confirmar
          </Button>
          <Button variant="contained" color="error" startIcon={<Stop />}>
            Cancelar
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default SettingsPage;
function removeToken() {
  throw new Error("Function not implemented.");
}

