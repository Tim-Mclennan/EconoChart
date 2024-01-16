import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { useMemo } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {}

const Row1 = () => {
    const { data } = useGetKpisQuery();

    console.log("data: ", data);
    
    // useMemo is useful here for conserving memory
    const revenueExpenses = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month , revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                }
            })
        )
    }, [data]);

    return (
        <>
            <DashboardBox gridArea="a">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={revenueExpenses}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c"></DashboardBox>
        </>)
}

export default Row1