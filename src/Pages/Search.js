import React, { Component } from 'react'
import axios from 'axios'
import '../Style/search.css'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName:null,
            playerStats:{}
        }
    }
    getPlayerId=()=>{
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
        .then(async res=>{
            if(res.data.data[0]===undefined){
                alert("This player is injured or hasn't play.")
            }else if (res.data.data.length >1){
                alert("Please be specify more detail.")
            }
            await this.getPlayerStats(res.data.data[0].id)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    getPlayerStats=(playerId)=>{
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
        .then(async res=>{
            console.log(res.data.data)
            this.setState({playerStats:res.data.data[0]})  
        })
        .catch(err=>{
            console.log(err)
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.getPlayerId()
        console.log(this.state.playerName)
    }
    handleChange=(event)=>{
        const replace =event.target.value.split(" ").join(" ");
        console.log (replace)
        if(replace.length>0){
            this.setState({playerName:replace})
        }else{
            alert("Please type players name!")
        }
    }
    componentDidMount(){
        //this.getPlayerId()
        this.getPlayerStats()
    }
    render() {
        return (
            <div class="searchContainer">
                <img src="/Image/nbalogo.png" alt="logo"/>
                <div class="Search">
                        <form onSubmit={this.handleSubmit} className="searchbox" action="http://thecodeblock.com">
                            <input
                             type="text"
                             value={this.state.value}
                             onChange={this.handleChange}
                             placeholder="SEARCH FOR PLAYER"
                            />
                            <button type="submit" value="Search">&nbsp;</button>
                        </form>        
                </div>
                <div className="result">
                    <table>
                        <thead>
                            <tr>
                            <th>Minutes Play</th>
                            <th>Point</th>
                            <th>Assist</th>
                            <th>Rebound</th>   
                            <th>Field Goal Percentage</th>   
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{this.state.playerStats["min"]}</td>
                            <td>{this.state.playerStats["pts"]}</td>
                            <td>{this.state.playerStats["ast"]}</td>
                            <td>{this.state.playerStats["reb"]}</td>   
                            <td>{this.state.playerStats["fg_pct"]*100+'%'}</td>   
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}