import React from 'react';
import { MantineProvider, createTheme } from "@mantine/core"
import { SideNav } from "./SideNav"
import { useAppSelector } from "@/app/lib/redux/hooks"

const theme = createTheme({})

const MantineProviderCustom = ({children} : { children: React.ReactNode}) => {
    const colorTheme = useAppSelector((state) => state.mainConfig.theme)
    return (
        <MantineProvider forceColorScheme={colorTheme} >
            <SideNav>
                {children}
            </SideNav>
        </MantineProvider>
    )
}

export default MantineProviderCustom;