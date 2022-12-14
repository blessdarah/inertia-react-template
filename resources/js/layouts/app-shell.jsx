import { Layout } from "antd";
import React from "react";
import { AppModalProvider } from "../hooks/app-modal";
import { AppStateProvider } from "../hooks/app-state-hook";
import LayoutContent from "./layout-content";

const AppShell = ({ children }) => {
    return (
        <AppStateProvider>
            <AppModalProvider>
                <Layout theme="light">
                    <LayoutContent>{children}</LayoutContent>
                </Layout>
            </AppModalProvider>
        </AppStateProvider>
    );
};

export default AppShell;
