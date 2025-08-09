// ThemeSwitcher.jsx
'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? (
        <div className='flex rounded-full'>
          <SunIcon className="h-5 w-5 text-yellow-500" />
        </div>

      ) : (
        <div className='flex rounded-full'>
          <MoonIcon className="h-5 w-5 text-gray-800" />
        </div>
        
      )}
    </button>
  )
}

export default ThemeSwitcher