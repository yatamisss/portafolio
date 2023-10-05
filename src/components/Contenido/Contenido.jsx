import "../Contenido/Contenido.scss"

const Contenido = () => {
    return (
        <>
            <div className="contenido" id="skills">
                <h2 className="contenido__titulo" >Skills</h2>
                <div className="contenido__skills">
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="-52.5 0 361 361" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z" fill="#E44D26"> </path> <path d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z" fill="#F16529"> </path> <path d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z" fill="#EBEBEB"> </path> <path d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z" fill="#EBEBEB"> </path> <path d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z" fill="#000000"> </path> <path d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z" fill="#000000"> </path> <path d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z" fill="#000000"> </path> <path d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z" fill="#000000"> </path> <path d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z" fill="#FFFFFF"> </path> <path d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z" fill="#FFFFFF"> </path> </g> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"></path> <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"></path> <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"></path> <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"></path> <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"></path> <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"></path> <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"></path> <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"></path> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"> </path> <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"> </path> <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000"> </path> </g> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C"> </path> <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF"> </path> </g> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 -32 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#CD6799"> <path d="M220.281239,110.513661 C211.374863,110.560291 203.634244,112.705282 197.152641,115.876138 C194.774499,111.166485 192.396357,106.969763 191.976685,103.892168 C191.510383,100.301639 190.95082,98.1100182 191.510383,93.8200364 C192.069945,89.5300546 194.587978,83.4214936 194.541348,82.9551913 C194.494718,82.4888889 193.981785,80.2972678 188.852459,80.2506375 C183.723133,80.2040073 179.29326,81.2298725 178.780328,82.5821494 C178.267395,83.9344262 177.28816,87.0120219 176.635337,90.182878 C175.749362,94.8459016 166.376685,111.492896 161.014208,120.21275 C159.288889,116.808743 157.796721,113.824408 157.47031,111.446266 C157.004007,107.855738 156.444444,105.664117 157.004007,101.374135 C157.56357,97.084153 160.081603,90.975592 160.034973,90.5092896 C159.988342,90.0429872 159.47541,87.8513661 154.346084,87.8047359 C149.216758,87.7581056 144.786885,88.7839709 144.273953,90.1362477 C143.76102,91.4885246 143.201457,94.6593807 142.128962,97.7369763 C141.056466,100.814572 128.606193,128.606193 125.342077,135.78725 C123.663388,139.471038 122.217851,142.408743 121.191985,144.413843 L121.191985,144.413843 C121.191985,144.413843 121.145355,144.553734 121.005464,144.786885 C120.11949,146.512204 119.606557,147.444809 119.606557,147.444809 C119.606557,147.444809 119.606557,147.444809 119.606557,147.491439 C118.907104,148.750455 118.16102,149.916211 117.787978,149.916211 C117.508197,149.916211 116.995264,146.558834 117.881239,141.989071 C119.746448,132.336612 124.176321,117.321676 124.12969,116.808743 C124.12969,116.528962 124.969035,113.917668 121.238616,112.565392 C117.601457,111.213115 116.295811,113.451366 115.969399,113.451366 C115.642987,113.451366 115.409836,114.24408 115.409836,114.24408 C115.409836,114.24408 119.466667,97.3639344 107.669217,97.3639344 C100.301639,97.3639344 90.1362477,105.430965 85.1001821,112.705282 C81.929326,114.430601 75.1679417,118.11439 67.940255,122.07796 C65.189071,123.616758 62.3446266,125.155556 59.6867031,126.601093 C59.5001821,126.414572 59.3136612,126.181421 59.1271403,125.9949 C44.8582878,110.746812 18.4655738,99.9752277 19.5846995,79.5045537 C20.0043716,72.0437158 22.5690346,52.4590164 70.2717668,28.6775956 C109.534426,9.32604736 140.776685,14.6885246 146.185792,26.579235 C153.926412,43.5526412 129.445537,75.0746812 88.8772313,79.6444444 C73.3959927,81.3697632 65.2823315,75.4010929 63.2306011,73.1628415 C61.0856102,70.8313297 60.7591985,70.691439 59.9664845,71.1577413 C58.6608379,71.8571949 59.5001821,73.9555556 59.9664845,75.1679417 C61.1788707,78.3387978 66.168306,83.9344262 74.6083789,86.6856102 C82.0692168,89.1103825 100.208379,90.4626594 122.17122,81.9759563 C146.745355,72.463388 165.957013,46.0240437 160.314754,23.8746812 C154.672495,1.3989071 117.368306,-6.01530055 82.0692168,6.52823315 C61.0856102,13.989071 38.3300546,25.7398907 21.9628415,41.0346084 C2.51803279,59.2204007 -0.559562842,75.028051 0.699453552,81.6495446 C5.22258652,105.151184 37.6306011,120.445902 50.5938069,131.777049 C49.9409836,132.150091 49.3347905,132.476503 48.8218579,132.756284 C42.340255,135.97377 17.6262295,148.890346 11.4710383,162.553005 C4.47650273,178.034244 12.5901639,189.13224 17.9526412,190.624408 C34.5996357,195.240801 51.7129326,186.940619 60.8990893,173.23133 C70.0852459,159.52204 68.9661202,141.70929 64.7227687,133.548998 C64.6761384,133.455738 64.6295082,133.362477 64.5362477,133.269217 C66.2149362,132.289982 67.940255,131.264117 69.6189435,130.284882 C72.9296903,128.326412 76.1938069,126.507832 78.9916211,125.015665 C77.4061931,129.352277 76.2404372,134.528233 75.6808743,141.989071 C74.9814208,150.755556 78.571949,162.133333 83.2816029,166.609836 C85.3799636,168.568306 87.8513661,168.614936 89.4367942,168.614936 C94.9391621,168.614936 97.4105647,164.045173 100.161749,158.636066 C103.519126,152.014572 106.550091,144.320583 106.550091,144.320583 C106.550091,144.320583 102.773042,165.117668 113.031694,165.117668 C116.762113,165.117668 120.539162,160.268124 122.217851,157.796721 L122.217851,157.843352 C122.217851,157.843352 122.311111,157.703461 122.497632,157.377049 C122.870674,156.770856 123.103825,156.397814 123.103825,156.397814 L123.103825,156.304554 C124.595993,153.69326 127.95337,147.77122 132.942805,137.93224 C139.377778,125.248816 145.579599,109.394536 145.579599,109.394536 C145.579599,109.394536 146.139162,113.264845 148.051002,119.699818 C149.170128,123.476867 151.501639,127.626958 153.366849,131.637158 C151.874681,133.735519 150.942077,134.901275 150.942077,134.901275 C150.942077,134.901275 150.942077,134.901275 150.988707,134.947905 C149.776321,136.533333 148.470674,138.258652 147.025137,139.937341 C141.942441,145.999271 135.88051,152.947177 135.041166,154.952277 C134.061931,157.330419 134.295082,159.055738 136.160291,160.454645 C137.512568,161.48051 139.937341,161.620401 142.408743,161.48051 C146.978506,161.154098 150.195993,160.034973 151.781421,159.335519 C154.252823,158.449545 157.143898,157.097268 159.848452,155.092168 C164.837887,151.408379 167.868852,146.139162 167.589071,139.191257 C167.44918,135.367577 166.190164,131.543898 164.651366,127.95337 C165.117668,127.300546 165.537341,126.647723 166.003643,125.9949 C173.884153,114.477231 179.992714,101.840437 179.992714,101.840437 C179.992714,101.840437 180.552277,105.710747 182.464117,112.145719 C183.396721,115.409836 185.308561,118.953734 186.98725,122.404372 C179.573042,128.419672 175.003279,135.414208 173.37122,139.983971 C170.433515,148.470674 172.718397,152.294353 177.055009,153.180328 C179.013479,153.6 181.811293,152.667395 183.863024,151.781421 C186.474317,150.942077 189.551913,149.496539 192.489617,147.351548 C197.479053,143.66776 202.281967,138.538434 202.002186,131.590528 C201.862295,128.419672 201.022951,125.295446 199.857195,122.264481 C206.152277,119.653188 214.265938,118.20765 224.617851,119.420036 C246.813843,122.03133 251.197086,135.88051 250.357741,141.70929 C249.518397,147.538069 244.855373,150.708925 243.316576,151.68816 C241.777778,152.667395 241.264845,152.993807 241.404736,153.69326 C241.591257,154.719126 242.337341,154.672495 243.642987,154.485974 C245.461566,154.159563 255.300546,149.776321 255.720219,139.051366 C256.419672,125.342077 243.363206,110.37377 220.281239,110.513661 L220.281239,110.513661 Z M49.0550091,168.241894 C41.6874317,176.262295 31.4287796,179.29326 26.9989071,176.728597 C22.242623,173.977413 24.1078324,162.133333 33.1540984,153.64663 C38.6564663,148.470674 45.7442623,143.66776 50.4539162,140.730055 C51.5264117,140.077231 53.1118397,139.144627 55.0236794,137.978871 C55.3500911,137.79235 55.536612,137.699089 55.536612,137.699089 L55.536612,137.699089 C55.9096539,137.465938 56.2826958,137.232787 56.6557377,136.999636 C59.9664845,149.123497 56.7956284,159.801821 49.0550091,168.241894 L49.0550091,168.241894 Z M102.679781,131.777049 C100.115118,138.025501 94.7526412,154.019672 91.4885246,153.133698 C88.6907104,152.387614 86.9653916,140.263752 90.9289617,128.279781 C92.9340619,122.264481 97.1774135,115.083424 99.648816,112.28561 C103.659016,107.809107 108.088889,106.31694 109.161384,108.135519 C110.513661,110.513661 104.265209,127.860109 102.679781,131.777049 L102.679781,131.777049 Z M146.931876,152.947177 C145.859381,153.50674 144.833515,153.879781 144.367213,153.6 C144.040801,153.413479 144.833515,152.667395 144.833515,152.667395 C144.833515,152.667395 150.382514,146.698725 152.574135,143.994171 C153.833151,142.408743 155.325319,140.543534 156.910747,138.445173 L156.910747,139.051366 C156.910747,146.185792 150.009472,150.988707 146.931876,152.947177 L146.931876,152.947177 Z M181.065209,145.159927 C180.272495,144.600364 180.412386,142.735155 183.07031,136.906375 C184.096175,134.621494 186.520947,130.797814 190.671038,127.114026 C191.137341,128.606193 191.463752,130.05173 191.417122,131.404007 C191.370492,140.403643 184.935519,143.76102 181.065209,145.159927 L181.065209,145.159927 Z"> </path> </g> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml: space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f0aa3"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M115.889,151.885l-24.053-13.773 c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899 c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306 c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107 l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0 c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733 c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317 c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0 c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448 c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0 l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014 c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057 l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449 l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738 c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1 c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122 v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312 c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095 c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387 c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236 l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771 C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0 l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856 c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832 c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769 c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0 l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06 c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576 c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504 l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323z M299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202 c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231 c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717 c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294 c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333 c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408z M438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979 c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979 c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z"> </path> </g> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" fill="#000000" width="100px" height="100px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mysql</title> <path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z"></path> </g></svg>
                    </div>
                    <div className="skill">
                        <svg className="skill__svg" width="100px" height="100px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contenido;