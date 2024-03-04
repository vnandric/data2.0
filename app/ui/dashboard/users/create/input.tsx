import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function InputComponent() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box>
            <Input
              type="text"
              sx={{ bgcolor: "white" }}
              name="name"
              placeholder="name"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Input
              type="text"
              sx={{ bgcolor: "white" }}
              name="email"
              placeholder="Email"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
