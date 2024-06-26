import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard" children="Dashboard" />
        <NavLink icon={RiContactsLine} href="/users" children="Usuarios" />

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href="/forms">Fomularios</NavLink>
          <NavLink icon={RiInputMethodLine} href="/automation">Automacao</NavLink>
        </NavSection>
      </NavSection>
    </Stack>
  );
}