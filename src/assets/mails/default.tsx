export const DefaultJsonData = {
    counters: {
        u_column: 1,
        u_row: 1,
        u_content_text: 1,
    },
    body: {
        id: "newsletter-body",
        rows: [
            {
                id: "newsletter-row-1",
                cells: [1],
                columns: [
                    {
                        id: "newsletter-column-1",
                        contents: [
                            {
                                id: "newsletter-content-1",
                                type: "text",
                                values: {
                                    containerPadding: "10px",
                                    anchor: "",
                                    fontSize: "14px",
                                    textAlign: "left",
                                    lineHeight: "140%",
                                    linkStyle: {
                                        inherit: true,
                                        linkColor: "#0000ee",
                                        linkHoverColor: "#0000ee",
                                        linkUnderline: true,
                                        linkHoverUnderline: true,
                                    },
                                    _meta: {
                                        htmlID: "u_content_text_1",
                                        htmlClassNames: "u_content_text",
                                    },
                                    selectable: true,
                                    draggable: true,
                                    duplicatable: true,
                                    deletable: true,
                                    hideable: true,
                                    text: `<p style="margin: 0px; padding: 12px 0px; line-height: 140%; text-align: center; background-color: #2c81e5; color: #ffffff;">Update your email preferences or unsubscribe <a class="link" href="https://your-newsletter-site.com/subscribe/SUBSCRIBER_ID/manage?last_resource_guid=Post%3A1f1fa556-3368-47fc-836f-efb2504dd356&post_id=1f1fa556-3368-47fc-836f-efb2504dd356" style="margin: 0px; padding: 0px; word-break: break-word; text-decoration-line: underline; text-decoration-color: #ffffff; font-style: italic; color: #ffffff;">here</a></p>
                                    <p class="copyright" style="margin: 0px; padding: 12px 0px; line-height: 140%; text-align: center; background-color: #2c81e5; color: #ffffff;">© 2024 BuzzMail Newsletter</p>
                                    <table style="color: #000000; background-color: #2c81e5;" role="none" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top">
                                                    <p style="margin: 0px; padding: 12px 0px; line-height: 140%; color: #ffffff;">New Delhi 110071, India</p>
                                                </td>
                                            </tr>
                                            <tr style="display: table-row;"></tr>
                                        </tbody>
                                    </table>
                                    <p style="line-height: 140%;"> </p>`,
                                },
                            },
                        ],
                        values: {
                            backgroundColor: "#2c81e5",
                            padding: "0px",
                            _meta: {
                                htmlID: "u_column_1",
                                htmlClassNames: "u_column",
                            },
                        },
                    },
                ],
                values: {
                    backgroundImage: {
                        fullWidth: true,
                        repeat: "no-repeat",
                        size: "custom",
                        position: "center",
                        customPosition: ["50%", "50%"],
                    },
                    padding: "0px",
                    _meta: {
                        htmlID: "u_row_1",
                        htmlClassNames: "u_row",
                    },
                    selectable: true,
                    draggable: true,
                    duplicatable: true,
                    deletable: true,
                    hideable: true,
                },
            },
        ],
        values: {
            popupPosition: "center",
            popupWidth: "600px",
            popupHeight: "auto",
            borderRadius: "10px",
            contentAlign: "center",
            contentVerticalAlign: "center",
            contentWidth: "500px",
            fontFamily: {
                label: "Arial",
                value: "arial,helvetica,sans-serif",
            },
            popupBackgroundColor: "#FFFFFF",
            popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
            popupCloseButton_position: "top-right",
            popupCloseButton_backgroundColor: "#DDDDDD",
            popupCloseButton_iconColor: "#000000",
            popupCloseButton_borderRadius: "0px",
            popupCloseButton_margin: "0px",
            popupCloseButton_action: {
                name: "close_popup",
                attrs: {
                    onClick:
                        "document.querySelector('.u-popup-container').style.display = 'none';",
                },
            },
            backgroundColor: "#e7e7e7",
            linkStyle: {
                body: true,
                linkColor: "#0000ee",
                linkHoverColor: "#0000ee",
                linkUnderline: true,
                linkHoverUnderline: true,
            },
            _meta: {
                htmlID: "u_body",
                htmlClassNames: "u_body",
            },
        },
    },
    schemaVersion: 16,
};
