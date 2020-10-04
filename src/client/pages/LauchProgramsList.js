/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'; // ES6
import { fetchLaunchPrograms } from '../actions/launchProgramAction';
import FilterComponent from "../components/Filter"
import { withRouter } from 'react-router-dom';
import LaunchProgramDetails from '../components/LaunchProgramDetail';
import { applyFilters } from '../actions/filterActions';

const LaunchProgramsList = props => {
  const dispatch = useDispatch()
  const renderLaunchPrograms = () => {
    return props.launchPrograms.map((launchProgram) => (
      <LaunchProgramDetails key={launchProgram.flight_number} launchProgram={launchProgram} />
    ))
  }

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX Launch Programs</title>
        <meta charset="UTF-8" />
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

  const { history, fetchLaunchPrograms: loadLaunchPrograms } = props;
  const { search } = history.location

  const getCurrentFilterByQueryParams = () => {
    const query = search.substring(1);
    const vars = query.split('&');
    const res = {}

    if (query !== "") {
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        res[pair[0]] = pair[1]
      }
    }

    return res
  }

  const queryParamFilters = getCurrentFilterByQueryParams()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(applyFilters(queryParamFilters))
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

const loadData = (store) => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return
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
