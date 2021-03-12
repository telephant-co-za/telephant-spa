import React from 'react';
import { Button, Card, Fab, CardHeader, CardActions, CardActionArea, Box } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived'
import DashboardActionCardButton from '../components/DashboardActionCardButton'

export default function DashboardActionCard() {

    return (
        <Card>
            <CardHeader title="What would you like to do today?" />
            <Box>
                <DashboardActionCardButton text='Buy Airtime' icon={<CreditCardIcon />} />
                <DashboardActionCardButton text='Use Airtime' icon={<PhoneInTalkIcon />} />
                <DashboardActionCardButton text='Send Airtime' icon={<SendIcon />} />
                <DashboardActionCardButton text='Request Airtime' icon={<CallReceivedIcon />} />
            </Box>
        </Card>
    );
}