import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const ToggleFilter = props => {
    const [selectedValue, setSelectedValue] = useState()
    const { handler, title, filter_key, values } = props

    let filterValues = [{ name: "True", value: true }, { name: "False", value: false }]

    if (values) {
        filterValues = values
    }

    const toggleSelectedValue = value => {
        if (selectedValue === value) {
            setSelectedValue()
        } else {
            setSelectedValue(value)
        }

        handler({ name: filter_key, value: value })
    }

    const renderFilterValues = optns => {
        return (
            optns.map(optnValue => {
                if (selectedValue !== undefined && selectedValue === optnValue.value) {
                    return (
                        <div onClick={() => toggleSelectedValue(optnValue.value)} key={optnValue.name} className={"filter-list-value filter-list-value-selected"}>
                            {optnValue.name}
                        </div>
                    )
                } else {
                    return (
                        <div onClick={() => toggleSelectedValue(optnValue.value)} key={optnValue.name} className={"filter-list-value"}>
                            {optnValue.name}
                        </div>
                    )
                }
            })
        )
    }

    return (
        <div key={filter_key} className="filter-container">
            <div className="filter-title">
                <h5>{title}</h5>
            </div>

            <div className="filter-list">
                {renderFilterValues(filterValues)}
            </div>
        </div>
    )
}

export default withRouter(ToggleFilter)