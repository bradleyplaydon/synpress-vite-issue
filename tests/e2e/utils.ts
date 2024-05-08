export function tradeAndConnect() {
    cy.visit("/trade");

    // Disable React error overlay if present
    cy.get("body").within(body => {
        if (body.find("iframe[id='webpack-dev-server-client-overlay']").length > 0) {
            cy.get("iframe").then(iframe => {
                const iframeContent = iframe.contents().find("body");
                cy.wrap(iframeContent).find("button").contains("X").click();
            });
        }
    });

    // Connect wallet
    cy.get("[data-testid='action-btn']").first().click();
    cy.xpath("//*[contains(text(),'MetaMask')]").parents("button").click();
    // quick fix as Synpress does not allow cy.isMetamaskWindowActive() to have a timeout option
    cy.wait(1000);
    cy.acceptMetamaskAccess();

    cy.changeMetamaskNetwork("polygon");
    cy.getCurrentNetwork().its("name").should("eq", "Polygon");
}

export function disconnect() {
    cy.disconnectMetamaskWalletFromAllDapps();
}


export const testId = {
    trade: {
        addTokensBtn: "[data-testid='select-tokens-btn']",
        reverseTokensButton: "[data-testid='reverse-tokens-btn']",
        wrapReverseTokensButton: "[data-testid='wrap-reverse-tokens-btn']",
        actionBtn: "[data-testid='action-btn']",
        reviewActionBtn: "[data-testid='review-action-btn']",
    },
    tradeLeg: {
        selectTokensEmptyBtn: "[data-testid='token-input-section-empty-label']",
        selectTokensNonEmptyBtn: "[data-testid='token-input-section-nonEmpty-label']",
        makerSymbols: "[data-testid='token-input-section-symbol-maker-text']",
        takerSymbols: "[data-testid='token-input-section-symbol-taker-text']",
        percentageLabel: "[data-testid='percentage-label']",
        lockBtns: "[data-testid$='-lock-btn']",
        getLockBtn: (symbol: string) => `[data-testid='${symbol}-lock-btn']`,
        amountInputs: `[data-testid$='-amount-input']`,
        getAmountInput: (symbol: string) => `[data-testid='${symbol}-amount-input']`,
        sliders: "[data-testid$='-slider']",
        getSlider: (symbol: string) => `[data-testid='${symbol}-slider']`,
        amountLabels: "[data-testid='tradeleg-amount-label']",
    },
    selectTokenModal: {
        modalContent: "[data-testid='token-select-modal']",
        rows: "[data-testid$='-token-row']",
        getRow: (symbol: string) => `[data-testid^='${symbol}-token-row']`,
        selectedTokens: "[data-testid$='-token-row-selected']",
        disabledTokens: "[data-testid$='-token-row-disabled']",
        rowSymbol: "[data-testid='token-row-symbol-text']",
        closeBtn: "[data-testid='token-select-modal-close-btn']",
        confirmBtn: "[data-testid='modal-select-tokens-btn']",
    },
    tradeDetails: {
        container: "[data-testid='details-section-container']",
        content: "[data-testid='details-section-content']",
        networkFeeRow: "[data-testid='network-fee-row']",
        willBeConvertedRow: "[data-testid='will-be-converted-row']",
        beforeNetworkFeeRow: "[data-testid='before-network-fee-row']",
        ratesRow: "[data-testid='rates-row']",
        slippageRow: "[data-testid='slippage-row']",
        toggleBtn: "[data-testid='trade-details-btn']",
    },
    errorOrWarning: {
        errorSection: "[data-testid='error-section']",
        warningSection: "[data-testid='warning-section']",
    },
    wallet: {
        connectWalletBtn: "[data-testid='connect-wallet-btn']",
        rainbowKitModal: "[aria-labelledby='rk_connect_title']",
        addressLabel: "[data-testid='wallet-address-label']",
    },
    wrap: {
        modal: "[data-testid='wrap-modal']",
        openWrapModalBtn: "[data-testid='wrap-btn']",
        wrapActionBtn: "[data-testid$='-wrap-action-btn']",
        getWrapActionBtn: (status: string) => `[data-testid$='${status}-wrap-action-btn']`,
    },
    network: {
        networkBtn: "[data-testid='network-button']",
        networkLabel: "[data-testid='network-label']",
        networkDropdownOptions: "[data-testid^='network-dropdown-option']",
        selectedNetworkDropdownOption: "[data-testid='selected-network-dropdown-option']",
    },
};
