import { Box } from "@mui/material";

import { TitleWidget } from '../'
import { AddNewProfile } from '..'
import { DataGrid } from "../../shared";
import { columDefinition } from './colum-def'

export default function ProfileManagement() {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={'Profile'} description={'Manage Profiles'} />
            <DataGrid
                fixedColumns={columDefinition}
                gridData={dummyData}
                extraComponents={<AddNewProfile />}
                rowSelection={'multiple'}
            />
        </Box>
    )
}

const dummyData = [
    {
        id: 'test',
        name: 'Test PRofile',
        companyName: 'Amazon',
        designation: 'Software Engineer',
        phone: 985622265,
        email: 'user@amazon.com',
        websites: ['amazon.com', 'demo.com', 'test.com'],
        address: ['HN:248, xyz street, Denver'],
        linkedIn: ['https://www.instagram.com/nithin_pb_pachady', 'https://www.instagram.com/nithin_pb_pachady'],
        skype: ['https://www.instagram.com/nithin_pb_pachady'],
        instagram: ['https://www.instagram.com/nithin_pb_pachady', 'https://www.instagram.com/nithin_pb_pachady'],
        facebook: ['https://www.instagram.com/nithin_pb_pachady', 'https://www.instagram.com/nithin_pb_pachady'],
        twitter: ['https://www.instagram.com/nithin_pb_pachady', 'https://www.instagram.com/nithin_pb_pachady'],
    }
]