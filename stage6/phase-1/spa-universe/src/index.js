import { Router } from './router.js';

const router = new Router()
router.add('/', './pages/home')
router.add('/universe', './pages/universe')
router.add('/exploration', './pages/exploration')
router.add(404, './pages/404')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()