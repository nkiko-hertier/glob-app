import React, { ReactNode } from 'react'

function RootLayout({ children } : { children : ReactNode}) {
  return (
    <main>
      {/* NavBar */}
        { children }
      {/* Footer */}
    </main>
  )
}

export default RootLayout