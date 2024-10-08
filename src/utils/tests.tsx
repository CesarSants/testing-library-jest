import { RenderOptions } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store,
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
)
