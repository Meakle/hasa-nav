import React, { useState } from 'react';
import styled from 'styled-components'
import Site from './Site'
import AddSite from './AddSite'

const MoreSiteWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 573px;
  margin-top: 40px;
`

const MoreSite:React.FC = () => {

  // 持久化处理
  const localStorage = window.localStorage;
  // 初次进入, 进行初始化
  if(!localStorage.getItem('siteList')){
    localStorage.setItem('siteList', JSON.stringify(
      [
        {
          name: '方阿森的Blog',
          url: 'https://meakle.com'
        },
        {
          name: 'MDN',
          url: 'https://developer.mozilla.org/en-US/'
        },
        {
          name: 'Vue',
          url: 'https://vuejs.org/index.html'
        },
        {
          name: 'React',
          url: 'https://reactjs.org/'
        },
        {
          name: 'NodeJs',
          url: 'http://nodejs.cn/'
        },
        {
          name: 'Typescript',
          url: 'https://www.typescriptlang.org/'
        },
        {
          name: 'webpack',
          url: 'https://webpack.js.org/'
        },
        {
          name: 'babel',
          url: 'https://babeljs.io/'
        },
        {
          name: 'styled-components',
          url: 'https://styled-components.com/'
        },
        {
          name: 'Ant Design',
          url: 'https://ant.design/index-cn'
        },
        {
          name: 'Stack Overflow',
          url: 'https://stackoverflow.com/'
        },
        {
          name: 'Yarn',
          url: 'https://yarnpkg.com/'
        },
        {
          name: 'npm',
          url: 'https://www.npmjs.com/'
        },
        {
          name: '印记中文',
          url: 'https://docschina.org/'
        }
      ]
    ));
  }
  const [siteList, setSiteList] = useState(localStorage.getItem('siteList'));

  // 添加元素 感觉有点丑? 未来可能会重构把它放进组件里面, 外面就留一个简单的函数调用就行
  const handleClick = () => {
    const name = window.prompt('name');
    const url =  window.prompt('url');
    if((name?.trim() !== '' || url?.trim() !== '') && (name !== null || url !== null)){
      // 修改本地数据
      const currentSiteList = JSON.parse(localStorage.getItem('siteList') as string);
      currentSiteList.push({name, url});
      localStorage.setItem('siteList', JSON.stringify(currentSiteList));
      // 修改组件状态, 更新页面
      setSiteList(localStorage.getItem('siteList'));
    } else {
      alert('输入错误, 请重试');
    }
  };

  // 响应删除元素
  const responseRemove = () => {
    setSiteList(localStorage.getItem('siteList'));
  }

  interface SiteList {
    name: string;
    url: string;
  };

  return (
    <MoreSiteWrapper>
      {
        (JSON.parse(localStorage.getItem('siteList') as string) as Array<SiteList>).map((item)=> {
          if(item.url !== ''){
            return <Site name={item.name} url={item.url} key={Math.random()*10} responseRemove={responseRemove}/>
          }
        })
      }

      <AddSite onClick={handleClick} />
    </MoreSiteWrapper>
  );
}

export default MoreSite;
