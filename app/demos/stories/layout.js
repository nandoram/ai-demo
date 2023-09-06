

'use client'
// import '@tamagui/core/reset.css'
import { useState, useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'
import config from '../../../tamagui.config'

export default function DashboardLayout({children}) {
  const [theme, setTheme] = useState('light');

  function handleDarkModePreferredChange() {
    const doesMatch = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(doesMatch ? 'dark' : 'light')
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleDarkModePreferredChange();
      window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleDarkModePreferredChange)
    }
    return () => {
      window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleDarkModePreferredChange)
    };
  }, []);

  return (
    <TamaguiProvider defaultTheme={theme} config={config}>
      {children}
    </TamaguiProvider>
  )
}