import { getStoreJson } from '../../util/config'
import UserUpdateInfo from '../../Pages/Admin/UserManagement/UserUpdateInfo'
import AccountSettings from '../AccountSettings/AccountSettings'

type Props = {}

const LoginInfo = (props: Props) => {
  const infoUser = getStoreJson('credentials')
  return (
    <div className="login-info col-5 ms-auto">
      <span className='login-info-nameUser'>Chào {infoUser?.taiKhoan} !</span>
      <div data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://nld.mediacdn.vn/291774122806476800/2022/3/19/20200403104047-41cb-16476717856591379514951.jpg" alt="avatar" />
        <AccountSettings />
      </div>
      <UserUpdateInfo />
    </div>
  )
}
export default LoginInfo