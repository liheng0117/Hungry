import Loadable from '../components/Loadable'

const Login = Loadable(() => import('@/pages/login'))
const Forget = Loadable(() => import('@/pages/forget'))

export { Login, Forget }
