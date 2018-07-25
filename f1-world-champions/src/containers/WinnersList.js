import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WinnersTable from '../components/WinnersTable';
import {fetchWinners} from '../actions/winners';
import {showNotification} from '../util';


class WinnersList extends Component {

    static propTypes = {
        // Injected by React Redux
        winners: PropTypes.object.isRequired,
        //Injected by Router
        season: PropTypes.string.isRequired,
        driver : PropTypes.string.isRequired,
    }


    fetchData() {
        const { dispatch, season } = this.props;
        dispatch(fetchWinners(season));
    }

    componentWillMount() {
        this.fetchData()
    }

    winnerList_UI() {
        const { winners, season, driver } = this.props;
        return (
            <div>
                <h4 className="text-muted mb-3 font-weight-light">{`Showing list of winners for the year ${season}`}</h4>
                <WinnersTable data={winners.data} highlight={{key : "driverId",value : driver}}/>
                {showNotification(winners.error && winners.fetched && winners.data.length === 0)("error", "Error", winners.error)}
            </div>
        )
    }

    render() {
        return (
            <div className="container card-component">
                {this.winnerList_UI()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    season: ownProps.match.params.season,
    driver : ownProps.match.params.driver,
    winners : state.winners.list
});

export default connect(mapStateToProps)(WinnersList);
