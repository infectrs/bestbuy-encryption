import forge from 'node-forge';

const createEncryptor = (publicKeyPem) => {
  return forge.pki.publicKeyFromPem(publicKeyPem)
}

const encryptEmail = (encryptor, algorithm, email, emailKeyId) => {
  const encryptedData = encryptor.encrypt(email, algorithm, {
    md: forge.md.sha1.create(),
    mgf1: {
      md: forge.md.sha1.create()
    }
  })
  const base64EncodedData = forge.util.encode64(encryptedData)
  return ["1", emailKeyId, base64EncodedData].join(":")
}

const encryptActivity = (encryptor, algorithm, email, activityKeyId) => {
  const activityTimestamp = (new Date).toISOString()
  const activity = {
    "mouseMoved": true,
    "keyboardUsed": true,
    "fieldReceivedInput": true,
    "fieldReceivedFocus": true,
    "timestamp": activityTimestamp,
    "email": email
  }
  const encryptedData = encryptor.encrypt(activity, algorithm, {
    md: forge.md.sha1.create(),
    mgf1: {
      md: forge.md.sha1.create()
    }
  })
  const base64EncodedData = forge.util.encode64(encryptedData)
  return ["1", activityKeyId, base64EncodedData].join(":")
}

const encryptInfo = (encryptor, algorithm, userAgent, infoKeyId) => {
  const data = {
    "userAgent": userAgent
  }
  const encryptedData = encryptor.encrypt(data, algorithm, {
    md: forge.md.sha1.create(),
    mgf1: {
      md: forge.md.sha1.create()
    }
  })
  const base64EncodedData = forge.util.encode64(encryptedData)
  return ["1", infoKeyId, base64EncodedData].join(":")
}

export { createEncryptor, encryptEmail, encryptActivity, encryptInfo };
