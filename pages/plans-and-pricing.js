import React from "react";
import { Card, Container, Grid } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import { Check } from "@material-ui/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListItem = ({ itemText, secondaryItemText, type }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Poppins",
        fontSize: 16,
        borderBottom: "1px solid #EBEEF3",
        paddingBottom: 20,
        marginBottom: 20,
      }}
    >
      <div>{itemText}</div>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          color: type === "isEmpty" ? "#98A1B0" : "#3246D2",
        }}
      >
        {type === "checked" ? (
          <Check style={{ fontSize: 30 }} />
        ) : type === "isEmpty" ? (
          "-"
        ) : (
          secondaryItemText
        )}
      </div>
    </div>
  );
};

const PricingTypeCard = ({ type, price, subTitle, isSelected }) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "356px",
        background:
          isSelected &&
          "linear-gradient(147.74deg, #3246D2 -4.78%, #00CFFD 130.96%)",
        boxShadow: "0px 3px 40px rgba(0, 0, 0, 0.02)",
        borderRadius: "10px",
        color: isSelected ? "#FFFFFF" : "#000000",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "18px",
            marginBottom: 16,
            textTransform: "capitalize",
          }}
        >
          {type}
        </h3>
        <h3
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "32px",
            marginBottom: 16,
          }}
        >
          {type === "basic" ? (
            "FREE"
          ) : (
            <div>
              {price}
              <span
                style={{
                  fontSize: 16,
                  color: isSelected ? "#FFFFFF" : "#98A1B0",
                }}
              >
                {" "}
                /Month
              </span>
            </div>
          )}
        </h3>
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
          }}
        >
          {subTitle}
        </span>
      </div>
    </Card>
  );
};

class PlansAndPricing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ marginTop: 140 }}>
          <Container>
            <Grid container direction="row" spacing={3}>
              <Grid item md={6}>
                <PricingTypeCard isSelected type="basic" />
              </Grid>
              <Grid item md={6}>
                <PricingTypeCard
                  type="premium"
                  price="$9.99"
                  subTitle="Save 18% for yearly billing"
                />
              </Grid>
              <Grid item md={12}>
                <Card
                  style={{
                    padding: 50,
                    borderRadius: 10,
                    boxShadow: "none",
                  }}
                >
                  <ListItem
                    itemText="Number of Active Bars"
                    type="text"
                    secondaryItemText="Unlimited"
                  />
                  <ListItem
                    itemText="Progressive Message on Bar **"
                    type="checked"
                  />
                  <ListItem
                    itemText="Call to Action, add link to bar"
                    type="checked"
                  />
                  <ListItem
                    itemText="Configurable Bar Position"
                    type="checked"
                  />
                  <ListItem itemText="Emoji support on bar" type="checked" />
                  <ListItem itemText="Exclude Page Targeting" type="checked" />
                  <ListItem itemText="Device Targeting" type="checked" />
                  <ListItem itemText="Geo Targetting" type="isEmpty" />
                  <ListItem itemText="Customer Targetting" type="isEmpty" />
                  <ListItem
                    itemText="Auto Currency Conversion of Money Amount on Bar ***"
                    type="isEmpty"
                  />
                  <ListItem itemText="Bar Background Image" type="isEmpty" />
                  <ListItem
                    itemText="Upload your own bar background image"
                    type="isEmpty"
                  />
                  <ListItem
                    itemText="Bar Performance Tracking ****"
                    type="isEmpty"
                  />
                  <ListItem itemText="Auto Scheduling" type="isEmpty" />
                  <ListItem itemText="Email Support" type="checked" />
                </Card>
              </Grid>
              <Grid item md={12}>
                <Card
                  style={{
                    padding: "50px 40px",
                    borderRadius: 10,
                    borderTop: "10px solid #3246D2",
                    boxShadow: "0px 3px 40px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <div style={{ marginBottom: 40 }}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label
                          style={{
                            fontSize: 16,
                            color: "#000000",
                          }}
                        >
                          <span>Name:</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          size="lg"
                          style={{
                            background: "rgba(50, 70, 210, 0.1)",
                            height: 50,
                            border: "none",
                            fontSize: 16,
                          }}
                        />
                        <Form.Text
                          className="text-muted"
                          style={{ fontSize: 12 }}
                        >
                          The discount code will only apply to the new plan, not
                          to your current plan. The same discount code can only
                          be used once for your store.
                        </Form.Text>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  <div
                    style={{
                      background: "rgba(50, 70, 210, 0.05)",
                      borderTop: "1px solid #222222",
                      padding: 30,
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      lineHeight: "18px",
                    }}
                  >
                    <p>
                      * Number of Active Bars: you can configure as many bar as
                      you want. However, only 1 can be active in Free plan. In
                      the premium, you can have unlimited active bars on
                      different pages, and/or target different geo locations,
                      and/or during different time periods.
                    </p>
                    <p>
                      ** Progressive Message on Bar: bar displays customers how
                      much more should be added to the shopping cart in order to
                      get the free shipping.
                    </p>
                    <p>
                      *** Auto Currency Conversion of Money Amount on Bar: the
                      free shipping goal amount can be automatically converted
                      into visitors' local currencies based on their geo
                      location
                    </p>
                    <p>
                      **** Bar Performance Tracking: Tracking the number of
                      achieving the free shipping goal{" "}
                    </p>
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

export default PlansAndPricing;
