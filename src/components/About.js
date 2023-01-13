import React from 'react'

export default function About() {
  return ( 
    <div className="container my-3">

        <div className='container m-2 px-1 py-2 mx-auto w-50 border rounded '>
            <h3 className='mx-2 rounded bg-light px-2 py-1 border'>About Newspot</h3>
            <div className="text-container mx-2 px-2 py-1 ">
                <p className='text-muted'>
                    Newspot is ultimate platform for latest and top news. It is build using  <span className='bg-light rounded px-1'>React.js</span> and
                    uses <span className='bg-light rounded px-1'> News api</span> in the hood.
                </p>
                <p className='text-muted'>
                    Newsspot uses a temporary api, to use you own api key visit <a href="https://newsapi.org/">https://newsapi.org/</a>.
                </p>

                <h5>How to use your api key</h5>
                <ol className='text-muted'>
                    <li>Visit <a href="https://newsapi.org/">https://newsapi.org/</a>.</li>
                    <li>Login/Register on newspi.org</li>
                    <li>Goto account</li>
                    <li>Copy the api key given on the accout page.</li>
                    <li>Open <span className='bg-light rounded px-1'>Newspot</span></li>
                    <li>Go to settings</li>
                    <li>Paste your own api key in api field.</li>
                    <li>That is it.</li>
                </ol>

            </div>
        </div>
    </div>
  )
}
