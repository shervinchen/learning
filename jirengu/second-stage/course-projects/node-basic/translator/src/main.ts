// const https = require('https');
// const querystring = require('querystring');
import * as https from 'https';
import * as querystring from 'querystring';
import md5 = require('md5');
import { appId, appSecret } from './private';

type TranslateResult = {
  from: string;
  to: string;
  trans_result: {
    src: string;
    dst: string;
  }[];
  error_code?: string;
  error_msg?: string;
};

type ErrorMap = {
  [key: string]: string;
};

const errorMap: ErrorMap = {
  52003: '用户认证失败',
  52004: 'error2',
  52005: 'error3',
  unknown: '服务器繁忙',
};

export const translate = (word: string) => {
  const salt = Math.random();
  const sign = md5(appId + word + salt + appSecret);
  let from, to;
  if (/[a-zA-Z]/.test(word[0])) {
    from = 'en';
    to = 'zh';
  } else {
    from = 'zh';
    to = 'en';
  }
  const query: string = querystring.stringify({
    q: word,
    appid: appId,
    from,
    to,
    salt,
    sign,
  });
  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: `/api/trans/vip/translate?${query}`,
    method: 'GET',
  };

  const request = https.request(options, (response) => {
    const chunks: Buffer[] = [];
    response.on('data', (chunk) => {
      chunks.push(chunk);
    });
    response.on('end', () => {
      const string = Buffer.concat(chunks).toString();
      const object: TranslateResult = JSON.parse(string);
      if (object.error_code) {
        console.error(errorMap[object.error_code] || object.error_msg);
        process.exit(2);
      } else {
        object.trans_result.map((item) => console.log(item.dst));
        process.exit(0);
      }
    });
  });

  request.on('error', (e) => {
    console.error(e);
  });

  request.end();
};
