import React, { useEffect } from 'react';
import ToggleFilter from "./filters/ToggleFilter"
import PropTypes from 'prop-types'; // ES6
import { connect, useDispatch } from 'react-redux';
import { applyFilters } from '../actions/filterActions';
import { withRouter } from 'react-router'

const FilterComponent = props => {
  const dispatch = useDispatch();
  const { history, filters } = props

  const launchYears = Array(15)
    .fill(2006)
    .map((val, index) => val + index)
    .map((val) => ({ name: val.toString(), value: val }))

  const onFilterToggle = filterValue => {
    const currentFilters = { ...props.filters }
    const { name, value } = filterValue

    if (name in currentFilters) {
      if (value != currentFilters[name]) {
        currentFilters[name] = value
      } else {
        delete currentFilters[name]
      }
    } else {
      currentFilters[name] = value
    }
    let queryString = ""

    for (const filterKey in currentFilters) {
      queryString += `&${filterKey}=${currentFilters[filterKey]}`
    }

    history.push({
      search: `${queryString.substring(1)}`
    })

    dispatch(applyFilters(currentFilters))
  }

  return (
    <>
      <h3 style={{ margin: "10px 10px" }}>Filters</h3>
      <ToggleFilter handler={onFilterToggle} title={"Launch Year"} filter_key={"launch_year"} values={launchYears} />
      <ToggleFilter handler={onFilterToggle} title={"Successful Launch"} filter_key={"launch_success"} />
      <ToggleFilter handler={onFilterToggle} title={"Successful Landing"} filter_key={"land_success"} />
    </>
  )
}


FilterComponent.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any),
  applyFilters: PropTypes.func
};

FilterComponent.defaultProps = {
  filters: {},
  applyFilters: null
};

const mapStateToProps = state => ({
  filters: state.filters
})

export default connect(mapStateToProps, { applyFilters })(withRouter(FilterComponent));