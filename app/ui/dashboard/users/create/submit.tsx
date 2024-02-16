"use client";
import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";
import Box from "@mui/material/Box";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} sx={{ bgcolor: "white" }}>
      <Box sx={{ bgcolor: "white", width: "150px", height: "25px" }}>
        Create User
      </Box>
    </Button>
  );
}
