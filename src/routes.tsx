import {createBrowserRouter} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

export const router = createBrowserRouter([
    {
        path: '/', element: <ProductsPage/>
    },
    { path: 'add', element: <AddProduct /> },
    {
        path: 'edit/:id', element: <EditProduct/>
    }
])