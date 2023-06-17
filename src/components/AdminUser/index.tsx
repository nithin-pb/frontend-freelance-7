import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useUser } from "../../hooks/query";
import { Alert, Button, DataGrid } from "../../shared"
import { columDefinition } from "./colum-def";
import { Loading, TitleWidget } from "..";

export default function AdminUser() {

    const { useListUser } = useUser()
    const { isLoading, isError, data = [], isSuccess, error } = useListUser()

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'User Management'} description={'Manage and customize users'} />
            <Alert isError={isError} error={error} />
            <Loading loading={isLoading} />
            <DataGrid
                // rowClassRules={rowClassRule}
                loading={isLoading}
                rowSelection={'multiple'}
                fixedColumns={columDefinition}
                gridData={data || []}
                extraComponents={<AddNewUserButton />}
            />

        </Box>
    )
}


function AddNewUserButton() {
    return (
        <Link to={'/dashboard/user/new'}>
            <Button variant={'contained'} startIcon={<Add />}>
                Add New User
            </Button>
        </Link>

    )
}

const data = [{
    "Id": 1,
    "FirstName": "Danell",
    "LastName": "Menel",
    "Email": "dmenel0@miitbeian.gov.cn",
    "Gender": "Female",
    "Role": "Admin"
}, {
    "Id": 2,
    "FirstName": "Appolonia",
    "LastName": "Noweak",
    "Email": "anoweak1@symantec.com",
    "Gender": "Female",
    "Role": "Admin"
}, {
    "Id": 3,
    "FirstName": "Laurens",
    "LastName": "Ogden",
    "Email": "logden2@cdbaby.com",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 4,
    "FirstName": "Charley",
    "LastName": "Shayes",
    "Email": "cshayes3@dedecms.com",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 5,
    "FirstName": "Shamus",
    "LastName": "Lube",
    "Email": "slube4@hp.com",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 6,
    "FirstName": "Roscoe",
    "LastName": "Davley",
    "Email": "rdavley5@unicef.org",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 7,
    "FirstName": "Moises",
    "LastName": "Anmore",
    "Email": "manmore6@dyndns.org",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 8,
    "FirstName": "Frank",
    "LastName": "Elwood",
    "Email": "felwood7@nydailynews.com",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 9,
    "FirstName": "Gregg",
    "LastName": "Wanless",
    "Email": "gwanless8@spiegel.de",
    "Gender": "Male",
    "Role": "ReadUser"
}, {
    "Id": 10,
    "FirstName": "Waverley",
    "LastName": "Vellacott",
    "Email": "wvellacott9@independent.co.uk",
    "Gender": "Male",
    "Role": "ReadUser"
}
]