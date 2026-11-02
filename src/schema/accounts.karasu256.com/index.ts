/**
 * Schema entry point for `accounts.karasu256.com`'s drizzle-kit migrations:
 * better-auth's own tables plus the OAuth 2.1/OIDC authorization server
 * tables it hosts on top of better-auth. Kept separate from the full
 * `schema/index.ts` barrel so this app's migration history never picks up
 * tables owned by other apps.
 */
export {
    apiKeyPermissions,
    type ApiKeyPermission,
    type NewApiKeyPermission,
} from "../api-key-permissions";
export { apiKeys, type ApiKey, type NewApiKey } from "../api-keys";
export { accounts, type Account, type NewAccount } from "../auth-accounts";
export { jwks, type Jwk, type NewJwk } from "../auth-jwks";
export { sessions, type NewSession, type Session } from "../auth-sessions";
export {
    verifications,
    type NewVerification,
    type Verification,
} from "../auth-verifications";
export {
    firebaseUsers,
    type FirebaseUser,
    type NewFirebaseUser,
} from "../firebase-users";
export {
    oauthAccessTokens,
    type NewOAuthAccessToken,
    type OAuthAccessToken,
} from "../oauth-access-tokens";
export {
    oauthClientAssertions,
    type NewOAuthClientAssertion,
    type OAuthClientAssertion,
} from "../oauth-client-assertions";
export {
    oauthClientResources,
    type NewOAuthClientResource,
    type OAuthClientResource,
} from "../oauth-client-resources";
export {
    oauthClients,
    type NewOAuthClient,
    type OAuthClient,
} from "../oauth-clients";
export {
    oauthConsents,
    type NewOAuthConsent,
    type OAuthConsent,
} from "../oauth-consents";
export {
    oauthRefreshTokens,
    type NewOAuthRefreshToken,
    type OAuthRefreshToken,
} from "../oauth-refresh-tokens";
export {
    oauthResources,
    type NewOAuthResource,
    type OAuthResource,
} from "../oauth-resources";
export { passkeys, type NewPasskey, type Passkey } from "../passkeys";
export {
    permissions,
    type NewPermissionRow,
    type PermissionRow,
} from "../permissions";
export {
    ssoProviders,
    type NewSsoProvider,
    type SsoProvider,
} from "../sso-providers";
export { users, type NewUser, type User } from "../users";
