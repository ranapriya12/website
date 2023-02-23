import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname != "/bali-honeymoon-tour-packages" && router.pathname != "/best-honeymoon-tour-packages-for-couples" && router.pathname != "/thailand-tour-package" && router.pathname != "/dubai-tour-package" && router.pathname != "/maldives-tour-packages" && router.pathname != "/europe-tour-packages") {
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
  else {
    return (
      <>
        <LandingHeader />
        {children}
        <LandingFooter />

      </>
    )
  }
}