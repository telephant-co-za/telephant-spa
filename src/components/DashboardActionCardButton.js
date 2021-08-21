import React from "react";
import { Fab, CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function DashboardActionCardButton({ icon, action }) {
  const text = `${action} Airtime`;
  const link = `/airtime/${action}`;
  return (
    <CardActions style={{ justifyContent: "center" }}>
      <Fab
        component={Link}
        to={link}
        variant="extended"
        color="primary"
        style={{ width: "200px" }}
      >
        {icon}
        {text}
      </Fab>
    </CardActions>
  );
}
