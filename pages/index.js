import React from "react";
// import { Card, EmptyState, Layout, Page } from '@shopify/polaris';
// import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import { Card, Container, Typography, Grid, Button } from "@material-ui/core";
import { Form, Col, Table } from "react-bootstrap";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container style={{ marginTop: 140 }}>
          <Grid container direction="column" spacing={3}>
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 24, marginBottom: 24 }}
                >
                  How To use:
                </Typography>
                <p style={{ fontSize: 16, marginBottom: 24 }}>
                  Follow these steps to setup free shipping with a minimum order
                  value for your Shopify store:
                </p>
                <ol style={{ fontSize: 16, marginLeft: -20 }}>
                  <li>Go to Shopify Admin - Setting - Shipping</li>
                  <li>Open the relevant Shipping Profile</li>
                  <li>Add a Shipping Zone to this profile</li>
                  <li>Add Shipping Methods to this zone</li>
                  <li>Add a Condition and select "Based on order price"</li>
                  <li>
                    Enter a minimum order price (same as the goal in the Free
                    Shipping Bar app)
                  </li>
                  <li>When you're finished, click "Done"</li>
                </ol>
                <p style={{ fontSize: 16 }}>
                  Now you can create a bar by clicking the "Create New" button
                  below
                </p>
              </Card>
            </Grid>

            {/* START: Free Shipping Bar */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Free Shipping Bar (FSB) Dashboard
                </Typography>
                <Table responsive style={{ marginBottom: 50 }}>
                  <thead style={{ fontSize: 16 }}>
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Geo Targe</th>
                      <th>Excluded Countries</th>
                      <th>Achievement</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: 14 }}>
                    <tr>
                      <td>Beauty Shipping Bar</td>
                      <td>Active</td>
                      <td>All Countries</td>
                      <td>N/A</td>
                      <td>Premium Only</td>
                    </tr>
                    <tr>
                      <td>Beauty Shipping Bar</td>
                      <td>pending</td>
                      <td>All Countries</td>
                      <td>N/A</td>
                      <td>Premium Only</td>
                    </tr>
                    <tr>
                      <td>Beauty Shipping Bar</td>
                      <td>Active</td>
                      <td>All Countries</td>
                      <td>N/A</td>
                      <td>Premium Only</td>
                    </tr>
                  </tbody>
                </Table>
                <Grid justify="flex-end" container direction="row">
                  <Button
                    style={{
                      background: "#32D255",
                      borderRadius: 30,
                      border: "1px solid #32D255",
                      padding: "10px 40px",
                      fontSize: 14,
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      width: 152,
                      height: 41,
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      background:
                        "linear-gradient(147.74deg, #3246D2 -4.78%, #00CFFD 130.96%)",
                      borderRadius: 30,
                      padding: "10px 40px",
                      fontSize: 14,
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      marginLeft: 24,
                      width: 152,
                      height: 41,
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Card>
            </Grid>
            {/* END: Free Shipping Bar */}

            {/* START: Basic Template*/}
            {/* <Grid item>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    marginBottom: 32,
                  }}
                >
                  Preview
                </Typography>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    marginBottom: 32,
                  }}
                >
                  Basic Template
                </Typography>
              </Card>
            </Grid> */}
            {/* END: Basic Template */}

            {/* START: Preview */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Premium Template
                </Typography>
              </Card>
            </Grid>
            {/* END: Preview */}

            {/* START: Content Configuration */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Content Configuration
                </Typography>
                <div>
                  <Form.Row>
                    <Form.Group as={Col} md={6}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span>Name:</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        size="lg"
                        style={{
                          background: "rgba(50, 70, 210, 0.1)",
                          height: 50,
                          border: "none",
                          fontSize: 16,
                        }}
                      >
                        <option>Indonesia Rupiah - IDR</option>
                      </Form.Control>
                      <Form.Text
                        className="text-muted"
                        style={{ fontSize: 12 }}
                      >
                        For your own internal reference - only you can see it
                      </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                      <Form.Row>
                        <Form.Group as={Col} md={6}>
                          <Form.Label
                            style={{
                              fontSize: 16,
                              color: "#000000",
                            }}
                          >
                            <span>Free Shipping Goals :</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            style={{
                              background: "rgba(50, 70, 210, 0.1)",
                              height: 50,
                              border: "none",
                              fontSize: 16,
                            }}
                          />
                        </Form.Group>
                        <Form.Group as={Col} md={6}>
                          <Form.Label
                            style={{
                              fontSize: 16,
                              color: "#000000",
                            }}
                          >
                            <span>Add Secondary Goals :</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            style={{
                              background: "rgba(50, 70, 210, 0.1)",
                              height: 50,
                              border: "none",
                              fontSize: 16,
                            }}
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md={5}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span>Inital Message :</span>
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
                        Display when cart is empty
                      </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md={2}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span style={{ color: "transparent" }}>null</span>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        size="lg"
                        style={{
                          background: "rgba(50, 70, 210, 0.25)",
                          height: 50,
                          border: "none",
                          fontSize: 16,
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={5}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span style={{ color: "transparent" }}>null</span>
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
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md={5}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span>Progress Message :</span>
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
                        Display when cart is empty
                      </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md={2}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span style={{ color: "transparent" }}>null</span>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        size="lg"
                        style={{
                          background: "rgba(50, 70, 210, 0.25)",
                          height: 50,
                          border: "none",
                          fontSize: 16,
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={5}>
                      <Form.Label
                        style={{
                          fontSize: 16,
                          color: "#000000",
                        }}
                      >
                        <span style={{ color: "transparent" }}>null</span>
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
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md={6}>
                      <Form.Row>
                        <Form.Group as={Col} md={12}>
                          <Form.Label
                            style={{
                              fontSize: 16,
                              color: "#000000",
                            }}
                          >
                            <span>Goal Achieved Message :</span>
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
                            Displays when cart value is greater than goal
                          </Form.Text>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} md={12}>
                          <Form.Label
                            style={{
                              fontSize: 16,
                              color: "#000000",
                            }}
                          >
                            <span>Included Close Button :</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            size="lg"
                            style={{
                              background: "rgba(50, 70, 210, 0.1)",
                              height: 50,
                              border: "none",
                              fontSize: 16,
                            }}
                          >
                            <option>NO</option>
                          </Form.Control>
                          <Form.Text
                            className="text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Places an "x" button on the bar so that users can
                            close it manually
                          </Form.Text>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} md={12}>
                          <Form.Label
                            style={{
                              fontSize: 16,
                              color: "#000000",
                            }}
                          >
                            <span>Add Link to the Bar (optional) :</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            size="lg"
                            style={{
                              background: "rgba(50, 70, 210, 0.1)",
                              height: 50,
                              border: "none",
                              fontSize: 16,
                            }}
                          >
                            <option>OFF</option>
                          </Form.Control>
                          <Form.Text
                            className="text-muted"
                            style={{ fontSize: 12 }}
                          >
                            The bar will be clickable after adding a link
                          </Form.Text>
                        </Form.Group>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                      <FormControl margin="dense" style={{ marginLeft: 14 }}>
                        <FormLabel
                          style={{
                            fontSize: 16,
                            color: "#000000",
                            marginBottom: 17,
                          }}
                        >
                          Select Display Position :
                        </FormLabel>
                        <RadioGroup name="position" value={"female"}>
                          <FormControlLabel
                            value="female"
                            control={<Radio color="primary" />}
                            label="Top bar pushes down the rest of the page"
                            style={{
                              marginTop: -15,
                            }}
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio color="primary" />}
                            label="Top bar pushes down the rest of the page (always visible while scrolling)"
                            style={{
                              marginTop: -15,
                            }}
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Top bar overlaps top of the page"
                            style={{
                              marginTop: -15,
                            }}
                          />
                          <FormControlLabel
                            value="disabled"
                            control={<Radio color="primary" />}
                            label="Top bar overlaps top of the page (always visible while scrolling)"
                            style={{
                              marginTop: -15,
                            }}
                          />
                          <FormControlLabel
                            value="disabled"
                            control={<Radio color="primary" />}
                            label="Bottom bar overlaps bottom of the page (always visible while scrolling)"
                            style={{
                              marginTop: -15,
                            }}
                          />
                          <FormControlLabel
                            value="disabled"
                            control={<Radio color="primary" />}
                            label="Manual Placement – Allows manual insertion of the bar’s code into your theme."
                            style={{
                              marginTop: -15,
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Form.Group>
                  </Form.Row>
                </div>
              </Card>
            </Grid>
            {/* END: Content Configuration */}

            {/* START: Currency Configuration */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Currency Configuration
                </Typography>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label
                      style={{
                        fontSize: 16,
                        color: "#000000",
                      }}
                    >
                      <span>Currency:</span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="lg"
                      style={{
                        background: "rgba(50, 70, 210, 0.1)",
                        height: 50,
                        border: "none",
                        fontSize: 16,
                      }}
                    >
                      <option>Indonesia Rupiah - IDR</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label
                      style={{
                        fontSize: 16,
                        color: "#000000",
                      }}
                    >
                      <span>Currency Symbol:</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      style={{
                        background: "rgba(50, 70, 210, 0.1)",
                        height: 50,
                        border: "none",
                        fontSize: 16,
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label
                      style={{
                        fontSize: 16,
                        color: "#000000",
                      }}
                    >
                      <span>Auto Currency Conversion :</span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="lg"
                      style={{
                        background: "rgba(50, 70, 210, 0.1)",
                        height: 50,
                        border: "none",
                        fontSize: 16,
                      }}
                    >
                      <option>OFF</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label
                      style={{
                        fontSize: 16,
                        color: "#000000",
                      }}
                    >
                      <span>NOTE:</span>
                    </Form.Label>
                    <div
                      style={{
                        fontSize: 12,
                        textAlign: "justify",
                        color: "#98A1B0",
                      }}
                    >
                      If native Shopify multi-currencies is configured on your
                      store, this Currency Configuration will be disabled. You
                      can enable this if your website supports auto-currency
                      detection. FSB auto-converts the goal value to the
                      visitors' local currency
                    </div>
                  </Form.Group>
                </Form.Row>
              </Card>
            </Grid>
            {/* END: Currency Configuration */}

            {/* START: Style Configuration */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Style Configuration
                </Typography>
              </Card>
            </Grid>
            {/* END: Style Configuration */}

            {/* START: Targeting Configuration */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Targeting Configuration
                </Typography>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <FormControl style={{ marginBottom: 12 }}>
                      <FormLabel
                        style={{
                          fontSize: 16,
                          color: "#000000",
                          marginBottom: 17,
                        }}
                      >
                        Display on Page :
                      </FormLabel>
                      <RadioGroup name="position" value={"female"}>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="All Pages"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Homepage Only"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Only on Page with URL (Copy and Paste the URL below)"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="disabled"
                          control={<Radio color="primary" />}
                          label="Only on Pages that contain the keyword in their URLs"
                          style={{
                            marginTop: -15,
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl style={{ marginBottom: 12 }}>
                      <FormLabel
                        style={{
                          fontSize: 16,
                          color: "#000000",
                          marginBottom: 17,
                        }}
                      >
                        Exclude Page :
                      </FormLabel>
                      <RadioGroup name="position" value={"female"}>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Do NOT exclude any page"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Homepage"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Only exclude Page with URL (Copy and Paste the URL below)"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Only exclude Pages that contain the keyword in their URLs"
                          style={{
                            marginTop: -15,
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl style={{ marginBottom: 12 }}>
                      <FormLabel
                        style={{
                          fontSize: 16,
                          color: "#000000",
                          marginBottom: 17,
                        }}
                      >
                        Device Target :
                      </FormLabel>
                      <RadioGroup name="position" value={"female"}>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Display on both desktop and mobile browsers. On mobile browsers font size will be capped to achieve optimum display"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Display only on desktop browsers"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Top bar overlaps top of the page"
                          style={{
                            marginTop: -15,
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl style={{ marginBottom: 12 }}>
                      <FormLabel
                        style={{
                          fontSize: 16,
                          color: "#000000",
                          marginBottom: 17,
                        }}
                      >
                        Customer Targetting :
                      </FormLabel>
                      <RadioGroup name="position" value={"female"}>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="All customers"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Target customers based on customer tag"
                          style={{
                            marginTop: -15,
                          }}
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Target customers based on lifetime spent"
                          style={{
                            marginTop: -15,
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Row>
                      <Form.Group as={Col} md={12}>
                        <Form.Label
                          style={{
                            fontSize: 16,
                            color: "#000000",
                          }}
                        >
                          <span>Get Location Target :</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          size="lg"
                          placeholder="Choose countries you want to target"
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
                          If you want to display for all countries, leave this
                          field blank
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Col} md={12}>
                        <Form.Label
                          style={{
                            fontSize: 16,
                            color: "#000000",
                          }}
                        >
                          <span>Exclude Geo Location :</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          size="lg"
                          placeholder="Choose countries you want to target"
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
                          If you do not want to exlucde any countries, leave
                          this field blank
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Col} md={12}>
                        <FormControl
                          style={{ marginBottom: 12, marginTop: 16 }}
                        >
                          <FormLabel
                            style={{
                              fontSize: 16,
                              color: "#000000",
                              marginBottom: 17,
                            }}
                          >
                            Display Schedule :
                          </FormLabel>
                          <RadioGroup name="position" value={"female"}>
                            <FormControlLabel
                              value="female"
                              control={<Radio color="primary" />}
                              label="Always display"
                              style={{
                                marginTop: -15,
                              }}
                            />
                            <FormControlLabel
                              value="male"
                              control={<Radio color="primary" />}
                              label="Display only on mobile browsers"
                              style={{
                                marginTop: -15,
                              }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Form.Group>
                    </Form.Row>
                  </Form.Group>
                </Form.Row>
              </Card>
            </Grid>
            {/* END: Targeting Configuration */}

            {/* START: Custom Code Configuration */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Typography
                  style={{ fontWeight: 600, fontSize: 18, marginBottom: 32 }}
                >
                  Custom Code Configuration
                </Typography>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label
                    style={{
                      fontSize: 16,
                      color: "#000000",
                      marginBottom: 16,
                    }}
                  >
                    <span>Custom Code:</span>
                  </Form.Label>
                  <Form.Control as="textarea" rows={15} />
                </Form.Group>
                <div style={{ fontSize: 12, lineHeight: 2 }}>
                  <div>
                    <span style={{ color: "#3246D2" }}>Horizontal Zoom:</span>{" "}
                    Good for displaying a pattern based background image
                  </div>
                  <div>
                    <span style={{ color: "#3246D2" }}>Vertical Scroll:</span> A
                    Background image scrolled vertically. Good for showing a
                    product image.
                  </div>
                  <div>
                    <span style={{ color: "#3246D2" }}>
                      Vertical Scroll while Website is Scrolled:
                    </span>{" "}
                    Good for displaying hero or product images
                  </div>
                </div>
              </Card>
            </Grid>
            {/* END: Custom Code Configuration */}

            {/* START: Save And Cancel */}
            <Grid item lg={12}>
              <Card style={{ padding: 20, boxShadow: "none" }}>
                <Grid justify="flex-end" container direction="row">
                  <Button
                    style={{
                      borderRadius: 30,
                      border: "1px solid #3246D2",
                      padding: "10px 40px",
                      fontSize: 14,
                      color: "#3246D2",
                      textTransform: "capitalize",
                      width: 115,
                      height: 41,
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      background:
                        "linear-gradient(147.74deg, #3246D2 -4.78%, #00CFFD 130.96%)",
                      borderRadius: 30,
                      padding: "10px 40px",
                      fontSize: 14,
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      marginLeft: 24,
                      width: 115,
                      height: 41,
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Card>
            </Grid>
            {/* END: Save And Cancel */}
          </Grid>
        </Container>
        <Footer />
      </React.Fragment>

      // <Page>
      //   <Layout>
      //     <Layout.AnnotatedSection
      //       title="Example Title"
      //       description="This is just an example description"
      //     >
      //       <Card>
      //         <div>
      //           Example
      //         </div>
      //       </Card>
      //     </Layout.AnnotatedSection>
      //   </Layout>
      // </Page>
      //   <Page>
      //     <TitleBar
      //       title="Sample App"
      //       primaryAction={{
      //         content: 'Select products',
      //       }}
      //     />
      //     <ResourcePicker
      //       resourceType="Product"
      //       showVariants={false}
      //       open={this.state.open}
      //       onSelection={(resources) => this.handleSelection(resources)}
      //       onCancel={() => this.setState({ open: false })}
      //     />
      //     <Layout>
      //       <EmptyState
      //         heading="Discount your products temporarily"
      //         action={{
      //           content: 'Select products',
      //           onAction: () => this.setState({ open: true }),
      //         }}
      //         image={img}
      //       >
      //         <p>Select products to change their price temporarily.</p>
      //       </EmptyState>
      //     </Layout>
      //   </Page>
    );
  }
  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
  };
}

export default Index;
