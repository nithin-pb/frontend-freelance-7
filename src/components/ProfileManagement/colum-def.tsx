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
            console.log(props)
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
        headerName: 'Company Name',
        field: 'company_name',
        flex: 1
    },
    {
        field: 'phone',
        flex: 1
    },
    {
        field: 'email',
        flex: 1
    },
    {
        field: 'websites',
        width: '120px',
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<Language />} value={props.value} />
            )
        }
    },
    {
        field: 'linkedIn',
        width: 120,
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<LinkedIn />} value={props.value} />
            )
        }
    },
    {
        field: 'skype',
        width: 100,
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<img style={{ width: 17 }} src={skypeIcon} alt={'skype icon'} />} value={props.value} />
            )
        }
    },
    {
        field: 'instagram',
        width: 120,
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<Instagram />} value={props.value} />
            )
        }
    },
    {
        field: 'facebook',
        width: 120,
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<Facebook />} value={props.value} />
            )
        }
    },
    {
        field: 'twitter',
        width: 120,
        cellRendererFramework: function GFC(props: any) {
            return (
                <GridFrameworkComponentSocialMedia icon={<Twitter />} value={props.value} />
            )
        }
    }
]