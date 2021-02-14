import React,{ Component } from "react";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "red"};
        // this.state = { show: true};
    }
    // delHeader = ()=>{
    //     this.setState({show: false});
    // }
    changeColor = ()=>{
        this.setState({color: "blue"});
    }
    passData = (val,ev)=>{
        alert(ev.type);
    }

    /****************************Mounting*********************** */

    /**
     * constructor()
     * getDrivedStateFromProps(prps,state)
     * render()
     * componentDidMount()
     * 
     */

    // static getDerivedStateFromProps(props, state){
    //     return {color: props.col}
    // }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({color: "yellow"})
    //     }, 1000)
    // }
    
    /*********************Mounting********************************* */


    /*********************Updating********************************** */

    /**
     * getDrivedStateFromProps(prps,state)
     * shouldComponentUpdate()
     * render()
     * getSnapShotBeforeUpdate(prevProps,prevState)
     * componentDidUpdate() 
     */

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     document.getElementById("div1").innerHTML = "Before updated"+ prevState.color;
    // }
    // componentDidUpdate(){
    //     document.getElementById('div2').innerHTML = "updated"+ this.state.color;
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    /********************Updating************************************* */


    /********************Unmounting*********************************** */

    /**
     * componentWillUnmount()
     */



    /********************Unmounting*********************************** */
    // componentWillUnmount(){
    //     alert("The component named Header is about to be unmounted.");
    // }
    render(){
        // let myHeader;
        // if(this.state.show){
        //     myHeader = <Car />
        // }
        return(
            <div>
                 {/* {myHeader} */}
            <h2>Hi Nishant {this.state.color}</h2>
            <h2>Hi Nishant {this.props.name}</h2>
            <button type ="button" onClick={this.changeColor}>Change Color</button>
            <button type ="button" onClick={(ev)=>this.passData('Kumar',ev)}>Send</button>
            {/* <button type="button" onClick={this.delHeader}>Delete Header</button> */}
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        )
    }
}
class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '',age: null};
    }
    changeHandler = (event) => {
        let name = event.target.name;
        let age = event.target.value
        // alert(name,age);
        // alert(event.target.value);
        // this.setState({username: event.target.value});
        this.setState({[name]:age})
    }
    render(){
        // let header = '';
        // if(this.state.username){
        //     header = <h2>Hello ! {this.state.username}</h2>
        // }
        // else{
        //     header = '';
        // }
        return(
            <form>
                {/* {header} */}
                <h2> Hello! {this.state.username} {this.state.age}</h2>
                {/* <h2>Hello {this.state.username}</h2> */}
                <p>Enter Your Name:</p>
                <input type="text"
                name="username"
                onChange={this.changeHandler}/>
                <p>Enter Your Age:</p>
                <input type="text"
                name="age"
                onChange={this.changeHandler}/>
            </form>
        )
    }
}
class Garage extends React.Component{
    
    render(){
        
        const carName = "Honda City";
        return(
            <div>
                <h3>
                   <Forms />
                    {/* <Car name={carName} /></h3> */}
                    {/* <Car col="blue" /> */}
                    </h3>
                {/* <p>A web applicaition under E-Commerce vertical of Walmart labs to monitor and manage the store performance.
                     Application fetches data from various sources and create insights from them for decision making.</p> */}
            </div>
        )
    }
}
// export default Car;
export default Garage;