import React,{useEffect,useState} from "react";

const Tabs = ({children,active=0}) => {
const[activeTab,setActiveTab]=useState(active);
const[tabsData,setTabsData]=useState([]);
useEffect(()=>{
    let data=[];
                    //map
    React.Children.forEach(children,(element)=>{
        if(!React.isValidElement(element))return;
        
        const {
            props:{tab,children},
        }=element;
        data.push({tab,children});
        
    });
    setTabsData(data);
},[children]);
return (
    <div>
        <ul style={{display:'flex' , justifyContent:'space-evenly'}}>
            {tabsData.map(({tab},index)=>(
                <li style={{listStyleType:"none"}}>
                    <a
                    className={`nav-link ${index === activeTab ? "active" : ""}`}
                    herf="###"
                    onClick={()=> setActiveTab(index)}
                    >
                    {tab}
                    </a>
                </li>
            ))}
        </ul>
        <div style={{textAlign:'center'}}>
            {tabsData[activeTab] && tabsData[activeTab].children}
        </div>
    </div>
  );
};

const tabPane = ({children}) => {
    return {children};
  };
Tabs.tabPane=tabPane;
export default Tabs;