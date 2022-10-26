import React from 'react';
import { Box, Pagination } from '@mui/material';


export const AppPagination = ({ count, pageSize }) => {

    return (
        <Box justifyContent={'center'} alignItems='center' display={'flex'} sx={{
            margin: '20px 0px'
        }}>
            <Pagination
                count={count}
                onChange={(event, page) => {
                    const from = (page - 1) * pageSize;
                    const to = (page - 1) * pageSize + pageSize;
                }}

            />
        </Box>

    )

}
