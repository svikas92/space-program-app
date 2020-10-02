/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'; // ES6
import { fetchLaunchPrograms } from '../actions/launchProgramAction';
import FilterComponent from "../components/Filter"
import { withRouter } from 'react-router-dom';
import LaunchProgramDetails from '../components/LaunchProgramDetail';

const LaunchProgramsList = props => {
  const renderLaunchPrograms = () => {
    return props.launchPrograms.map((launchProgram) => (
      <LaunchProgramDetails key={launchProgram.flight_number} launchProgram={launchProgram} />
    ))
  }

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX Launch Programs</title>
        <meta property="og:title" content="SpaceX Launch Programs" />
        <meta
          name="description"
          content="Details of various flight launche programs from SpaceX"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ps-launch-programs.herokuapp.com/" />
      </Helmet>
    );
  };

  const { fetchLaunchPrograms: loadLaunchPrograms } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadLaunchPrograms();
  }, [loadLaunchPrograms]);
  return (
    <>
      {head()}
      <div className="left-container">
        <FilterComponent />
      </div>
      <div className="right-container">
        <div className="launch-program-container">
          {renderLaunchPrograms()}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    launchPrograms: state.launchPrograms
  };
};

const loadData = (store, filters) => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchLaunchPrograms(filters)); // Manually dispatch a network request
};

LaunchProgramsList.propTypes = {
  launchPrograms: PropTypes.arrayOf(PropTypes.any),
  fetchLaunchPrograms: PropTypes.func,
  location: PropTypes.objectOf(PropTypes.any)
};

LaunchProgramsList.defaultProps = {
  launchPrograms: [],
  fetchLaunchPrograms: null,
  location: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchLaunchPrograms }
  )(withRouter(LaunchProgramsList)),
  loadData
};
