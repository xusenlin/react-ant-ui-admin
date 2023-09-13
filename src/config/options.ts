//这里放本地的字典配置
export type OptionType = {
  name:string
  value:string|number|null
  ext?:string
}

export type OptionsType = OptionType[]


export type OptionsMapType = {
  [value: string | number]: OptionType
}

export const optionsToMap = (o: OptionsType): OptionsMapType => {//将配置转换为Map
  const map: OptionsMapType = {}
  o.forEach(r => {
    if (r.value) {
      const { name,value,ext } = r
      map[r.value] = {name,value,ext}
    }
  })
  return map
}


export const gender: OptionsType = [
  {name: "男", value: 0},
  {name: "女", value: 1},
]

export const userCategory: OptionsType = [
  {name: "药企公司", value: 2},
  {name: "医院", value: 1},
  {name: "和瑞员工", value: 3},
]
export const serviceCategory: OptionsType = [
  {name: "药企业务", value: 1},
//   {name: "中晚期/早筛", value: 2},
]


export const projectStatus: OptionsType = [
  {name: "草稿", value: "1", ext: "#f44336"},
  {name: "待开始", value: "2", ext: "#2196f3"},
  {name: "进行中", value: "3", ext: "#009688"},
  {name: "已完结", value: "4", ext: "#242424"},
]

export const userStatus: OptionsType = [
  {name: "全部", value: ""},
  {name: "启用", value: "1"},
  {name: "停用", value: "0"},
]

export const sampleState: OptionsType = [
  {name: "新建", value: 0},
  {name: "暂存", value: 3},
  {name: "癌种未核实", value: 4},
  {name: "癌种核实", value: 2},
  {name: "分析待确认", value: 10},
  {name: "分析已确认", value: 15},
  {name: "报告生成中", value: 20},
  {name: "报告已生成", value: 30},
  {name: "报告已审核", value: 35},
  {name: "报告已批准", value: 38},
  {name: "报告已完成", value: 40},
  {name: "报告生成失败", value: 98},
  {name: "重采样", value: 80},
  {name: "终止", value: 99},
]
//送检材料
export const sendTestMaterials: OptionsType = [
  {name: "静脉血(CF管)", value: "VENOUS_CF", ext: "ml"},
  {name: "静脉血(EDTA抗凝管)", value: "VENOUS_EDTA", ext: "ml"},
  {name: "白细胞", value: "WHITE_BLOOD_CELL", ext: "ml"},
  {name: "血浆", value: "PLASMA", ext: "ml"},
  {name: "胸水全液", value: "PLEURAL_FLUID", ext: "ml"},
  {name: "蜡块", value: "WAX_BLOCK", ext: "块"},
  {name: "玻片", value: "SLIDE", ext: "片"},
  {name: "蜡卷", value: "WAX_ROLL", ext: "片"},
  {name: "其他", value: "OTHER"},
]



