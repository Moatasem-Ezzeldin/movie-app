import Container from "../container/Container"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Children } from "react"

const MainLayout = ( { children } ) => {
  return (
    <Container>
        <Header />
        <main className="flex-1">
            { children }
        </main>
        <Footer />
    </Container>
  )
}

export default MainLayout