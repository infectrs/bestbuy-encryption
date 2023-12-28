import forge from 'node-forge';

const createEncryptor = (publicKeyPem) => {
  return forge.pki.publicKeyFromPem(publicKeyPem)
}

const encryptData = (encryptor, algorithm, data, keyId) => {
  const encryptedData = encryptor.encrypt(data, algorithm, {
    md: forge.md.sha1.create(),
    mgf1: {
      md: forge.md.sha1.create()
    }
  })
  const base64EncodedData = forge.util.encode64(encryptedData)
  return ["1", keyId, base64EncodedData].join(":")
}

export { createEncryptor, encryptData };
