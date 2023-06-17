import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { Button, Dialog, TextField, Alert } from "../../shared";
import { useProfile } from '../../hooks/query'

//@ts-ignore
import noImage from '../../assets/images/no-image.jpg'

export default function ProfileImagePreviewAndUpdate(props: IProfileImagePreviewAndUpdate) {
    const { data, type, onClose, open } = { ...props }
    const { useCreateProfileUpload } = useProfile()
    const [file, setFile] = useState(null)

    const onUpdate = async () => {
        if (!file) return
        const formData = new FormData()
        formData.append('files', file)
        formData.append('userName', data.user_name)
        formData.append('imageType', type === 'logo' ? 'Logo' : 'Image')
        const imageUploadResult = await useCreateProfileUpload.mutateAsync(formData)
    }

    const onFileSelection = (e: any) => {
        setFile(e.target.files[0])
    }



    return (
        <Dialog title={`Update ${type} image`} handleClose={onClose} open={open} maxWidth={'xs'}>
            <div style={{ position: 'relative' }}>
                <img
                    src={data?.[type === 'logo' ? 'profile_logo' : 'profile_image'] || noImage}
                    alt={'logs'}
                    style={{ width: '100%', borderRadius: 10, minHeight: 50 }} />
                <div style={{ position: 'absolute', top: 8, left: 8, background: 'green', padding: '4px 16px', borderRadius: 8, color: 'white' }}>
                    <Typography>
                        Active
                    </Typography>
                </div>
            </div>

            <Box mt={2}>
                <TextField type={'file'} name={'fileUpload'} label={'Select file'} ignoreFormik={true} onChange={onFileSelection} />
            </Box>
            <Box mt={(useCreateProfileUpload.isSuccess || useCreateProfileUpload.isError) ? 2 : 0}>
                <Alert
                    isSuccess={useCreateProfileUpload.isSuccess}
                    isError={useCreateProfileUpload.isError}
                    error={useCreateProfileUpload.error}
                    successMessage={"Image Updated"}
                />
            </Box>
            <Box display={'flex'} gap={1} justifyContent={'flex-end'} mt={2}>
                <Button color={'error'} variant={'contained'} onClick={onUpdate} disabled={!file}>
                    Update
                </Button>
                <Button variant={'outlined'} onClick={onClose}>
                    Cancel
                </Button>
            </Box>

        </Dialog>
    )
}


interface IProfileImagePreviewAndUpdate {
    data: any,
    type: any,
    onClose: any,
    open: any
}