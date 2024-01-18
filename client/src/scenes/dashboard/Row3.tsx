import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Row3 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];

    const { data: kpiData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const { data: transactionData } = useGetTransactionsQuery();
    return (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader 
                    title="List of Products"
                    sideText={`${productData?.length} products`}
                />
                <Box
                     mt="0.5rem"
                     p="0 0.5rem"
                     height="75%"
                     sx={{
                        "& .MuiDataGrid-root": {
                            color: palette.grey[300],
                            border: "none",
                          },
                          "& .MuiDataGrid-cell": {
                            borderBottom: `1px solid ${palette.grey[800]} !important`,
                          },
                          "& .MuiDataGrid-columnHeaders": {
                            borderBottom: `1px solid ${palette.grey[800]} !important`,
                          },
                          "& .MuiDataGrid-columnSeparator": {
                            visibility: "hidden",
                          }
                     }}
                >
                    <DataGrid
                        rows={productData || []}
                        columns={productColumns}
                    />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i"></DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>
        </>

    )
}

export default Row3