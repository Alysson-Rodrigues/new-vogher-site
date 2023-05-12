import './globals.css'
import localFont from '@next/font/local'

const baseNeueThin = localFont({ src: '/fonts/BaseNeueThin.woff', variable: '--base-neue-thin' })
const baseNeueLight = localFont({ src: '/fonts/BaseNeueLight.woff', variable: '--base-neue-light' })
const baseNeueRegular = localFont({ src: '/fonts/BaseNeueRegular.woff', variable: '--base-neue-regular' })
const baseNeueMedium = localFont({ src: '/fonts/BaseNeueMedium.woff', variable: '--base-neue-medium' })
const baseNeueBold = localFont({ src: '/fonts/BaseNeueBold.woff', variable: '--base-neue-bold' })
const baseNeueBlack = localFont({ src: '/fonts/BaseNeueBlack.woff', variable: '--base-neue-black' })
const baseNeueBlackOblique = localFont({ src: '/fonts/BaseNeueBlackOblique.woff', variable: '--base-neue-black-oblique' })
const baseNeueBoldOblique = localFont({ src: '/fonts/BaseNeueBoldOblique.woff', variable: '--base-neue-bold-oblique' })
const baseNeueLightOblique = localFont({ src: '/fonts/BaseNeueLightOblique.woff', variable: '--base-neue-light-oblique' })
const baseNeueMediumOblique = localFont({ src: '/fonts/BaseNeueMediumOblique.woff', variable: '--base-neue-medium-oblique' })


export const metadata = {
  title: 'Vogher - Your apps faster than ever.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${baseNeueThin.variable} 
    ${baseNeueLight.variable} 
    ${baseNeueRegular.variable}
    ${baseNeueMedium.variable}
    ${baseNeueBold.variable}
    ${baseNeueBlack.variable}
    ${baseNeueBlackOblique.variable}
    ${baseNeueBoldOblique.variable}
    ${baseNeueLightOblique.variable}
    ${baseNeueMediumOblique.variable}
    `}>{children}</body>
    </html>
  )
}
