import { Box } from "@mui/material";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useRoles } from "../../hooks/query";
import { Loading, TitleWidget } from "..";
import { NewRoleForm } from './Form'
import { PermissionSelector } from './PermissionSelector'
import { Action } from './Action'
import { Alert } from "../../shared";


const INITIAL_VALUES = {
    name: '',
    description: '',
    permissions: []
}
export default function RoleUpdate() {

    const { useListRoleById } = useRoles()
    const { isError, isLoading, isSuccess, mutateAsync, error } = useListRoleById()
    const { id } = useParams()

    const [formData, setFormData] = useState<any>(INITIAL_VALUES)




    useEffect(() => {
        const fetchData = async () => {
            const params = { id }
            const response = await mutateAsync(params)
            setFormData(response)
            console.log(response)
        }

        fetchData().then()
    }, [id])

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'Add new role'} description={'Create new role'} />
            <Alert isError={isError} error={error} />
            <Loading loading={isLoading} />
            <Box ml={2} maxWidth={600} mt={2}>
                <Formik onSubmit={() => { }} initialValues={formData} enableReinitialize={true}>
                    <Form>
                        <NewRoleForm />
                        <PermissionSelector permissionsProp={formData.permissions} />
                        <Action />
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}
