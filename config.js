const base_url = "https://his.mobimedical.cn";
const PHPSESSID = "prver99cu4kdviqhfkl9jmu674";
// const search_api = "https://his.mobimedical.cn/index.php?&g=Weixin&m=CloudRegisterThree&a=getDocScheduleList&regType=3&deptHisId=23%7C%7CZK&docHisId=1348&districtId=63&districtCode=2";

const doctor_config = {
  "huang-qing-song": {
    searchListParams: {
      g: "Weixin",
      m: "CloudRegisterThree",
      a: "getDocScheduleList",
      regType: 3,
      deptHisId: "7||ZK",
      docHisId: 1168,
      districtId: 63,
      districtCode: 2,
    },
  },
  "chen-hong-bin": {
    searchListParams: {
      g: "Weixin",
      m: "CloudRegisterThree",
      a: "getDocScheduleList",
      regType: 3,
      deptHisId: "23||ZK",
      docHisId: 1342,
      districtId: 63,
      districtCode: 2,
    },
  },
};
module.exports = {
  base_url,
  doctor_config,
  PHPSESSID,
};

const guahao = "userId=41397566&deptHisId=23||ZK&docHisId=1343&scheduleCode=1779||236&periodScheduleCode=&scheduleDate=2024-06-30&schedulePeriod=am&startTime=10:30&endTime=11:00&queueNo=&periodCode=&schedulId=1779||236&showDeptName=皮肤科门诊&periodStr=上午&ysdThree=1&illdes=null&payMethod=";
