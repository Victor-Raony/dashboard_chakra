import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SiderbarDrawerContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps){
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp