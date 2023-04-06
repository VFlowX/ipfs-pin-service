const axios = require('axios');
const ipfs_endpoint = "http://ipfs:8080/ipfs"
const logger = require('../logger');
const vjx = require('./vuejx');
// const { create } = require('ipfs-http-client');
// const clientIPFS = create({ url: "http://ipfs:5001/api/v0" })

async function processFileMetadata(body) {
  let insertData;
  let metadata = {};
  try {
    metadata = await tikaExtractorFile(body.cid);
    insertData = {
      tikaMeta: metadata.metadata,
      tikaContent: metadata.content,
      tikaLanguage: metadata.language,
      ThuMucLuuTru: {
        MaDinhDanh: body.cid,
        TenThuMuc: body.name,
      }
    }
    logger.info(insertData)
    logger.info(await vjx.userCreate({
      db: 'CSDL_KHOAHOCCONGNGHE',
      collection: 'T_GiayToLuuTruSo',
      body: insertData,
    }))
  } catch (error) {
    logger.error(error);
  }
}

async function tikaExtractorFile(cid) {
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