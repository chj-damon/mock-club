import React from 'react'

const CommunityPanel = () => 
    <div className="panel">
        <div className="header">
            <span>友情社区</span>
        </div>
        <div className="content community">
            <ol className="friendship-community">
                <li>
                    <a href="https://ruby-china.org/" rel="noopener noreferrer" target="_blank">
                        <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt="Ruby China" />
                    </a>
                </li>
                <div className="sep10" />
                <li>
                    <a href="http://golangtc.com/" rel="noopener noreferrer" target="_blank">
                        <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="Golang China" />
                    </a>
                </li>
                <div className="sep10" />
                <li>
                    <a href="http://phphub.org/" rel="noopener noreferrer" target="_blank">
                        <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png" alt="PHPhub.org" />
                    </a>
                </li>
                <div className="sep10" />
                <li>
                    <a href="https://testerhome.com/" rel="noopener noreferrer" target="_blank">
                        <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="TesterHome" />
                    </a>
                </li>
            </ol>
        </div>
    </div>
export default CommunityPanel