import React from "react";
import Cookies from 'js-cookie'
import Script from 'next/script'
import getStranslatedString from '../lib/string'
export default class CookieConsent extends React.Component{
    constructor() {
        super();
        this.state = {
          accept: "",
          }    
          this.onAcceptAllHandler = this.onAcceptAllHandler.bind(this) 
          this.onDenyHandler = this.onDenyHandler.bind(this)    
            
    }
    onAcceptAllHandler(e){   
      this.setState({accept: "allow"}); 
      Cookies.set('CookieConsentAccept',"allow", { expires: 365 })
      Cookies.set('CookieConsentAcceptEssential',"allow", { expires: 365 })
      Cookies.set('CookieConsentAcceptAnalytics',"allow", { expires: 365 })
      Cookies.set('CookieConsentAcceptAdvertising',"allow", { expires: 365 })
    }
    onDenyHandler(e){
      this.setState({accept: "deny"});
      Cookies.set('CookieConsentAccept',"deny", { expires: 365 })
      Cookies.set('CookieConsentAcceptEssential',"deny", { expires: 365 })
      Cookies.set('CookieConsentAcceptAnalytics',"deny", { expires: 365 })
      Cookies.set('CookieConsentAcceptAdvertising',"deny", { expires: 365 })
    }
    
    componentDidMount(){
      let CookieConsentAccept = Cookies.get('CookieConsentAccept')
      if(CookieConsentAccept) this.setState({accept: CookieConsentAccept}); 
    }
    render() {
      const parse = require("html-react-parser")
      let _this = this
      let _Cookies = Cookies
       
      if(this.state.accept == "deny"){
        return (<></>)  
      }else if(this.state.accept == "allow"){
        return (<><Script src="/js/GTM.js" strategy="lazyOnload"/></>)  
      }else{
        return (<>
          <div className="bg-cascade-900 lg:text-lg text-base fixed bottom-0 left-0 z-10 lg:py-8 lg:px-16 py-4 px-6 w-full lg:flex lg:justify-between lg:items-center">
            <div className="lg:mr-32">
            <h4 className="font-light lg:text-3xl text-2xl mb-3">{_this.props.title}</h4>
            <div className="mb-3">
            {parse(_this.props.content)}
            </div>
            <div className="ConsentAcceptChoice lg:text-lg text-base">
              <input type="checkbox" onChange={()=>{}} id="ConsentAcceptChoiceEssential" checked={true} className="mr-2 w-[18px] h-[18px] align-middle"/><label htmlFor="ConsentAcceptChoiceEssential" className="mr-6">Essential</label>
              <input type="checkbox" id="ConsentAcceptChoiceAnalytics" className="mr-2 w-[18px] h-[18px] align-middle"/><label htmlFor="ConsentAcceptChoiceAnalytics" className="mr-6">Analytics</label>
              <input type="checkbox" id="ConsentAcceptChoiceAdvertising" className="mr-2 w-[18px] h-[18px] align-middle"/><label htmlFor="ConsentAcceptChoiceAdvertising">Advertising</label>
            </div>
            </div>
            <div className="flex lg:justify-center justify-start items-center lg:mt-0 mt-4">
          <button className={"border border-yellow p-3 md:min-w-[150px] min-w-[110px] md:text-lg text-base text-yellow font-medium hover:text-black hover:bg-yellow"} onClick={() => {_this.setState({accept: "allow"});
          Cookies.set('CookieConsentAccept',"allow", { expires: 365 });
          if(document.getElementById('ConsentAcceptChoiceEssential').checked){_Cookies.set('CookieConsentAcceptEssential',"allow", { expires: 365 })}else{_Cookies.set('CookieConsentAcceptEssential',"deny", { expires: 365 })};
          if(document.getElementById('ConsentAcceptChoiceAnalytics').checked){_Cookies.set('CookieConsentAcceptAnalytics',"allow", { expires: 365 })}else{_Cookies.set('CookieConsentAcceptAnalytics',"deny", { expires: 365 })};
          if(document.getElementById('ConsentAcceptChoiceAdvertising').checked){_Cookies.set('CookieConsentAcceptAdvertising',"allow", { expires: 365 })}else{_Cookies.set('CookieConsentAcceptAdvertising',"deny", { expires: 365 })};
        }}>{"Zulassen"}</button>
          <button className={"md:text-lg text-base text-yellow font-medium md:min-w-[120px] min-w-[100px] md:ml-7 ml-3 hover:text-white"} onClick={_this.onAcceptAllHandler}>{"Alle zulassen"}</button>
          <button className={"md:text-lg text-base text-yellow font-medium md:min-w-[120px] min-w-[100px] md:ml-5  ml-2 hover:text-white"} onClick={_this.onDenyHandler}>{"Alle ablehnen"}</button>
          </div>
          </div>
          </>)
      }
    }
}