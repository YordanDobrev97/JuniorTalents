import RegularButton from '../common/Button'

import styles from '../../styles/auth.module.css'

const LoginForm  = () => {
    return (
        <div className={styles['auth-container']}>
            <form className={styles['auth-form']} action="login" method="post">
                <div className={styles['inset']}>
                    <p>
                        <input type="text" className={styles['input']} name="username" id="username" placeholder="Потребителско име" />
                    </p>
                    <p>
                        <input type="password" className={styles['input']}  name="password" id="password" placeholder="Парола" />
                    </p>
                </div>
                <RegularButton title='Вход'/>
            </form>
        </div>
    )
}

export default LoginForm