import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function InputComponent() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ bgcolor: "white" }}>
            <Input type="text" name="name" placeholder="name" />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: "white" }}>
            <Input type="text" name="email" placeholder="Email" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
