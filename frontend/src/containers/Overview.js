import React from 'react';
import { connect } from 'react-redux';

import OverviewList from '../components/OverviewList';
import { getOverviews } from '../actions';

const mapStateToProps = state => ({
  overviews: state.overview.overviews,
});

const mapDispatchToProps = dispatch => ({
  getOverviews: () => dispatch(getOverviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewList);
