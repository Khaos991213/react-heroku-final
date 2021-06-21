import React from 'react';
import {useLocation} from 'react-router-dom'
import '../Style/detail.css';

function Detail() {

    const location = useLocation();
    const court=location.aboutProps.result.court;
    const team=location.aboutProps.team;
    let info = []
    info=location.aboutProps.result.legend;

    console.log(court)    
    console.log(team)
    console.log(info)

    let number = [];
    for(let i=0;i<info.length;i++){
        number[i] = i;
    }
    console.log(number)
    return (
        <div className="detailContainer" style={{ backgroundImage: `url("${court}")`, backgroundRepeat: 'no-repeat' }}>
            <div className="Content">
                {/* <img src={court} alt=""/> */}
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                            <th>player</th>
                            <th>position</th>
                            <th>jersey</th>
                            <th>point</th>   
                            <th>assist</th>   
                            <th>rebound</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((number) =>(
                                <tr>
                                <td>{number.player}</td>
                                <td>{number.position}</td>
                                <td>{number.jersey}</td>
                                <td>{number.point}</td>   
                                <td>{number.assist}</td>   
                                <td>{number.rebound}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detail