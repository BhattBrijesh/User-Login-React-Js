import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export const SuspenseWrapper = (pros) => {
  const { children } = pros;
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
