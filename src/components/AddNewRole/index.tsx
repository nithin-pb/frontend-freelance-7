import { Alert, Box } from "@mui/material";
import { Formik, Form } from "formik";

import { Loading, TitleWidget } from "..";
import { NewRoleForm } from './Form'
import { PermissionSelector } from './PermissionSelector'
import { Action } from './Action'


export default function AddNewRole() {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'Add new role'} description={'Create new role'} />
            {/* <Alert isError={isError} error={error} />
            <Loading loading={isLoading} /> */}
            <Box ml={2} maxWidth={600} mt={2}>
                <Formik onSubmit={() => { }} initialValues={{}}>
                    <Form>
                        <NewRoleForm />
                        <PermissionSelector />
                        <Action />
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}
