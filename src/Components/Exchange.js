import React, { Component } from 'react'

export class Exchange extends Component {
    render() {
        return (
            <div class='container-fluid'>
                <h1 style={{ textAlign: 'center', padding: '50px', margin: '50px', backgroundColor: 'lightblue' }}>Exchange Rate   </h1>
                <div class='container'>
                            <div class='scrollmenu'>
                               
                                    <li class="nav-item p-3 m-3">
                                    <img src="Aus.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Can.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Ger.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Ind.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Sl.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Uk.png" alt="Logo" class="float-start" height={60} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00
                                    </li>
                                    <li class="nav-item p-3 m-3">
                                    <img src="Us.png" alt="Logo" class="float-start" height={70} width={80} /> 
                                     Buy 220.00 <br></br>Sell 250.00    
                                    </li>
                               
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Exchange;