import Loadable from '../components/Loadable'

const Login = Loadable(() => import('@/pages/login'))
const Forget = Loadable(() => import('@/pages/forget'))
const Food = Loadable(() => import('@/pages/food'))

export { Login, Forget, Food }
