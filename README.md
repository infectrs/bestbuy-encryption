
# Bestbuy Encryption

Helps with encryption of BestBuy


## Encryption Available

1. `activity`
2. `info`
3. `encryptedEmail`
## Usage

```javascript
import { emailPublicKey, emailKeyId, activityPublicKey, activityKeyId, defaultAlgorithm } from './constants.js';
import { createEncryptor, encryptEmail, encryptActivity, encryptInfo } from './encryption.js';

const emailEncryptor = createEncryptor(emailPublicKey)
const activityEncryptor = createEncryptor(activityPublicKey)

const email = "john@example.com"
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

const encryptedEmail = encryptEmail(emailEncryptor, defaultAlgorithm, email, emailKeyId)
const encryptedActivity = encryptActivity(activityEncryptor, defaultAlgorithm, email, activityKeyId)
const encryptedInfo = encryptInfo(activityEncryptor, defaultAlgorithm, userAgent, activityKeyId) 
```
