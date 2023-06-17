import { Box } from "@mui/material";

import { useProfile } from '../../hooks/query'
import { Loading, TitleWidget } from '../'
import { AddNewProfile } from '..'
import { Alert, DataGrid } from "../../shared";
import { columDefinition } from './colum-def'

export default function ProfileManagement() {
    const { useListProfile } = useProfile()
    const { isLoading, data, isError, error } = useListProfile()

    const rowClassRule = {
        'row-disabled': function (params: any) { return params.data.user_active === 'Disabled' },
    }
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'Profile'} description={'Manage Profiles'} />
            <Alert isError={isError} error={error} />
            <Loading loading={isLoading} />
            <DataGrid
                rowClassRules={rowClassRule}
                loading={isLoading}
                rowSelection={'multiple'}
                fixedColumns={columDefinition}
                gridData={data || []}
                extraComponents={<AddNewProfile />}
            />
        </Box>
    )
}