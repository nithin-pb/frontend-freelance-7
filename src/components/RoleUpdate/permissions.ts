export const permissions = {
    Profile: [
        "ListProfiles",
        "CreateProfiles",
        "UpdateProfiles",
        "DeleteProfiles",
        "ModifyProfileTemplate",
        "DownloadProfiles"
    ],
    User: [
        "ListUser",
        "CreateUser",
        "UpdateUser",
        "DeleteUser",
        "ChangePassword", // only applicable for other user password change
        "RoleAssignment"
    ],
    Role: [
        "ListRole",
        "CreateRole",
        "UpdateRole",
        "DeleteRole",
    ],
    Reports: [
        "ViewReports",
        "DownloadReports"
    ],
}