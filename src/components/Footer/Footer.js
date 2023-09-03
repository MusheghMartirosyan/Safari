import "./Footer.css"
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return(
        <>
        <div className="footer">
            <a href="#home">SAFARI</a>
            <div>
                <h4>Top destinations</h4>
                <ul>
                    <li>Serengeti National Park</li>
                    <li>Kilimanjaro</li>
                    <li>Zanzibar</li>
                    <li>Ngorongoro Conservation Area</li>
                    <li>Lake Manyara</li>
                    <li>Lake Natron</li>
                    <li>Arusha National Park</li>
                    <li>Selous Game Reserve</li>
                    <li>Tarangire National Park</li>
                </ul>
            </div>
            <div>
                <h4>Travel information</h4>
                <ul>
                    <li>About Tanzania Safari</li>
                    <li>Contact</li>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Tanzania traveller reviews</li>
                </ul>
                <button>Book a tour</button>
            </div>
        </div>
        <div className="socials">
            <div>
                <span>© 2022 Tanzania</span>
                <span>Terms and conditions</span>
                <span>Privacy policy</span>
            </div>
            <div className="socials-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4.66723 7.00028C4.66723 5.71161 5.71161 4.66667 7.00028 4.66667C8.28895 4.66667 9.33389 5.71161 9.33389 7.00028C9.33389 8.28895 8.28895 9.33389 7.00028 9.33389C5.71161 9.33389 4.66723 8.28895 4.66723 7.00028ZM3.40572 7.00028C3.40572 8.98556 5.015 10.5948 7.00028 10.5948C8.98556 10.5948 10.5948 8.98556 10.5948 7.00028C10.5948 5.015 8.98556 3.40572 7.00028 3.40572C5.015 3.40572 3.40572 5.015 3.40572 7.00028ZM9.89711 3.2632C9.89704 3.42934 9.94624 3.59177 10.0385 3.72995C10.1307 3.86813 10.2619 3.97585 10.4154 4.03949C10.5688 4.10313 10.7377 4.11984 10.9007 4.08749C11.0637 4.05514 11.2134 3.9752 11.3309 3.85776C11.4484 3.74033 11.5285 3.59068 11.561 3.42774C11.5934 3.26481 11.5769 3.0959 11.5134 2.94237C11.4498 2.78885 11.3422 2.65761 11.2041 2.56526C11.066 2.4729 10.9036 2.42356 10.7375 2.4235H10.7371C10.5144 2.4236 10.3009 2.51209 10.1434 2.66953C9.98588 2.82698 9.8973 3.04049 9.89711 3.2632ZM4.17217 12.6983C3.48967 12.6673 3.11871 12.5536 2.87219 12.4575C2.54536 12.3303 2.31216 12.1788 2.06699 11.9339C1.82181 11.6891 1.67004 11.4561 1.54337 11.1293C1.44727 10.8829 1.33358 10.5118 1.30256 9.82929C1.26862 9.09141 1.26184 8.86975 1.26184 7.00034C1.26184 5.13093 1.26918 4.90989 1.30256 4.17138C1.33364 3.48888 1.44816 3.11854 1.54337 2.8714C1.6706 2.54457 1.82214 2.31138 2.06699 2.0662C2.31183 1.82103 2.5448 1.66926 2.87219 1.54258C3.1186 1.44648 3.48967 1.3328 4.17217 1.30177C4.91005 1.26784 5.13171 1.26106 7.00028 1.26106C8.86885 1.26106 9.09073 1.26839 9.82923 1.30177C10.5117 1.33285 10.8821 1.44738 11.1292 1.54258C11.456 1.66926 11.6892 1.82136 11.9344 2.0662C12.1796 2.31104 12.3308 2.54457 12.458 2.8714C12.5541 3.11781 12.6678 3.48888 12.6988 4.17138C12.7328 4.90989 12.7396 5.13093 12.7396 7.00034C12.7396 8.86975 12.7328 9.09079 12.6988 9.82929C12.6678 10.5118 12.5535 10.8827 12.458 11.1293C12.3308 11.4561 12.1793 11.6893 11.9344 11.9339C11.6896 12.1785 11.456 12.3303 11.1292 12.4575C10.8828 12.5536 10.5117 12.6673 9.82923 12.6983C9.09135 12.7323 8.86969 12.7391 7.00028 12.7391C5.13087 12.7391 4.90983 12.7323 4.17217 12.6983ZM4.1142 0.0423937C3.36898 0.0763311 2.85975 0.194496 2.41504 0.367543C1.95448 0.546246 1.56459 0.785992 1.17498 1.17498C0.785375 1.56397 0.546246 1.95448 0.367543 2.41504C0.194496 2.86003 0.0763311 3.36898 0.0423937 4.11421C0.00789632 4.8606 0 5.09923 0 7.00028C0 8.90133 0.00789632 9.13996 0.0423937 9.88636C0.0763311 10.6316 0.194496 11.1405 0.367543 11.5855C0.546246 12.0458 0.785431 12.4368 1.17498 12.8256C1.56453 13.2144 1.95448 13.4538 2.41504 13.633C2.86059 13.8061 3.36898 13.9242 4.1142 13.9582C4.86099 13.9921 5.09923 14.0006 7.00028 14.0006C8.90133 14.0006 9.13996 13.9927 9.88636 13.9582C10.6316 13.9242 11.1405 13.8061 11.5855 13.633C12.0458 13.4538 12.436 13.2146 12.8256 12.8256C13.2152 12.4366 13.4538 12.0458 13.633 11.5855C13.8061 11.1405 13.9248 10.6316 13.9582 9.88636C13.9921 9.1394 14 8.90133 14 7.00028C14 5.09923 13.9921 4.8606 13.9582 4.11421C13.9242 3.36893 13.8061 2.85976 13.633 2.41504C13.4538 1.95476 13.2146 1.56459 12.8256 1.17498C12.4366 0.785376 12.0458 0.546246 11.5861 0.367543C11.1405 0.194496 10.6316 0.075771 9.88692 0.0423937C9.14052 0.00845634 8.90189 0 7.00084 0C5.09979 0 4.86099 0.00789632 4.1142 0.0423937Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5.71912 15.5002L6.21911 15.5002V15.0002V9.11413H7.86267H8.30233L8.35856 8.67808L8.67948 6.18932L8.7522 5.62537H8.18359H6.21911V4.53638C6.21911 4.19752 6.27241 4.05177 6.33082 3.98239C6.373 3.9323 6.50252 3.82475 6.95257 3.82475H6.9528L8.27069 3.82414L8.77046 3.82391V3.32414V1.09823V0.660125L8.33615 0.602568C8.08337 0.56907 7.27893 0.500275 6.35007 0.500275C5.29855 0.500275 4.36133 0.822879 3.68556 1.49079C3.00825 2.16024 2.6491 3.12166 2.6491 4.29002V5.62544H1H0.5V6.12544V8.6142V9.1142H1H2.64903V15.0003V15.5003L3.14905 15.5003L5.71912 15.5002Z" stroke="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                    <path d="M15.1632 3.14674C15.2406 2.99387 15.3071 2.83355 15.3613 2.66631L15.7643 1.42372L14.6346 2.07966C14.1846 2.34099 13.7135 2.53787 13.2092 2.66219C12.6178 2.13339 11.8238 1.81049 10.9642 1.81049C9.09384 1.81049 7.58726 3.31707 7.58726 5.18745C7.58726 5.22158 7.58765 5.25666 7.58852 5.29249C5.59492 5.03039 3.83453 4.013 2.63014 2.52707L2.16776 1.95659L1.80643 2.59587C1.52918 3.08639 1.3569 3.66527 1.3569 4.28954C1.3569 4.76669 1.45508 5.21948 1.63155 5.6294L1.33857 5.46199V6.32358V6.32368V6.32379V6.3239V6.324V6.32411V6.32421V6.32432V6.32442V6.32452V6.32463V6.32473V6.32483V6.32494V6.32504V6.32514V6.32524V6.32534V6.32544V6.32554V6.32564V6.32574V6.32584V6.32594V6.32604V6.32613V6.32623V6.32633V6.32642V6.32652V6.32662V6.32671V6.32681V6.3269V6.32699V6.32709V6.32718V6.32727V6.32737V6.32746V6.32755V6.32764V6.32774V6.32783V6.32792V6.32801V6.3281V6.32819V6.32828V6.32837V6.32845V6.32854V6.32863V6.32872V6.3288V6.32889V6.32898V6.32906V6.32915V6.32924V6.32932V6.32941V6.32949V6.32958V6.32966V6.32974V6.32983V6.32991V6.32999V6.33008V6.33016V6.33024V6.33032V6.3304V6.33048V6.33056V6.33064V6.33072V6.3308V6.33088V6.33096V6.33104V6.33112V6.3312V6.33128V6.33135V6.33143V6.33151V6.33159V6.33166V6.33174V6.33182V6.33189V6.33197V6.33204V6.33212V6.33219V6.33227V6.33234V6.33241V6.33249V6.33256V6.33264V6.33271V6.33278V6.33285V6.33293V6.333V6.33307V6.33314V6.33321V6.33328V6.33335V6.33342V6.33349V6.33356V6.33363V6.3337V6.33377V6.33384V6.33391V6.33398V6.33405V6.33412V6.33419V6.33425V6.33432V6.33439V6.33446V6.33452V6.33459V6.33466V6.33472V6.33479V6.33485V6.33492V6.33499V6.33505V6.33512V6.33518V6.33525V6.33531V6.33538V6.33544V6.3355V6.33557V6.33563V6.33569V6.33576V6.33582V6.33588V6.33595V6.33601V6.33607V6.33613V6.3362V6.33626V6.33632V6.33638V6.33644V6.3365V6.33657V6.33663V6.33669V6.33675V6.33681V6.33687V6.33693V6.33699V6.33705V6.33711V6.33717V6.33723V6.33729V6.33735V6.33741V6.33747V6.33752V6.33758V6.33764V6.3377V6.33776V6.33782V6.33787V6.33793V6.33799V6.33805V6.33811V6.33816V6.33822V6.33828V6.33834V6.33839V6.33845V6.33851V6.33856V6.33862V6.33868V6.33873V6.33879V6.33885V6.3389V6.33896V6.33901V6.33907V6.33913V6.33918V6.33924V6.33929V6.33935V6.3394V6.33946V6.33951V6.33957V6.33962V6.33968V6.33974V6.33979V6.33984V6.3399V6.33995V6.34001V6.34006V6.34012V6.34017V6.34023V6.34028V6.34034V6.34039V6.34045V6.3405V6.34055V6.34061V6.34066V6.34072V6.34077V6.34082V6.34088V6.34093V6.34099V6.34104V6.34109V6.34115V6.3412V6.34126V6.34131V6.34136V6.34142V6.34147V6.34152V6.34158V6.34163V6.34169V6.34174V6.34179V6.34185V6.3419V6.34195V6.34201V6.34206V6.34211V6.34217V6.34222V6.34228V6.34233V6.34238V6.34244V6.34249V6.34254V6.3426V6.34265V6.34271V6.34276V6.34281V6.34287V6.34292V6.34298V6.34303V6.34308V6.34314V6.34319V6.34325V6.3433V6.34335V6.34341V6.34346V6.34352V6.34357V6.34363V6.34368V6.34374V6.34379V6.34385V6.3439V6.34396V6.34401V6.34406V6.34412V6.34417V6.34423V6.34429V6.34434V6.3444V6.34445V6.34451V6.34456V6.34462V6.34467V6.34473V6.34479V6.34484V6.3449V6.34495V6.34501V6.34507V6.34512V6.34518V6.34524V6.34529V6.34535V6.34541V6.34546V6.34552V6.34558V6.34564V6.34569V6.34575V6.34581V6.34587V6.34593V6.34598V6.34604V6.3461V6.34616V6.34622V6.34628V6.34633V6.34639V6.34645V6.34651V6.34657V6.34663V6.34669V6.34675V6.34681V6.34687V6.34693V6.34699V6.34705V6.34711V6.34717V6.34723V6.3473V6.34736V6.34742V6.34748V6.34754V6.3476V6.34767V6.34773V6.34779V6.34785V6.34792V6.34798V6.34804V6.34811V6.34817V6.34823V6.3483V6.34836V6.34842V6.34849V6.34855V6.34862V6.34868V6.34875V6.34881V6.34888V6.34895V6.34901V6.34908V6.34914V6.34921V6.34928V6.34934V6.34941V6.34948V6.34955V6.34961V6.34968V6.34975V6.34982V6.34989V6.34996V6.35003V6.3501V6.35017V6.35023V6.35031V6.35038V6.35045V6.35052V6.35059V6.35066V6.35073V6.3508V6.35087V6.35095V6.35102V6.35109V6.35116V6.35124V6.35131V6.35139V6.35146V6.35153V6.35161V6.35168V6.35176V6.35183V6.35191V6.35198V6.35206V6.35214V6.35221V6.35229V6.35237V6.35245V6.35252V6.3526V6.35268V6.35276V6.35284V6.35292V6.353V6.35308V6.35316V6.35324V6.35332V6.3534V6.35348V6.35356V6.35364V6.35372V6.35381V6.35389V6.35397V6.35406V6.35414V6.35422V6.35431V6.35439V6.35448V6.35456V6.35465V6.35474V6.35482V6.35491V6.355V6.35508V6.35517V6.35526V6.35535V6.35543V6.35552V6.35561V6.3557V6.35579V6.35588V6.35597V6.35606V6.35616V6.35625V6.35634V6.35643V6.35653V6.35662V6.35671V6.35681V6.3569V6.35699V6.35709V6.35718V6.35728V6.35738V6.35747V6.35757V6.35767V6.35776V6.35786V6.35796V6.35806V6.35816V6.35826V6.35836V6.35846V6.35856V6.35866V6.35876V6.35886V6.35897V6.35907V6.35917V6.35928V6.35938V6.35948V6.35959V6.35969V6.3598V6.3599V6.36001V6.36012V6.36022C1.33857 7.20963 1.65202 7.98357 2.17021 8.57372L2.12287 8.56425L2.36837 9.36537C2.6514 10.2889 3.33372 11.0466 4.21751 11.4349C3.52642 11.7615 2.75566 11.944 1.94852 11.944C1.75203 11.944 1.53301 11.9275 1.31203 11.9091L1.00442 12.8307C2.3619 13.6839 3.95602 14.1901 5.68674 14.1901C11.2976 14.1901 14.3595 9.52564 14.3595 5.51729V5.51665V5.516V5.51536V5.51471V5.51407V5.51342V5.51277V5.51213V5.51148V5.51083V5.51018V5.50953V5.50888V5.50823V5.50758V5.50693V5.50628V5.50563V5.50498V5.50433V5.50367V5.50302V5.50237V5.50171V5.50106V5.5004V5.49975V5.49909V5.49844V5.49778V5.49712V5.49647V5.49581V5.49515V5.49449V5.49383V5.49318V5.49252V5.49186V5.4912V5.49054V5.48988V5.48921V5.48855V5.48789V5.48723V5.48656V5.4859V5.48524V5.48457V5.48391V5.48324V5.48258V5.48191V5.48125V5.48058V5.47992V5.47925V5.47858V5.47791V5.47725V5.47658V5.47591V5.47524V5.47457V5.4739V5.47323V5.47256V5.47189V5.47122V5.47054V5.46987V5.4692V5.46853V5.46785V5.46718V5.46651V5.46583V5.46516V5.46448V5.46381V5.46313V5.46246V5.46178V5.4611V5.46042V5.45975V5.45907V5.45839V5.45771V5.45703V5.45636V5.45568V5.455V5.45432V5.45363V5.45295V5.45227V5.45159V5.45091V5.45023V5.44954V5.44886V5.44818V5.44749V5.44681V5.44613V5.44544V5.44476V5.44407V5.44339V5.4427V5.44201V5.44133V5.44064V5.43995V5.43927V5.43858V5.43789V5.4372V5.43651V5.43582V5.43513V5.43444V5.43375V5.43306V5.43237V5.43168V5.43099V5.4303V5.42961V5.42891V5.42822V5.42753V5.42684V5.42614V5.42545V5.42475V5.42406V5.42337V5.42267V5.42197V5.42128V5.42058V5.41989V5.41919V5.41849V5.4178V5.4171V5.4164V5.4157V5.415V5.41431V5.41361V5.41291V5.41221V5.41151V5.41081V5.41011V5.40941V5.40871V5.408V5.4073V5.4066V5.4059V5.4052V5.40449V5.40379V5.40309V5.40238V5.40168V5.40153C14.8908 4.98577 15.3402 4.48006 15.6945 3.91318L16.5866 2.4859L15.1632 3.14674Z" stroke="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <path d="M6.17866 11.5151C6.27245 11.5786 6.37058 11.6365 6.4713 11.6886C6.89513 11.9076 7.40574 12.0447 7.93506 12.0447C10.9519 12.0447 12.9957 9.28291 12.9957 6.07638C12.9957 2.86391 10.367 0.500275 7.07671 0.500275C5.06306 0.500275 3.4785 1.1788 2.39643 2.26736C1.31816 3.35209 0.770508 4.81253 0.770508 6.32057C0.770508 7.04647 0.961484 7.8451 1.30211 8.53589C1.63969 9.22049 2.15376 9.85676 2.84191 10.1773M6.17866 11.5151L2.84091 10.1768C2.84124 10.1769 2.84157 10.1771 2.84191 10.1773M6.17866 11.5151L6.16911 11.5514C6.04565 12.0204 5.90836 12.5412 5.8535 12.747C5.62711 13.6231 5.01146 14.6914 4.65485 15.2645L4.45157 15.5911L4.08375 15.4783C3.89245 15.4196 3.70971 15.3495 3.54356 15.2857C3.53184 15.2812 3.5202 15.2767 3.50864 15.2723L3.22538 15.1636L3.19094 14.8622C3.11242 14.1752 3.0161 12.9637 3.22029 12.0807L3.22057 12.0795C3.29113 11.7777 3.49877 10.8977 3.7093 10.0062C3.6481 10.0912 3.55997 10.1713 3.43269 10.2214C3.1827 10.3198 2.95194 10.2289 2.84191 10.1773M6.17866 11.5151L2.84191 10.1773M4.21431 7.86893C4.18759 7.79884 4.15665 7.70964 4.12607 7.6036C4.04986 7.33937 3.97452 6.96597 3.97452 6.52036C3.97452 5.16293 4.7848 3.88681 6.06543 3.88681C6.57806 3.88681 7.00283 4.08555 7.28961 4.43563C7.56538 4.77227 7.67784 5.20396 7.67784 5.62501C7.67784 6.085 7.53569 6.62137 7.38669 7.1223C7.34115 7.2754 7.29441 7.42691 7.24806 7.57716C7.13401 7.94686 7.02234 8.30887 6.93678 8.66791L4.21431 7.86893ZM4.21431 7.86893L4.21413 7.86969L4.1133 8.29625L4.08857 8.4009C4.06407 8.2677 4.004 8.13979 3.908 8.03292C3.63075 7.68801 3.37622 7.00222 3.37622 6.3551C3.37622 4.67058 4.64142 3.03939 6.84486 3.03939C7.80971 3.03939 8.59804 3.36587 9.14269 3.89601C9.68634 4.42517 10.0175 5.18641 10.0175 6.11585C10.0175 7.22552 9.73664 8.12582 9.31166 8.73369C8.89041 9.33623 8.34056 9.64122 7.75254 9.64122C7.17564 9.64122 6.81207 9.19512 6.93676 8.66798L4.21431 7.86893Z" stroke="white"/>
                </svg>
            </div>
        </div>
        </>
    )
}

export default Footer