import { Box, Typography } from "@mui/material";

import { AddNewUser } from '..'
import { DataGrid } from "../../shared"
import { columDefinition } from "./colum-def";

export default function AdminUser() {

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <Title />
            <DataGrid
                fixedColumns={columDefinition}
                gridData={data}
                extraComponents={<AddNewUser />}
            />
        </Box>
    )
}

function Title() {
    return (
        <Box p={2}>
            <Typography variant={'h5'} sx={{ fontWeight: 600 }}>
                User Management
            </Typography>
            <Typography>
                Manage and customize users
            </Typography>
        </Box>
    )
}



const data = [{
    "Id": 1,
    "FirstName": "Danell",
    "LastName": "Menel",
    "Email": "dmenel0@miitbeian.gov.cn",
    "Gender": "Female"
}, {
    "Id": 2,
    "FirstName": "Appolonia",
    "LastName": "Noweak",
    "Email": "anoweak1@symantec.com",
    "Gender": "Female"
}, {
    "Id": 3,
    "FirstName": "Laurens",
    "LastName": "Ogden",
    "Email": "logden2@cdbaby.com",
    "Gender": "Male"
}, {
    "Id": 4,
    "FirstName": "Charley",
    "LastName": "Shayes",
    "Email": "cshayes3@dedecms.com",
    "Gender": "Male"
}, {
    "Id": 5,
    "FirstName": "Shamus",
    "LastName": "Lube",
    "Email": "slube4@hp.com",
    "Gender": "Male"
}, {
    "Id": 6,
    "FirstName": "Roscoe",
    "LastName": "Davley",
    "Email": "rdavley5@unicef.org",
    "Gender": "Male"
}, {
    "Id": 7,
    "FirstName": "Moises",
    "LastName": "Anmore",
    "Email": "manmore6@dyndns.org",
    "Gender": "Male"
}, {
    "Id": 8,
    "FirstName": "Frank",
    "LastName": "Elwood",
    "Email": "felwood7@nydailynews.com",
    "Gender": "Male"
}, {
    "Id": 9,
    "FirstName": "Gregg",
    "LastName": "Wanless",
    "Email": "gwanless8@spiegel.de",
    "Gender": "Male"
}, {
    "Id": 10,
    "FirstName": "Waverley",
    "LastName": "Vellacott",
    "Email": "wvellacott9@independent.co.uk",
    "Gender": "Male"
}
]