// useFetchData.test.jsx
import { renderHook, waitFor } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { useFetchData } from '../customHooks/Fetch.jsx'

describe('useFetchData', () => {

    beforeEach(() => {
        global.fetch = vi.fn()
    })

    it('fetches and stores data successfully', async () => {

        const mockData = [
            { id: 1, name: 'Latte' },
            { id: 2, name: 'Americano' }
        ]

        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockData
        })

        const { result } = renderHook(() =>
            useFetchData('http://localhost:3000/drinks')
        )

        await waitFor(() => {
            expect(result.current.data).toEqual(mockData)
        })

        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/drinks'
        )

        expect(result.current.loading).toBe(false)
    })

    it('handles fetch errors', async () => {

        global.Alert = vi.fn()

        fetch.mockResolvedValue({
            ok: false,
            status: 404
        })

        renderHook(() =>
            useFetchData('http://localhost:3000/drinks')
        )

        await waitFor(() => {
            expect(Alert).toHaveBeenCalled()
        })
    })
})