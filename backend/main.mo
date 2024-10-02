import Text "mo:base/Text";

actor Translator {
    // Mock API key (in a real scenario, this should be securely stored)
    stable let apiKey : Text = "mock_api_key_12345";

    public query func getApiKey() : async Text {
        apiKey
    };
}
