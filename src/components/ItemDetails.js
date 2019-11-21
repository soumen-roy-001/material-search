import React, { Fragment } from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const useStyles = {
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
    }
};

const ItemDetails = (props) => {
    const { classes } = props;
    return (
        <Fragment>
            <Card className={classes.cardDetails} component="div">
                <CardContent>
                    <Box display="flex">
                        <Box
                            display="flex"
                            className={classes.cardDetailsProfile}
                        >
                            <img
                                src={require("../assets/images/grey_profile.svg")}
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
                                        {props.currSearItem.name}
                                    </Typography>
                                </Box>
                                <Box display="block">
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        className={classes.cardText}
                                    >
                                        {props.currSearItem.address}
                                        <br />
                                        Curent balance: Rs. {props.currSearItem.balance}
                                    </Typography>
                                </Box>
                            </div>
                        </Box>
                        <Box display="flex">
                            <img
                                src={require("../assets/images/close.svg")}
                                width="11"
                                height="11"
                                alt="Close"
                                align="middle"
                                onClick={props.closeCard}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>

        </Fragment>
    )
}

export default withStyles(useStyles)(ItemDetails)