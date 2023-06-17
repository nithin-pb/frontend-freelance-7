import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";

import { useRoles } from '../../hooks/query'
import { Loading, TitleWidget } from '..'
import { Alert, DataGrid, Button } from "../../shared";
import { columDefinition } from './colum-def'
import { Link } from "react-router-dom";

export default function RoleList() {
    const { useListRoles } = useRoles()
    const { isLoading, data, isError, error } = useListRoles()

    const rowClassRule = {
        'row-disabled': function (params: any) { return params.data.user_active === 'Disabled' },
    }

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'Roles And Permissions'} description={'Manage Permissions'} />
            <Alert isError={isError} error={error} />
            <Loading loading={isLoading} />
            <DataGrid
                // rowClassRules={rowClassRule}
                loading={isLoading}
                rowSelection={'multiple'}
                fixedColumns={columDefinition}
                gridData={data || []}
                extraComponents={<AddNewRoleButton />}
            />
        </Box>
    )
}



function AddNewRoleButton() {
    return (
        <Box>
            <Link to={'/dashboard/roles/new'}>
                <Button variant={'outlined'} startIcon={<Add />}>
                    New Role
                </Button>
            </Link>
        </Box>
    )
}