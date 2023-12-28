
# Bestbuy Encryption

Helps with encryption of BestBuy


## Encryption Available

1. `activity`
2. `info`
3. `encryptedEmail`

## Soon
1. `x-grid`

## Usage

```javascript
import { emailPublicKey, emailKeyId, activityPublicKey, activityKeyId, defaultAlgorithm } from './constants.js';
import { createEncryptor, encryptData } from './encryption.js';

const emailEncryptor = createEncryptor(emailPublicKey)
const activityEncryptor = createEncryptor(activityPublicKey)

const email = "user@example.com"
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
const activityTimestamp = (new Date).toISOString()

const infoData = {
  "userAgent": userAgent
}

const activityData = {
  "mouseMoved": true,
  "keyboardUsed": true,
  "fieldReceivedInput": true,
  "fieldReceivedFocus": true,
  "timestamp": activityTimestamp,
  "email": email
}

const encryptedEmail = encryptData(emailEncryptor, defaultAlgorithm, email, emailKeyId)
const encryptedActivity = encryptData(activityEncryptor, defaultAlgorithm, JSON.stringify(activityData), activityKeyId)
const encryptedInfo = encryptData(activityEncryptor, defaultAlgorithm, JSON.stringify(infoData), activityKeyId) 

```
