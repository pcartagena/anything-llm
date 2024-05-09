const { getGitVersion } = require("../../endpoints/utils");
const { Telemetry } = require("../../models/telemetry");

// Telemetry is anonymized and your data is never read. This can be disabled by setting
// DISABLE_TELEMETRY=true in the `.env` of however you setup. Telemetry helps us determine use
// of how AnythingLLM is used and how to improve this product!
// You can see all Telemetry events by ctrl+f `Telemetry.sendEvent` calls to verify this claim.
async function setupTelemetry() {
  console.log(
    `\x1b[31m[TELEMETRY DISABLED]\x1b[0m Telemetry is disabled - Eff off.`
  );
  return true;
}

module.exports = setupTelemetry;
