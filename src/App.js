import React, { Component } from "react";
import { connect } from 'react-redux'

import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import * as actions from './store/index'
import ItemDetails from './components/ItemDetails'

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
    partyCardOpen: false
  };


  handlePartyLink = () => {
    this.setState({
      inputOpen: true,
      partyLinkOpen: false,
      partyCardOpen: false
    });
  };

  handleSearchList = e => {
    this.props.searchKeyword(e.target.value)
  };

  handleSearchItem = id => {
    this.setState({
      inputOpen: false,
      partyLinkOpen: false,
      partyCardOpen: true
    });
    this.props.storeFinalItem(id)
  };

  closeCard = () => {
    this.setState({
      partyLinkOpen: false,
      inputOpen: true,
      partyCardOpen: false
    });
  };

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
                    value={this.props.inputSearchValue}
                    className={classes.searchInput}
                    onChange={this.handleSearchList}
                  />
                  {this.props.filteredItems && (
                    <Card>
                      {this.props.filteredItems.map(item => (
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

              {this.state.partyCardOpen && this.props.currSearItem && (
                <ItemDetails currSearItem={this.props.currSearItem} closeCard={this.closeCard} />
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

const mapStateToProps = state => {
  return {
    loading: state.loading,
    inputSearchValue: state.inputSearchValue,
    filteredItems: state.filteredItems,
    currSearItem: state.currSearItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchKeyword: (searchKeyword) => dispatch(actions.searchKeyword(searchKeyword)),
    storeFinalItem: (itemId) => dispatch(actions.storeFinalItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(App));
