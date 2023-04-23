import { GridFrameworkComponentEditUser } from "./GFCEditUser"
import { GridFrameworkComponentDeleteUser } from "./GFCDeleteUser"

export const columDefinition = [
    {
        headerName: '',
        field: 'id',
        width: '50px',
        cellRendererFramework: GridFrameworkComponentEditUser,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        headerName: '',
        field: 'id',
        width: '40px',
        cellRendererFramework: GridFrameworkComponentDeleteUser,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        field: 'FirstName',
        flex: 1,
    },
    {
        field: 'LastName',
        flex: 1
    },
    {
        field: 'Email',
        flex: 1
    },
    {
        headerName: 'Gender',
        field: 'Gender',
        flex: 1
    }
]