import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';

const Row3 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];

    const { data: kpiData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const { data: transactionData } = useGetTransactionsQuery();

    const productColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: 0.5,
            // Renders the expense with a money symbol:
            renderCell: (params: GridCellParams) => 
               `$${params.value}`,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.5,
            // Renders the price with a money symbol:
            renderCell: (params: GridCellParams) => 
               `$${params.value}`,  
        }
    ]
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
                        //These styles will affect DataGrid
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
                    columnHeaderHeight={25}
                    rowHeight={35}
                    hideFooter={true}
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