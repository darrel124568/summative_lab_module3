import '@testing-library/jest-dom/vitest'
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProductProvider, useProductContext } from '../context/ProductContext'
import * as FetchModule from '../customHooks/Fetch'

vi.mock('../customHooks/Fetch', () => ({
    useFetchData: vi.fn()
}))

describe('ProductContext filtering', () => {

    it('returns all drinks when query is empty', () => {

        FetchModule.useFetchData.mockReturnValue({
            data: [
                { id: 1, name: 'Latte' },
                { id: 2, name: 'Espresso' }
            ],
            loading: false,
            setData: vi.fn()
        })

        const wrapper = ({ children }) => (
            <ProductProvider>{children}</ProductProvider>
        )

        const { result } = renderHook(() => useProductContext(), { wrapper })

        expect(result.current.filteredDrinks).toHaveLength(2)
    })

    it('filters drinks by query', () => {

        FetchModule.useFetchData.mockReturnValue({
            data: [
                { id: 1, name: 'Latte' },
                { id: 2, name: 'Espresso' },
                { id: 3, name: 'Matcha Latte' }
            ],
            loading: false,
            setData: vi.fn()
        })

        const wrapper = ({ children }) => (
            <ProductProvider>{children}</ProductProvider>
        )

        const { result } = renderHook(() => useProductContext(), { wrapper })

        act(() => {
            result.current.setQuery('latte')
        })

        expect(result.current.filteredDrinks).toEqual([
            { id: 1, name: 'Latte' },
            { id: 3, name: 'Matcha Latte' }
        ])
    })
})