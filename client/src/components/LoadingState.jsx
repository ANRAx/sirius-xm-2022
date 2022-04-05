import { Stack, Skeleton } from "@mui/material";
import "./LoadingState.css";

const LoadingState = () => (
  <div className="loading-state">
    <Skeleton variant="rectangular" width={"100%"} height={118} />
    <Stack
      sx={{ paddingTop: 25 }}
      direction="row"
      spacing={3}
      justifyContent="center"
    >
      <Stack spacing={1}>
        <Skeleton variant="text" width={150} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={150} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={150} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={150} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={150} height={118} />
      </Stack>
    </Stack>
    <div className="loading-table">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton variant="rectangular" width={"100%"} height={118} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton variant="rectangular" width={"100%"} height={118} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
);

export default LoadingState;
