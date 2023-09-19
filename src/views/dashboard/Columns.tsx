import {ProColumns} from "@ant-design/pro-table";
import {Sample} from "@/api/wechat";

export const columns: ProColumns<Sample>[] = [
  {
    title: "样本编号",
    dataIndex: "sampleNumber",
  },
  {
    title: "样本状态",
    dataIndex: "sampleState",
    hideInSearch: true,
  },
  {
    title: "使用者手机号",
    dataIndex: "useUserPhone",
    hideInSearch: true,

  },
  {
    title: "子产品线名称",
    dataIndex: "childProductLineName",
  },
  {
    title: "是否已使用",
    dataIndex: "used",
    hideInTable: true,
    valueType: "select",
    fieldProps: {
      options: [
        {label: "是", value: true},
        {label: "否", value: false},
      ],
    },
  },
  {
    title: "解绑人",
    dataIndex: "unbindingRecordInfos",
    hideInSearch: true,

  },
  {
    title: "录入时间",
    dataIndex: "createTime",
    valueType: "dateTime",
    hideInSearch: true,
  },
  {
    title: "操作",
    valueType: "option",
    render: (text, record) => {
      const {
        sampleState = "",
        productLine = "",
        sampleNumber = "",
        unbindingRecordInfos = [],
        bloodOrderId = "",
        logisticsOrderId = "",
        subscribeBloodSamplingShopInfo,
        userId = ""
      } = record;
      return []
    },
  },
];
