const fetch = require("node-fetch");
const { base_url } = require("./config");
const { PHPSESSID } = require("./config");
function get_api(options = {}) {
  const mergedOptions = { ...options };
  const queryString = Object.entries(mergedOptions)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `${base_url}/index.php?${queryString}`;
}
async function search_doctor_list(params = {}) {
  const url = get_api(params);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Cookie: `PHPSESSID=${PHPSESSID}`,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.3(0x13030010) NetType/WIFI WindowsWechat",
    },
  }).then(res => res.json());
  if (response.code !== 200) {
    console.error(response.msg);
    return;
  }
  return response.data;
}
// 确认有号后再去确认挂号时间
function confirm_appointment_time(scheduleId) {
  return new Promise(async (resolve, reject) => {
    const url = get_api({
      g: "Weixin",
      m: "CloudRegisterThree",
      a: "getSchedulePeriod",
      scheduleId: scheduleId,
    });
    const response = await fetch(url, {
      headers: {
        Cookie: `PHPSESSID=${PHPSESSID}`,
      },
    }).then(res => res.json());
    if (response.code !== 200) {
      reject(response.msg);
    }
    resolve(response.data);
  });
}
module.exports = {
  get_api,
  search_doctor_list,
  confirm_appointment_time,
};
