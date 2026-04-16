import { Outlet } from 'react-router-dom'
import Header from './components/header/header.jsx'


function Root(){
    return(
        <>
            <Header/>
            <main className='pt-24 min-h-screen'>
                <Outlet />
            </main>
            
        </>
    )
}

export default Root