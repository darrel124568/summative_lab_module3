import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar Navigation', () => {

    function renderNavbar() {

        render(
            <MemoryRouter initialEntries={['/']}>

                <Routes>

                    <Route path='/' element={<Navbar />}>

                    </Route>

                    <Route
                        path='/Home'
                        element={<h1>Home Page</h1>}
                    />

                    <Route
                        path='/Shop'
                        element={<h1>Shop Page</h1>}
                    />

                    <Route
                        path='/AdminPortal'
                        element={<h1>Admin Page</h1>}
                    />

                </Routes>

            </MemoryRouter>
        )
    }

    it('navigates to Home page', () => {

        renderNavbar()

        fireEvent.click(screen.getByText(/Home/i))

        expect(
            screen.getByText(/Home Page/i)
        ).toBeInTheDocument()
    })

    it('navigates to Shop page', () => {

        renderNavbar()

        fireEvent.click(screen.getByText(/Shop Now/i))

        expect(
            screen.getByText(/Shop Page/i)
        ).toBeInTheDocument()
    })

    it('navigates to Admin page', () => {

        renderNavbar()

        fireEvent.click(screen.getByText(/AdminPortal/i))

        expect(
            screen.getByText(/Admin Page/i)
        ).toBeInTheDocument()
    })

})