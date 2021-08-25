import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../img/1.jpeg";
import img2 from "../img/2.jpeg";
import img3 from "../img/3.jpeg";
import img4 from "../img/4.jpeg";
import img5 from "../img/5.jpeg";
import img6 from "../img/6.jpeg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function PageAbout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} margin={3} height="500">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} margin={3}>
              <CardContent>
                <CardMedia component="img" image={img1} height="225" />
                <Typography gutterBottom variant="h5" component="h2">
                  Context
                </Typography>
                <p>
                  In South Africa, between 20 and 22 million people use
                  smartphones, accounting for roughly one-third of the
                  population. A significant proportion of users are using the
                  prepaid model to access voice and data services. Prepaid
                  mobile data income has more than tripled from 2015 to 2020.
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} margin={3} height="500">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} className={classes.root}>
              <CardContent>
                <CardMedia component="img" image={img2} height="225" />
                <Typography gutterBottom variant="h5" component="h2">
                  Situation
                </Typography>
                <p>
                  Uber, Uber Eats, Taxify, Mr Delivery, and Take-a-Lot have all
                  created numerous job opportunities for drivers. Large fleets
                  of motorcycle delivery drivers and taxi drivers are on the
                  road 24 hours a day, seven days a week. They require data to
                  use these applications and collectively spend millions of Rand
                  per month.
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} margin={3} height="450">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} className={classes.root}>
              <CardContent>
                <CardMedia component="img" image={img3} height="225" />
                <Typography gutterBottom variant="h5" component="h2">
                  Problem
                </Typography>
                <p>
                  Many people may not have access to free wifi in and around the
                  city at cafes or restaurants, as they do in Europe and
                  America. Buying airtime is an inefficient and costly endeavor,
                  as a trip to the mall or the CBD can easily cost R20.00 by
                  taxi.
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} margin={3} height="450">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} className={classes.root}>
              <CardMedia component="img" image={img4} height="225" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Opportunity
                </Typography>
                <p>
                  I became aware that developers can utilize Africa&#39;s
                  Talking&#39;s API to create apps that send airtime to phones.
                  The company offers this service on major cell phone networks
                  in numerous African nations, including South Africa. To assist{" "}
                  <em>prepaid</em> customers in overcoming the difficulties of
                  getting airtime I have set out to to create a web app to
                  assist and find opportunity in solving the following potential
                  use cases:
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} margin={3} height="450">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} className={classes.root}>
              <CardContent>
                <CardMedia component="img" image={img5} height="225" />
                <Typography gutterBottom variant="h5" component="h2">
                  Use Cases
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  Airtime Vendors
                </Typography>
                <p>
                  Vendors will be able to send clients airtime via the app. As a
                  result, the vendor will give airtime in exchange for cash;
                  this will save the Uber Delivery driver time because he will
                  not have to go to a retail store to acquire airtime before his
                  shift. He&#39;ll buy it from airtime sellers who meet them in
                  the parking lots of restaurants. This expands the ecosystem of
                  the burgeoning sharing economy&#39;s opportunities and serves
                  as a point of entry and exit for liquid assets into and out of
                  the broader system.
                </p>

                <Typography gutterBottom variant="h6" component="h3">
                  Informal Traders and Spaza Shops (i.e. localised retailers)
                </Typography>
                <p>
                  In every neighborhood and township across the city are street
                  vendors and spaza shops. These vendors are generally very
                  close to where consumers work, live or travel. Unlike huge
                  retail enterprises, which have vast IT systems to manage,
                  control, and supply airtime and may interface directly into
                  mobile networks, these mall shops will be able to buy, sell,
                  control, manage, and issue airtime using only a mobile app or
                  a USSD interface, thanks to the Telephant app. Despite the low
                  margins on air time, the vendor will find a method to attract
                  customers, while the consumer will gain from the
                  convenience.It also gives the informal trader a cash
                  management mechanism in a world where street crime is a major
                  concern.
                </p>
                <Typography gutterBottom variant="h6" component="h3">
                  Employers
                </Typography>
                <p>
                  Employers require air time to communicate with their staff.
                  Domestic helpers in South Africa, for example, assist with
                  laundry, washing, gardening, construction/painting, and other
                  duties. Many households may use the app to provide airtime to
                  their domestic workers as part of their wage and to keep in
                  contact with them. Larger businesses could utilize the
                  Telephant API to connect their payroll, tax, and ERP systems
                  to the service. This will enable these businesses to grant
                  monthly airtime allocations to their employees. Companies
                  often do not provide wifi or cell phone contracts to all
                  employees; only white collar workers receive these benefits.
                  However, with remote work during the pandemic, many types of
                  business communication, meeting, support, customer engagement,
                  chats, and company messages are accessed via digital channels;
                  however, denying airtime data to all workers is clearly a
                  discriminatory labor practice.
                </p>
                <Typography gutterBottom variant="h6" component="h3">
                  Banking
                </Typography>
                <p>
                  In South Africa, there are a huge number of people who are{" "}
                  <em>&quot;unbankable.&quot;</em> The main reason for this is
                  that the cost of opening and keeping a bank account is
                  disproportionately expensive in comparison to income. People
                  can share <em>&quot;credit&quot;</em> on the app and receive
                  some form of transactional banking services as a result of
                  using it. The app&#39;s credit could begin to have the same
                  utility as a currency. As an illustration, oftentimes if you
                  buy a piece of fruit from a street vendor say for 80c and you
                  need 20c in change, you may get your change in the form of
                  sweets (Chappies chewing gums). Among informal traders,
                  Chappies chewing gum has practically become a type of cash for
                  small denominations of currency. Similarly, the liquidity of
                  the system will be equal to its utility. People need airtime
                  and data, and they&#39;ll be able to send it in little amounts
                  because of the low transaction fees, effectively turning the
                  app&#39;s credit into a cash substitute at the grassroots,
                  micro level. As cash reserves increase additional services can
                  be incorporated.
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4} margin={3} height="450">
          <Box p={1} bgcolor="background.paper">
            <Card xs={4} className={classes.root}>
              <CardContent>
                <CardMedia component="img" image={img6} height="225" />
                <Typography gutterBottom variant="h5" component="h4">
                  Conclusion
                </Typography>
                <p>
                  The Telephant App is now available as a beta version. The
                  project's goal was to meet the Enterprise Web Development
                  assignment's specifications while also serving as a proof of
                  concept that could be turned into a live app and pitched to
                  investors. An app like this, in my opinion, would be extremely
                  beneficial to the communities it wishes to serve.
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
