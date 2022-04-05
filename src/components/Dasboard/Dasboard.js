
import {Area, AreaChart, CartesianGrid,  Legend,  Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dasboard = () => {


   const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
  

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 justify-items-center'>

<div className='mb-6 '>
<h1 className='text-center my-6'>Line Chart</h1>
      
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="investment" dataKey="investment" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="month" />
    <YAxis/>
    <Tooltip />
  </LineChart>

            
        </div>

<div className='md-6'>
<h1 className='text-center my-6'>Pie Chart</h1>
<PieChart width={100} height={100}>
  <Pie data={data} dataKey="sell" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

    <Tooltip />
</PieChart>

</div>
<div className='md-6'>
<h1 className='text-center my-6'> Radial BarChart </h1>

<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='revenue' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
</div>


<div className='md-6'>
<h1 className='text-center my-6'>Area Chart</h1>

<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="revenue" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="sell" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


</div>

        </div>
    );
};

export default Dasboard;