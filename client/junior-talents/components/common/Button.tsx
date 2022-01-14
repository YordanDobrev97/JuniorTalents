import {Button, Box} from '@mui/material'

export type RegisterProps = {
    title: string
}

const RegularButton = ({title}: RegisterProps) => {
    return (
        <Box textAlign='center'>
            <Button variant="contained" >{title}</Button>
        </Box>
    )
}

export default RegularButton