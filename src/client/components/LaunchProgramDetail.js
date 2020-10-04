import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LaunchProgramDetails = props => {
    const { launchProgram } = props
    return (
        <div className="launch-program-details">
            <div className="launch-program-image">
                <LazyLoadImage alt={launchProgram.mission_name} src={launchProgram.links.mission_patch_small} />
            </div>
            <div className="launch-program-info-container">
                <div className="launch-program-info-item">
                    <div className="launch-program-info-key launch-program-info-key-title">
                        {launchProgram.mission_name} # {launchProgram.flight_number}
                    </div>
                </div>
                <div className="launch-program-info-item">
                    <div className="launch-program-info-key">
                        Mission Ids: 
          </div>
                    <ul className="launch-program-mission-list launch-program-info-value">
                        {
                            launchProgram.mission_id.map((missionId, index) => {
                                return <li key={index}>{missionId}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="launch-program-info-item">
                    <div className="launch-program-info-key">
                        Launch Year: 
          </div>
                    <span className="launch-program-info-value">
                        {launchProgram.launch_year}
                    </span>
                </div>
                <div className="launch-program-info-item">
                    <div className="launch-program-info-key">
                        Successful Launch: 
          </div>
                    <span className="launch-program-info-value">
                        {String(launchProgram.launch_success)}
                    </span>
                </div>
                <div className="launch-program-info-item">
                    <div className="launch-program-info-key">
                        Successful Landing: 
          </div>
                    <span className="launch-program-info-value">
                        {String(launchProgram.rocket.first_stage.cores[0].land_success || false)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LaunchProgramDetails