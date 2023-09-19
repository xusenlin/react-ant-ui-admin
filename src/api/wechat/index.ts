import { requestProTable } from "@/utils/request.ts";


export type SampleListParams = {
  bindUserPhone?: string;
  childProductLineCode?: string;
  pageNum?: number;
  pageSize?: number;
  sampleNumber?: string;
  used?: boolean;
};

export type UnbindingRecordItem = {
  opetionTime?: number;
  optionUserId?: string;
  optionUserName?: string;
};

export type Sample = {
  bloodOrderId?: string;
  bloodSamplingRemarks?: string;
  logisticsOrderId?: string;
  logisticsRemarks?: string;
  sampleNumber?: string;
  productLine?: string;
  productLineName?: string;
  childProductLine?: string;
  childProductLineName?: string;
  sampleState?: string;
  useUserPhone?: string;
  createTime?: string;
  subjectName?: string;
  detectionType?: number;
  unbindingRecordInfos?: UnbindingRecordItem[];
  subscribeBloodSamplingShopInfo?: {
    storeName?: string;
    storePhone?: string;
    storeTime?: string;
    storeAddr?: string;
  };
  userId: string;
};


export function getSamplePage(params: SampleListParams){
  return requestProTable<Sample>({
    url: "/customer-service/manage/api/oneStopSample/getSamplePage",
    method: "post",
    data: params
  });
}
