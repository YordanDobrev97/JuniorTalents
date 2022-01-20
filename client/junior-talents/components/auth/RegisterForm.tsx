import { useState } from 'react'
import RegularButton from '../common/Button'

import styles from '../../styles/auth.module.css'

const RegisterForm  = () => {
    const [username, setUsername] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()

    const register = () => {
        console.log(username, password)
    }

    return (
        <div className={styles['auth-container']}>
            <form className={styles['auth-form']} action="login" method="post">
                <div className={styles['inset']}>
                    <p>
                        <input onChange={(e) => setUsername(e.target.value)} required type="text" className={styles['input']} name="username" id="username" placeholder="Потребителско име" />
                    </p>
                    <p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" className={styles['input']}  name="password" id="password" placeholder="Парола" />
                    </p>
                </div>
                <RegularButton onSubmit={register.bind(this)} title='Регистрация'/>
            </form>
        </div>
    )
}

export default RegisterForm