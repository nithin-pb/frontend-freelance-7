import { Language, LinkedIn, Facebook, Instagram, Twitter } from "@mui/icons-material"

import { GridFrameworkComponentEditProfile } from "./GFCEditProfile"
import { GridFrameworkComponentDeleteProfile } from "./GFCDeleteProfile"
import { GridFrameworkComponentSocialMedia } from "./GFCSocialMedia"

//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'

export const columDefinition = [
    {
        headerName: '',
        field: 'id',
        width: 50,
        cellRendererFramework: GridFrameworkComponentEditProfile,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        headerName: '',
        field: 'id',
        width: 40,
        cellRendererFramework: GridFrameworkComponentDeleteProfile,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        field: 'name',
        flex: 1,
    },
    {
        field: 'companyName',
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