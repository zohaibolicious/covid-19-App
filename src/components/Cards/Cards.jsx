import React from 'react';
import {Card, CardContent, Grid, Typography ,withStyles,createMuiTheme,ThemeProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
import Button from '@material-ui/core/Button';
import TextLoop from "react-text-loop";

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(to right, #4ac29a, #bdfff3)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontFamily: "monospace",
        margin: "auto",
},
    label: {
        textTransform: 'capitalize',
    },
})(Button);
const StyledCard = withStyles({
    root: {
        background: 'linear-gradient(to bottom, #eef2f3, #8e9eab);',
        color: 'white',
        height: 250,
        width: 400,
        padding: '50 px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Card);

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return (
            <div className={cx(styles.loading)}>
                <TextLoop>
                    <h1>...LOADING...</h1>
                    <h1>...Please Wait...</h1>
                </TextLoop>

            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <h1>Stay Home
                    <div className={styles.safe}>
                <TextLoop springConfig={{ stiffness: 180, damping: 20 }} interval={2000}>
            <h1> Safe</h1>
            <h1> Healthy</h1>
            </TextLoop>
                    </div>
                </h1>
            </div>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant={'h4'} color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of active cases of COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant={"h4"} color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of recoveries from COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant={'h4'} color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of deaths caused by COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};
export default Info;
