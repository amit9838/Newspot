import React, { useEffect, useState } from 'react'

const Settings = () => {

    const [country, setCountry] = useState("in");
    const [pageSize, setPageSize] = useState(20);
    const [language, setLanguage] = useState("english");
    const [apiKey, setApiKey] = useState('bc461573c4e14525933041aab7618283');

    useEffect(() => {
        if(localStorage==null) {
            localStorage.setItem('country',JSON.stringify(country));
            localStorage.setItem('pageSize',JSON.stringify(pageSize));
            localStorage.setItem('language',JSON.stringify(language));
            localStorage.setItem('apiKey',JSON.stringify(apiKey));
        }

        else{
            setCountry(localStorage.getItem("country"));
            setPageSize(localStorage.getItem("pageSize"));
            setLanguage(localStorage.getItem("language"));
            setLanguage(localStorage.getItem("apiKey"));
        }    
      }, [country,language,pageSize,apiKey]);



    const handleCountrySettings= (e)=> {
        setCountry(e.target.value);
        localStorage.setItem('country',e.target.value);
        console.log("country changed.")
    }

    const handlePageSizeSettings= (e)=> {
        setPageSize(e.target.value);
        localStorage.setItem('pageSize',e.target.value);
        console.log(localStorage.getItem(pageSize));
    }
    
    const handleLanguageSettings= (e)=> {
        setLanguage(e.target.value);
        localStorage.setItem('language',e.target.value);
    }
    const handleapiKeySettings= (e)=> {
        localStorage.setItem('apiKey',e.target.value);
        setApiKey(e.target.value);
    }


  return (
    <div>
         <div className="container my-3 ">
                    <div className="container w-50 border rounded mt-3 py-2">
                    <h3 className='px-2 py-1 bg-light rounded border py-auto '>Settings</h3>
                        <h5 className=''>Amit</h5>
                        <hr className='my-0 mb-3' />
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pageSize">Page Size</label>
                                <input className='form-control form-control-sm w-50'  type="number" value = {pageSize} onChange = {handlePageSizeSettings} />
                            </div>

                            
                            <div className="form-group col-md-6">
                                <label htmlFor="pageSize">Country</label>
                                <input className='form-control form-control-sm w-50'  type="text" value = {country} onChange = {handleCountrySettings} />
                                <small className="form-text text-muted">eg. India(in), USA(us)</small>      
                                {/* <select className="form-control form-control-sm w-50" onChange={handleCountrySettings}>
                                    <option value = "in">India</option>
                                    <option value = "us">USA</option>
                                    <option value = "uk">United Kingdom</option>
                                </select> */}
                            </div>

                            <div className="form-group col-md-6 mt-2">
                                <label htmlFor="pageSize">Language</label>
                                <select className="form-control form-control-sm w-50" onChange={handleLanguageSettings}>
                                    <option value = "english">English</option>
                                    <option value = "hindi">Hindi</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6 mt-2">
                                <label htmlFor="pageSize">API Key</label>
                                <input className='form-control form-control-sm'  type="text" value = {apiKey} onChange = {handleapiKeySettings} />
                                {/* <small className="form-text text-muted">{apiKey}</small>       */}
                            </div>

                        </div>

                    </div>
                </div>
            
    </div>
  )
}
export default Settings;