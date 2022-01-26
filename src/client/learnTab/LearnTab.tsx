import * as React from "react";
import { Provider, Flex, Text, Header, Button, Table, TableRow, TableCell, TableBehaviorProps, tableRowBehavior, tableRowClassName, gridBehavior, gridNestedBehavior, gridCellMultipleFocusableBehavior, gridCellWithFocusableElementBehavior, renderComponent, Form, FormInput, Dialog } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
/**
 * Implementation of the learn Tab content page
 */
export const LearnTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();
    const authUsers : string[] = [];
    useEffect(() => {
        if (inTeams === true) {
            microsoftTeams.initialize()
            microsoftTeams.appInitialization.notifySuccess();
        } else {
            setEntityId("Not in Microsoft Teams");
        }
    }, [inTeams]);
    useEffect(() => {
        if (context) {
            setEntityId(context.entityId);
        }
    }, [context]);
    var user = microsoftTeams.getContext(function(teamContext) {});
    function handleRowClick(index) {
        alert(user);
    };

    const header = {
        key: "header",
        items: [
            { content: "id", key: "id" },
            { content: "Device Type", key: "type" },
            { content: "Serial Number", key: "serial" },
            { content: "Location", key: "location" },
            { content: "Ownership", key: "owner" }
        ]
    };
    const rows = [
        {
            key: 1,
            items: [
                { content: "01", key: "1-1" },
                { content: "Laptop", key: "1-2" },
                { content: "CGE-L-BFDQNH2", key: "1-3" },
                { content: "CGE-2200", key: "1-4" },
                { content: "Amado", key: "1-5" }
            ],
            onClick: () => handleRowClick(1)
        },
        {
            key: 2,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 3,
            items: [
                { content: "03", key: "2-1" },
                { content: "Tablet", key: "2-2" },
                { content: "686-HFFB-A01", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(3)
        },
        {
            key: 4,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 5,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 6,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 7,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 8,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 9,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 10,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 11,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 12,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        },
        {
            key: 13,
            items: [
                { content: "02", key: "2-1" },
                { content: "Laptop", key: "2-2" },
                { content: "CGE-L-879JH52", key: "2-3" },
                { content: "CGE-2200", key: "2-4" },
                { content: "Amado", key: "2-5" }
            ],
            onClick: () => handleRowClick(2)
        }
    ];
    /**
     * The render() method to create the UI of the tab
     */
    return (
        <Provider theme={theme}>
            <Dialog
                cancelButton = "Cancel"
                confirmButton = "CheckOut"
                content = "Are you Sure you want to check out"
                header = "Device CheckOut"
                trigger={<Table header={header} rows={rows} aria-label="Static table" />}
            />
            {/* <Table header={header} rows={rows} aria-label="Static table" /> */}
        </Provider>
    );
};
