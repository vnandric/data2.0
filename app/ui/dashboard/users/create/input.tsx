import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function InputComponent() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Input
            type="text"
            sx={{ bgcolor: "white" }}
            name="name"
            placeholder="name"
          />
        </Grid>
        <Grid item>
          <Input
            type="text"
            sx={{ bgcolor: "white" }}
            name="email"
            placeholder="Email"
          />
        </Grid>
      </Grid>
    </>
  );
}
