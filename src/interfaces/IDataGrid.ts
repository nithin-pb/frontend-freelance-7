export default interface IDataGrid {
    gridData: any[],
    fixedColumns?: any[],
    gridStyle?: object,
    frameworkComponents?: object,
    height?: string | number,
    disableTopToolBox?: boolean,
    extraComponents?: any,
    rowSelection?: 'single' | 'multiple',
    loading?: boolean,
    rowClassRules?: any
}