import React from "react";
import { Typography } from "@material-ui/core";

export default function FooterCopyrightNotice() {
  return (
    <Typography variant="caption">
      &copy; Copyright {new Date().getFullYear()},{" "}
      <a target="_blank" rel="noreferrer" href="https://www.telephantcloud.com">
        Telephant Cloud
      </a>
    </Typography>
  );
}
