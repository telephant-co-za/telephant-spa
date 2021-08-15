import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

export default function PageAbout() {
  return (
    <>
      <Card>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Context
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In South Africa, between 20 and 22 million individuals use
            smartphones, accounting for roughly one-third of the population.
            However, with more than 90 million mobile connections, the aggregate
            number of connections is substantially larger, as dual SIM phones
            are popular and widely utilized in the country and across the
            continent. A significant proportion of users are using the prepaid
            model to access voice and data services. The prepaid model is
            colloquially known as pay-as-you-go. As adoption of mobile phones
            and data apps have increased revenues have reflected the growth.
            Prepaid mobile data income has expanded rapidly in South Africa,
            more than tripling from 2015 to 2020, reaching around 2.1 billion US
            dollars in 2020, and surpassing prepaid mobile voice revenue for the
            first time during this period.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
