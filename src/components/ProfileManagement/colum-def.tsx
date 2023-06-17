import { Language, LinkedIn, Facebook, Instagram, Twitter } from "@mui/icons-material"

import { GridFrameworkComponentEditProfile } from "./GFCEditProfile"
import { GridFrameworkComponentDeleteProfile } from "./GFCDeleteProfile"
import { GridFrameworkComponentSocialMedia } from "./GFCSocialMedia"
import { GridFrameworkComponentProfileName } from "./GFCProfileName"

//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'

export const columDefinition = [
    {
        checkboxSelection: true,
        headerName: '',
        field: 'user_name',
        width: 50,
        headerCheckboxSelection: true,
        cellRendererFramework: function GFC(props: any) {
            return null
        }
    },
    {
        headerName: '',
        field: 'user_name',
        width: 45,
        cellRendererFramework: GridFrameworkComponentEditProfile,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        headerName: '',
        field: 'user_name',
        width: 45,
        cellRendererFramework: GridFrameworkComponentDeleteProfile,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        field: 'name',
        flex: 1,
        cellRendererFramework: GridFrameworkComponentProfileName
    },
    {
        headerName: 'Username',
        field: 'user_name',
        flex: 1
    },
    {
        headerName: 'Company Name',
        field: 'company_name',
        flex: 1
    },
    {
        field: 'phone',
        valueFormatter: ({ value = '' }: { value: any }) => {
            const phoneSplit = value.split('-')
            if (phoneSplit.length > 1) {
                return `+(${phoneSplit[0]})-${phoneSplit[1]}`
            }

            return `+(00)-${value}`
        },
        flex: 1
    },
    {
        field: 'email',
        flex: 1
    },
    {
        field: 'designation',
        flex: 1
    },
    {
        headerName: 'Referred By',
        field: 'refferdBy',
        flex: 1
    },
    {
        headerName: 'Status',
        field: 'user_active',
        width: 100,
    }
]