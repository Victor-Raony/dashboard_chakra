import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

import { useRouter } from "next/router";

interface SidebarDrawerProviderProps{
  children:ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
  const disclosure = useDisclosure()
  
  //Para fechar a sidebar ao redirecionar
  const router = useRouter()
  useEffect(() => { 
    disclosure.onClose()
  }, [router.asPath])
  // Para fechar a sidebar ao redirecionar
  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)