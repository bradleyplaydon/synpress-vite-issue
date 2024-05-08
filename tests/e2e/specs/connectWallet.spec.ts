import "@cypress/xpath";
import { disconnect, testId, tradeAndConnect } from "../utils";

describe("Connect", () => {
    afterEach(() => {
        disconnect();
    });

    beforeEach(() => {
        cy.visit("/trade");
    });

    it(`acceptMetamaskAccess should accept connection request to metamask`, () => {
        tradeAndConnect();
        cy.get(testId.wallet.addressLabel).first().should("have.text", "0xF36b...699C");
    });
});
