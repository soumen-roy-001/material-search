import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import axios from "axios";

const parties = [
  {
    aliasName: "Alpha Business",
    primaryContactId: "5b630bc5b4dbfe0014f68aba",
    gstBusinessType: "regular",
    address: "Gautam Tower, Near 'B' Cabin, off Gokhale Road, Thane",
    city: "Thane",
    state: "MH",
    pincode: "400601",
    country: "India",
    gstin: "26CVBPT2222T1Z5",
    name: "Alpha Business Test 1533217732",
    industry: "IT",
    pancard: "CVBPT2222T",
    id: "5b630bc5b4dbfe0014f68ab9"
  },
  {
    aliasName: "Jewl",
    primaryContactId: "5b654cdf881c1d0014f4f31f",
    gstBusinessType: "Regular GST Business",
    address: "Shop 123",
    city: "Mumbai",
    state: "MH",
    pincode: "400012",
    country: "India",
    gstin: "AJ122458493",
    name: "Jewel",
    industry: "",
    pancard: "",
    id: "5b654cdf881c1d0014f4f31e"
  },
  {
    aliasName: "Aakash",
    primaryContactId: "5b879d5dd1f79c0014a7353d",
    gstBusinessType: "Regular GST Business",
    address:
      "36,Swami Dayanand Marg, 36,Swami Dayanand Marg, SHRI GANGANAGAR [ RAJ ]-335001",
    state: "RJ",
    pincode: "335001",
    country: "India",
    name: "Aakash Ganga Cosmetics",
    id: "5b879d09d1f79c0014a7276a"
  },
  {
    aliasName: "AGRA-A TO Z",
    primaryContactId: "5b879d14d1f79c0014a72cb9",
    gstBusinessType: "Regular GST Business",
    address:
      "16/18,Satya Narayan Market, 16/18,Satya Narayan Market, Luhar Gali, Agra",
    state: "UP",
    pincode: "0",
    country: "India",
    name: "AGRA-A TO Z IMMITATION JEWELLERS",
    id: "5b879d09d1f79c0014a7276b"
  },
  {
    aliasName: "Raj",
    primaryContactId: "5b879d10d1f79c0014a72a38",
    gstBusinessType: "Regular GST Business",
    address: "Lohar Gali, Lohar Gali, 31/103,Vivek Complex, AGRA",
    state: "UP",
    pincode: "0",
    country: "India",
    name: "AGRA KUMAR & BROS",
    id: "5b879d09d1f79c0014a7276c"
  }
];

const partiesBalance = [
  {
    balance: "11000.50",
    isDebit: "true",
    name: "Alpha Business Test 1533217732",
    id: "5b630bc5b4dbfe0014f68ab9"
  },
  {
    balance: "15000",
    isDebit: "true",
    name: "Jewel",
    id: "5b654cdf881c1d0014f4f31e"
  },
  {
    balance: "20000",
    isDebit: "false",
    name: "Aakash Ganga Cosmetics",
    id: "5b879d09d1f79c0014a7276a"
  },
  {
    balance: "40000.00",
    isDebit: "true",
    name: "AGRA-A TO Z IMMITATION JEWELLERS",
    id: "5b879d09d1f79c0014a7276b"
  },
  {
    balance: "10000.50",
    isDebit: "false",
    name: "AGRA KUMAR & BROS",
    id: "5b879d09d1f79c0014a7276c"
  }
];

const useStyles = {
  container: {
    maxWidth: 1366,
    top: 0,
    left: 0,
    height: 766,
    background: "#fff",
    opacity: 1
  },
  box: {
    top: 96,
    marginLeft: 69,
    position: "absolute"
  },
  partyIcon: {
    float: "left",
    marginRight: 15
  },
  searchInput: {
    marginTop: -25
  },
  cardDetails: {
    background: "#f7f7f7",
    boxShadow: "unset"
  },
  cardDetailsProfile: {
    margin: "15px 10px 0 0"
  },
  cardHeading: {
    fontSize: 14
  },
  cardText: {
    fontSize: 12,
    color: "#868686"
  },
  addParty: {
    fontSize: 14,
    "&:hover": {
      textDecoration: "none"
    }
  },
  searchItem: {
    fontSize: "12px !important"
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
};

class App extends Component {
  state = {
    inputOpen: false,
    partyLinkOpen: true,
    partyCardOpen: false,
    inputSearchValue: "",
    filteredItems: [],
    currSearItem: {}
  };

  getFilteredItems = () => {
    // axios
    //   .get("http://jsoneditoronline.org/?id=86760ac0f534464d80d973f4bda8c061")
    //   .then(data => {
    //     console.log(data);
    //   });

    if (this.state.inputSearchValue !== "") {
      let newList = parties.filter(party => {
        const lc = party.name.toLowerCase();
        const filter = this.state.inputSearchValue.toLowerCase();
        return lc.includes(filter);
      });
      this.setState({ filteredItems: newList });
    } else {
      this.setState({ filteredItems: [] });
    }
  };

  handlePartyLink = () => {
    this.setState({
      inputOpen: true,
      partyLinkOpen: false,
      partyCardOpen: false
    });
  };

  handleSearchList = e => {
    this.setState(
      {
        inputSearchValue: e.target.value
      },
      () => {
        this.getFilteredItems();
      }
    );
  };

  handleSearchItem = id => {
    this.setState({
      inputOpen: false,
      partyLinkOpen: false,
      partyCardOpen: true
    });
    let filteredItem = parties.filter(party => id === party.id);
    let itemBalance = partiesBalance.filter(
      partyBalance => id === partyBalance.id
    );
    if (filteredItem.length && itemBalance.length) {
      let mergedDetails = { ...filteredItem[0], ...itemBalance[0] };
      this.setState({ currSearItem: mergedDetails });
    }
  };

  closeCard = () => {
    this.setState({
      partyLinkOpen: true,
      inputOpen: false,
      partyCardOpen: false,
      inputSearchValue: "",
      filteredItems: [],
      currSearItem: {}
    });
  };

  componentDidMount() {
    this.getFilteredItems();
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.container}>
        <Box className={classes.box}>
          {!this.state.partyCardOpen && (
            <Box display="flex" className={classes.partyIcon}>
              <img
                src={
                  this.state.partyLinkOpen
                    ? require("./assets/images/blue_profile.svg")
                    : require("./assets/images/grey_profile.svg")
                }
                width="24"
                height="24"
                alt="Profile"
                align="middle"
              />
            </Box>
          )}
          <Box display="flex">
            <Typography component="div">
              {this.state.partyLinkOpen && (
                <Link
                  onClick={this.handlePartyLink}
                  className={classes.addParty}
                >
                  + add Party
                </Link>
              )}

              {this.state.inputOpen && (
                <div>
                  <TextField
                    id="search-input"
                    label="Enter Party Name"
                    autoComplete="off"
                    value={this.state.inputSearchValue}
                    className={classes.searchInput}
                    onChange={this.handleSearchList}
                  />
                  {this.state.filteredItems && (
                    <Card>
                      {this.state.filteredItems.map(item => (
                        <ListItem
                          key={item.id}
                          onClick={() => this.handleSearchItem(item.id)}
                          className={classes.listItem}
                        >
                          <ListItemText
                            classes={{ primary: classes.searchItem }}
                            primary={item.name}
                          />
                        </ListItem>
                      ))}
                    </Card>
                  )}
                </div>
              )}

              {this.state.partyCardOpen && this.state.currSearItem && (
                <Card className={classes.cardDetails} component="div">
                  <CardContent>
                    <Box display="flex">
                      <Box
                        display="flex"
                        className={classes.cardDetailsProfile}
                      >
                        <img
                          src={require("./assets/images/grey_profile.svg")}
                          width="24"
                          height="24"
                          alt="Profile"
                          align="middle"
                        />
                      </Box>
                      <Box display="flex">
                        <div style={{ width: "100%" }}>
                          <Box display="block">
                            <Typography
                              variant="h6"
                              component="h2"
                              className={classes.cardHeading}
                            >
                              {this.state.currSearItem.name}
                            </Typography>
                          </Box>
                          <Box display="block">
                            <Typography
                              variant="body1"
                              component="p"
                              className={classes.cardText}
                            >
                              {this.state.currSearItem.address}
                              <br />
                              Curent balance: Rs.{" "}
                              {this.state.currSearItem.balance}
                            </Typography>
                          </Box>
                        </div>
                      </Box>
                      <Box display="flex">
                        <img
                          src={require("./assets/images/close.svg")}
                          width="11"
                          height="11"
                          alt="Close"
                          align="middle"
                          onClick={this.closeCard}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )}
            </Typography>
          </Box>
        </Box>
      </Container>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(App);
