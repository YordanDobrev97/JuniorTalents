import {Button, Box} from '@mui/material'

export type RegisterProps = {
    title: string
    onSubmit: () => void
}

const RegularButton = ({title, onSubmit}: RegisterProps) => {
    return (
        <Box textAlign='center'>
            <Button onClick={onSubmit} variant="contained" >{title}</Button>
        </Box>
    )
}

export default RegularButton