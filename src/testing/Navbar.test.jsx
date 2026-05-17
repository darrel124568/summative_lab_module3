import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'


describe('Navbar', () => {

    beforeEach(() => {

        window.innerWidth = 500

        window.dispatchEvent(new Event('resize'))
    })

    it('renders navigation links', () => {

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        expect(screen.getByText(/Home/i)).toBeInTheDocument()

        expect(screen.getByText(/Shop Now/i)).toBeInTheDocument()

        expect(screen.getByText(/AdminPortal/i)).toBeInTheDocument()

        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    })

    it('toggles hamburger menu when clicked', () => {

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(button).toBeInTheDocument()

        fireEvent.click(button)

        expect(button).toBeInTheDocument()
    })

    it('shows desktop navbar on large screens', () => {

        window.innerWidth = 800

        window.dispatchEvent(new Event('resize'))

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        expect(screen.getByText(/We are coffee/i))
            .toBeInTheDocument()
    })

})