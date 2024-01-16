import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Row1 = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();

    console.log("data: ", data);

    // useMemo is useful here for conserving memory
    const revenueExpenses = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
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
                        <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
                        
                        <YAxis
                            dataKey="name" domain={[8000, 23000]} axisLine={{ strokeWidth: "0" }} style={{ fontSize: "10px" }}
                        />
                        <Tooltip />
                        <Area type="monotone"
                            dataKey="revenue"
                            stroke={palette.primary.main}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                            dot={true}
                        />
                        <Area type="monotone"
                            dataKey="expenses"
                            stroke={palette.primary.main}
                            fillOpacity={1}
                            fill="url(#colorExpenses)"
                            dot={true}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c"></DashboardBox>
        </>)
}

export default Row1