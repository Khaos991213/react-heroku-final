import React from 'react';
import '../Style/home.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import NavBar from '../Component/NavBar';

const TeamInfo = [
  { path: "/Image/Atlanta-Hawks.png", cname: "老鷹" }, { path: "/Image/Boston-Celtics.png", cname: "賽爾提克" }, { path: "/Image/Brooklyn-Nets.png", cname: "籃網" }
  , { path: "/Image/Charlotte-Hornets.png", cname: "黃蜂" }, { path: "/Image/Chicago-Bulls.png", cname: "公牛" }, { path: "/Image/Cleceland-Cavaliers.png", cname: "騎士" }
  , { path: "/Image/Dallas-Mavericks.png", cname: "小牛" }, { path: "/Image/Denver-Nuggets.png", cname: "金塊" }, { path: "/Image/Detroit-Pistons.png", cname: "活塞" }
  , { path: "/Image/Golden-State-Warriors.png", cname: "勇士" }, { path: "/Image/Houston-Rockets.png", cname: "火箭" }, { path: "/Image/Indiana-Pacers.png", cname: "溜馬" }
  , { path: "/Image/Los-Angeles-Clippers.png", cname: "快艇" }, { path: "/Image/Los-Angeles-Lakers.png", cname: "湖人" }, { path: "/Image/Memphis-Grizzlies.png", cname: "灰熊" }
  , { path: "/Image/Miami-Heat.png", cname: "熱火" }, { path: "/Image/Milwaukee-Bucks.png", cname: "公鹿" }, { path: "/Image/Minnesota-Timberwolves.png", cname: "灰狼" }
  , { path: "/Image/New-Orleans-Pelicans.png", cname: "鵜鶘" }, { path: "/Image/New-York-Knicks.png", cname: "尼克" }, { path: "/Image/Oklahoma-City-Thunder.png", cname: "雷霆" }
  , { path: "/Image/Orlando-Magic.png", cname: "魔術" }, { path: "/Image/Philadelphia-76ers.png", cname: "七六人" }, { path: "/Image/Portland-Trail-Blazers.png", cname: "拓荒者" }
  , { path: "/Image/Phoenix-Suns.png", cname: "太陽" }, { path: "/Image/Sacramento-Kings.png", cname: "國王" }, { path: "/Image/San-Antonio-Spurs.png", cname: "馬刺" }
  , { path: "/Image/Toronto-Raptors.png", cname: "暴龍" }, { path: "/Image/Utah-Jazz.png", cname: "爵士" }, { path: "/Image/Washington-Wizards.png", cname: "巫師" }]
  

export default class Test extends React.Component {
  state = {
      cname :"",
      nba: {}
    }
 
  handleAdd = async event =>{
      await this.setState({ 
        cname: event.target.value
      });
  }
  handleSubmit = event =>{
      const cors = 'https://cors-anywhere.herokuapp.com/';
      event.preventDefault();
      console.log(this.state.cname)
      let formData = new FormData();
      formData.append("cname",this.state.cname);
      const url = "https://highspeedrailsofun.herokuapp.com/nbaplayer.php";
      axios.post(`${cors}${url}`,formData)     //promise
      .then(res=>{
        console.log(res.data);
        this.setState({ nba : res.data})
        console.log(this.state.nba.court);
        })
      .catch(err=>console.log(err));
  }

  render() {
    return (
      
        <div className="Container">
          <div className="Team">
            <select className='select1' onChange={this.handleAdd}>
              <option>Choose Your Team</option>
              {TeamInfo.map((data)=>(
                <option value={data.cname}>
                    {data.cname}
                </option> 
              ))}
            </select>
          </div>
          
          <button onClick={this.handleSubmit}  id="submit">save</button>
          <Link   
           to ={{
           pathname:'/Detail/'+this.state.cname,
           aboutProps:{
             result:this.state.nba,
             team:this.state.cname
           }
          }}
          > 
            <p className="HomeNext">Next Page</p>
          </Link>
        </div>
      
    )
  }
} 
//<img src={data.path} alt={data.cname} title={data.cname} onClick={()=>(this.handleAdd)} />




