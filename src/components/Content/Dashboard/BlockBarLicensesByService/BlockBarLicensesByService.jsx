import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { COLORS } from './colors';
import './BlockBarLicensesByService.css';

export default function BlockBarLicensesByService({ licencesUsers, licences }) {

    /**
    * Récupération une liste avec les services et leur donnée pour chaque licence
    * Exemple:
    * [
    *    { name: "Service A", adobe: 5, ... },
    *    { name: "Service B", adobe: 5, ... },
    * ]
    */
    const data = useMemo(() => {
        const valueByService = {};
        licencesUsers.forEach(element => {
            if (!valueByService[element.service]) {
                valueByService[element.service] = {
                    name: element.service
                };
                valueByService[element.service][element.licence] = 1;
            } else {
                if (!valueByService[element.service][element.licence]) {
                    valueByService[element.service][element.licence] = 1;
                } else {
                    valueByService[element.service][element.licence] += 1;
                }
            }
        });

        return Object.values(valueByService);
    }, [licencesUsers]);

    const differentLicences = useMemo(() => {
        let done = [];
        licences.forEach(element => {
            if (!done.includes(element.name)) {
                done.push(element.name);
            }
        });
        return done;
    }, [licences]);

    return (
        <div className="block-bar-licences-by-service block">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {
                        differentLicences.map((licence, index) => {
                            return <Bar dataKey={licence} stackId="a" fill={COLORS[index]} />
                        })
                    }
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}