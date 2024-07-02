const { doctor_config, base_url, PHPSESSID } = require("./config");
const { search_doctor_list, confirm_appointment_time } = require("./utils");

async function run(doctor_name) {
  // 根据医生，查询一周的号
  const doctors_params = doctor_config[doctor_name];
  const { searchListParams } = doctors_params;
  const doctor_list = await search_doctor_list(searchListParams);
  const have_availableAppNum = doctor_list.filter(item => parseFloat(item.availableAppNum) > 0);
  console.log("have_availableAppNum----", have_availableAppNum);
  if (have_availableAppNum.length === 0) {
    console.log("没有可预约的号");
    return;
  }
  const request_list = have_availableAppNum.map(item => confirm_appointment_time(item.id));
  // 并发请求，我希望有一个回来就终止其他的操作
  Promise.allSettled(request_list).then(res => {
    console.log(res);
  });
}
// 定义一个新的 async 函数来调用 run 函数
async function main() {
  await run("chen-hong-bin");
}
main();
