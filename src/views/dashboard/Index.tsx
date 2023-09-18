import React from "react";
import {PageContainer,ProTable} from '@ant-design/pro-components';
import {PageHeaderProps} from "@ant-design/pro-layout/es/components/PageHeader";

const header:Partial<PageHeaderProps> = {
  title: '仪表盘',
}

const App: React.FC = () => {


  return (
      <PageContainer
          header={header}
      >
        <ProTable>

        </ProTable>
      </PageContainer>
  )
}


export default App;
