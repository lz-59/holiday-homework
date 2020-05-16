import { Loadable } from '@@'

export const Reg = Loadable(() => import('@/page/reg'))
export const Login = Loadable(() => import('@/page/login'))
export const Home = Loadable(() => import('@/page/home'))