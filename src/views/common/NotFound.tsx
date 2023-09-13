import React from "react";
import { Button, Result } from 'antd';

const App: React.FC = () => (
    <div className="full-screen-centered">
      <Result
          status="warning"
          title="NotFound"
          subTitle="页面没有找到，请检查路径。"
          extra={
            <Button type="primary" onClick={()=>{history.back()}}>
              返回
            </Button>
          }
      />
    </div>
)


export default App;
