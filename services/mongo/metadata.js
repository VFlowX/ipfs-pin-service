
const axios = require('axios')
const ipfs_endpoint = "http://ipfs:8080/ipfs"
async function processFileMetadata(cid) {
  let metadata = await tekaExtractorFile(cid);
  console.log(metadata);
}

async function tekaExtractorFile(cid) {
  const config = {
    method: 'GET',
    url: `http://tika-extractor:8081/extract?url=${ipfs_endpoint}/${cid}`,
  }
  return await axios(config).then(res => {
    return res && res.data
  })
}

module.exports = {
  processFileMetadata
}