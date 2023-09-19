import React from "react";
import {ProTable} from '@ant-design/pro-components';
import {PageHeaderProps} from "@ant-design/pro-layout/es/components/PageHeader";
import {getSamplePage, Sample} from "@/api/wechat";
import {columns} from "@/views/dashboard/Columns.tsx";

const header: Partial<PageHeaderProps> = {
  title: '仪表盘',
}



const App: React.FC = () => {
  return (
      <ProTable<Sample[]>
          columns={columns}
          search={{labelWidth: "auto", collapsed: false, span: 6}}
          request={params => getSamplePage(params)}
      />
  )
}


export default App;
