import React from "react";
import { Card, CardHeader, Box } from "@material-ui/core";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import SendIcon from "@material-ui/icons/Send";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import DashboardActionCardButton from "../components/DashboardActionCardButton";

export default function DashboardActionCard() {
  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="What would you like to do today?" />
      <Box mb={5}>
        <DashboardActionCardButton icon={<CreditCardIcon />} action="buy" />
        <DashboardActionCardButton icon={<PhoneInTalkIcon />} action="use" />
        <DashboardActionCardButton icon={<SendIcon />} action="send" />
        <DashboardActionCardButton
          icon={<CallReceivedIcon />}
          action="request"
        />
      </Box>
    </Card>
  );
}
