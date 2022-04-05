import React, { useEffect, useState } from 'react';
import Dasboard from '../Dasboard/Dasboard';


const Rechart = () => {
     // const [ChartMakear, setChartMakear]=useState([]);

    // useEffect(() => {
    //   axios.get('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')

    //     .then (data => setChartMakear(data));
        
        
    //     } ,[])
    return (
        <div>
 {
    ChartMakear.map(ChartMakear=>  <Dasboard ChartMakear={ChartMakear}></Dasboard>)
 }
        </div>
    );
};

export default Rechart;