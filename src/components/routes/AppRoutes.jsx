import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<p>INICIO</p>} />
            <Route path={'/misViajes'} element={<p>Mis viajes</p>} />
            <Route path={'/Crear'} element={<p>Crear</p>} />
            <Route path={'/detalles/'} element={<p>Detalles</p>} />

            <Route path={'*'} element={<p>Error</p>} />
        </Routes>
    )
}

export default AppRoutes