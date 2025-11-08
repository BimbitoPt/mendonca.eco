import { create } from 'zustand'

export const useTheme = create(() => ({
  theme: 'dark',
}))