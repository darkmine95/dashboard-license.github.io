import { useMemo } from 'react';
import { COLORS } from './colors';
import './BlockPieLicences.css';
import { PieChart, Pie, Cell, Legend } from "recharts";


const RADIAN = Math.PI / 180;


export default function BlockPieLicences({ licencesUsers }) {

  const data = useMemo(() => {
    let valueByLicence = {};
    licencesUsers.forEach(element => {
      if (!valueByLicence[element.licence]) {
        valueByLicence[element.licence] = 1;
      } else {
        valueByLicence[element.licence] += 1;
      }
    });

    return Object.keys(valueByLicence).map(elt => {
      return {
        name: elt,
        value: valueByLicence[elt]
      }
    })
  }, [licencesUsers]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5 - 10;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const value = data[index].value;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${value} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <div className="block-pie-licences block">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
        />
      </PieChart>
    </div>
  );
}
