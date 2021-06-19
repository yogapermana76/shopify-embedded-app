import React from "react";
import { Card, Container, Grid, Typography } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListItem = ({ title, children }) => {
  return (
    <div
      style={{
        marginBottom: 32,
        paddingBottom: 32,
        borderBottom: "1px solid #EBEEF3",
      }}
    >
      <Typography
        style={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: 12,
          lineHeight: "160%",
          color: "#000000",
        }}
      >
        {children}
      </div>
    </div>
  );
};

class FAQ extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ marginTop: 140 }}>
          <Container>
            <Grid container direction="row" spacing={3}>
              <Grid item md={12}>
                <Card
                  style={{
                    padding: "50px 40px",
                    boxShadow: "none",
                    borderRadius: 10,
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: 24,
                      marginBottom: 40,
                    }}
                  >
                    Video Tutorial
                  </Typography>
                  <div style={{ marginBottom: 40 }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      1. How to create Free Shipping Bar?
                    </Typography>
                  </div>
                  <div style={{ marginBottom: 40 }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      2. How to translate Free Shipping Bar?
                    </Typography>
                  </div>
                  <div style={{ marginBottom: 40 }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      3. How to set the Free Shipping Bar to have two shipping
                      goals?
                    </Typography>
                  </div>
                </Card>
              </Grid>
              <Grid item md={12}>
                <Card
                  style={{
                    padding: "50px 40px",
                    borderRadius: 10,
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: 24,
                      marginBottom: 32,
                    }}
                  >
                    FAQ
                  </Typography>
                  <div>
                    <ListItem
                      title="1. How to set the Free Shipping Bar to have two shipping
                        goals?"
                    ></ListItem>
                    <ListItem title="2. How to create multiple bars with different shipping goals for different countries?"></ListItem>
                    <ListItem
                      title="3. Can I use Free Shipping bar with other bar Apps from Hextom?
                      Such as Quick Announcement Bar, Countdown Timer Bar, Email Collection Bar"
                    ></ListItem>
                    <ListItem title="4. What are the extra features offered in the premium plan?"></ListItem>
                    <ListItem title="5. Can Free Shipping Bar display as soon as the website loads?"></ListItem>
                    <ListItem title="6. If you could not find the answers to your questions above?">
                      <p>
                        Please visit our Free Shipping Bar Help Center, or email
                        us at help@zara.com with your question.
                      </p>
                    </ListItem>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default FAQ;
