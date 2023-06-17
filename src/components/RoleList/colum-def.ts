import { GridFrameworkComponentDelete } from "./GFCDelete";
import { GridFrameworkComponentEdit } from "./GFCEdit";

export const columDefinition = [
    {
        headerName: '',
        field: 'id',
        width: 45,
        cellRendererFramework: GridFrameworkComponentEdit,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        headerName: '',
        field: 'id',
        width: 45,
        cellRendererFramework: GridFrameworkComponentDelete,
        cellStyle: { padding: 0, border: 'none' }
    },
    {
        headerName: 'Name',
        field: 'Name',
    },

    {
        headerName: '# of users',
        field: 'NumberOfUsers',
    },
    {
        headerName: 'Description',
        field: 'Description',
        flex: 1
    },
]