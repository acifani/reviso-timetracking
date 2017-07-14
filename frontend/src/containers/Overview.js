import React from 'react';
import { connect } from 'react-redux';

import OverviewList from '../components/OverviewList';
import { getOverview } from '../actions';

const mapStateToProps = state => ({
  overview: state.overview.overview,
});

const mapDispatchToProps = dispatch => ({
  getOverview: () => dispatch(getOverview())
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewList);
