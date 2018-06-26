
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View, Alert, TextInput, Picker, Button } from 'react-native';
import { StyleSheet } from 'react-native';
//import HTMLView from 'react-native-htmlview';
import CheckBox from 'react-native-checkbox';
import RadioButton from 'radio-button-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { WebView } from 'react-native';

export default
    class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'brand',
            res: '',
            textbox: '',
            radio: '',
            dropdown1: '',

            dropdown2: '',

            dropdown3: '',

            value1: '',

            value2: '',

            value3: '',

            data: [],

            value: 0,

            valuenew: 0,

            drop1: '',

            drop2: '',

            tabledata: '',

        }



        // var fs = require('react-native-fs');

        //working xml parsing direct xml data

        var parseString = require('react-native-xml2js').parseString;



        var xml = `

<Sections>

<Section>

<Title>Section 2</Title>

<SectionId>Section 2</SectionId>

<Alignment>Left</Alignment>

<Visible>true</Visible>

<Controls>


<Checkbox>

<FieldHeader>With regard to the list of entities that follow; since 1 January 2013 neither I nor any Member of My Family nor any entity controlled by me or a Member of My Family has: (i) acted as a director / officer / or otherwise
 received any compensation for services from any such entities; or (ii) had any direct or beneficial interest in 10% or more of any equity securities of any such entities. (The term &amp;quot;Member of My Family&amp;quot; includes any member of your family
 residing with you as well as your parents or children regardless of their residence.)</FieldHeader>

<ControlActions />

<FieldId>CheckBox1</FieldId>

<Visible>true</Visible>

<RequiredField>true</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<MaxLength>0</MaxLength>

<AppliesTo>Everyone</AppliesTo>

</Checkbox>


<Label>

<FieldLabel> 2</FieldLabel>

<FieldHeader>&lt;table border="1" cellpadding="0" cellspacing="0" width="1253"&gt;

&lt;colgroup&gt;

&lt;col&gt;

&lt;col&gt;

&lt;col&gt;

&lt;col&gt;

&lt;col&gt;

&lt;/colgroup&gt;

&lt;tbody&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;width:255px;"&gt;ABSOLUTE BUSINESS SOLUTIONS&lt;/td&gt;

&lt;td style="width:244px;"&gt;CONNECTICUT AND K ASSOCIATES LLC&lt;/td&gt;

&lt;td style="width:271px;"&gt;HEIDRICK AND STRUGGLES UK LTD&lt;/td&gt;

&lt;td style="width:251px;"&gt;MOODYS ANALYTICS&lt;/td&gt;

&lt;td style="width:233px;"&gt;SHI INTERNATIONAL CORPORATION&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ACCESSIT GROUP INC&lt;/td&gt;

&lt;td&gt;CONTINENTAL RESOURCES INC&lt;/td&gt;

&lt;td&gt;HEWITT ASSOCIATES LLC&lt;/td&gt;

&lt;td&gt;MORE DIRECT&lt;/td&gt;

&lt;td&gt;SHORE MICROSYSTEMS INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ACI GROUP INC&lt;/td&gt;

&lt;td&gt;COR STP SOLUTIONS LIMITED&lt;/td&gt;

&lt;td&gt;HEWLETT PACKARD&lt;/td&gt;

&lt;td&gt;MORNINGSTAR&lt;/td&gt;

&lt;td&gt;SINGER EQUIPMENT COMPANY&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ACTIMIZE INC&lt;/td&gt;

&lt;td&gt;CORPORATE EXECUTIVE BOARD&lt;/td&gt;

&lt;td&gt;HIGH POINT CONSULTING&lt;/td&gt;

&lt;td&gt;MSCI INC&lt;/td&gt;

&lt;td&gt;SIRIUS COMPUTER SOLUTIONS&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ACXIOM CORPORATION&lt;/td&gt;

&lt;td&gt;CORPORATE MAILING SERVICES&lt;/td&gt;

&lt;td&gt;HYATT REGENCY&lt;/td&gt;

&lt;td&gt;MULLAN CONTRACTING COMPANY&lt;/td&gt;

&lt;td&gt;SMARTSTREAM TECHNOLOGIES&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ADECCO EMPLOYMENT SERVICES&lt;/td&gt;

&lt;td&gt;COURION CORPORATION&lt;/td&gt;

&lt;td&gt;HYPERSPACE&lt;/td&gt;

&lt;td&gt;MYTHICS INC&lt;/td&gt;

&lt;td&gt;SOGETI&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ADOBE SYSTEMS&lt;/td&gt;

&lt;td&gt;CRAIN COMMUNICATIONS&lt;/td&gt;

&lt;td&gt;IBM&lt;/td&gt;

&lt;td&gt;NASDAQ OMX CORPORATE SOLUTIONS&lt;/td&gt;

&lt;td&gt;SPENCER STUART AND ASSOCIATES&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ADVISORY PLATFORM SOLUTIONS&lt;/td&gt;

&lt;td&gt;CULINART INC&lt;/td&gt;

&lt;td&gt;IDEO LLC&lt;/td&gt;

&lt;td&gt;NATIONAL PUBLIC RADIO&lt;/td&gt;

&lt;td&gt;SPLUNK INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AETNA LIFE INSURANCE COMPANY&lt;/td&gt;

&lt;td&gt;DELL&lt;/td&gt;

&lt;td&gt;IMRE LLC&lt;/td&gt;

&lt;td&gt;NATIONWIDE INVESTMENT SVCS CORP&lt;/td&gt;

&lt;td&gt;ST JOHN PROPERTIES INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ALEXANDER HANCOCK ASSOCIATES&lt;/td&gt;

&lt;td&gt;DELOITTE&lt;/td&gt;

&lt;td&gt;INFORMATICA CORPORATION&lt;/td&gt;

&lt;td&gt;NEW YORK TIMES&lt;/td&gt;

&lt;td&gt;STANDARD AND POORS&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ALLEN SYSTEMS GROUP INC&lt;/td&gt;

&lt;td&gt;DEVANEY AND ASSOCIATES&lt;/td&gt;

&lt;td&gt;INSTITUTIONAL INVESTOR LLC&lt;/td&gt;

&lt;td&gt;NEXT REV DISTRIBUTION&lt;/td&gt;

&lt;td&gt;STANDARD PARKING&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ALLIANCE TECHNOLOGY GROUP&lt;/td&gt;

&lt;td&gt;DG3 NORTH AMERICA&lt;/td&gt;

&lt;td&gt;INSTITUTIONAL SHAREHOLDER SVCS&lt;/td&gt;

&lt;td&gt;NGAI CHIN CONSTRUCTION PTE LTD&lt;/td&gt;

&lt;td&gt;STARCOMPLIANCE&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ALTEK SOLUTIONS INC&lt;/td&gt;

&lt;td&gt;DLA PIPER&lt;/td&gt;

&lt;td&gt;INTERACTIVE DATA&lt;/td&gt;

&lt;td&gt;NICE SYSTEMS INC&lt;/td&gt;

&lt;td&gt;STATE SECURITIES BOARD&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AMERICAN EXPRESS&lt;/td&gt;

&lt;td&gt;DOUBLE ENVELOPE&lt;/td&gt;

&lt;td&gt;INTERCITY VERWALTUNGS AG&lt;/td&gt;

&lt;td&gt;NYSE MARKET INC&lt;/td&gt;

&lt;td&gt;STATE STREET CORPORATION&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AMERICAN OFFICE&lt;/td&gt;

&lt;td&gt;DOW JONES AND COMPANY&lt;/td&gt;

&lt;td&gt;INTEX SOLUTIONS INC&lt;/td&gt;

&lt;td&gt;OC TANNER RECOGNITION CO&lt;/td&gt;

&lt;td&gt;STRUCTURE TONE LIMITED&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AMERITAS LIFE INSURANCE&lt;/td&gt;

&lt;td&gt;DST TECHNOLOGIES&lt;/td&gt;

&lt;td&gt;INTUIT&lt;/td&gt;

&lt;td&gt;OFFICEMAX CONTRACT INC&lt;/td&gt;

&lt;td&gt;SUCCESSFACTORS INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;ANDY HILL SPEAKS INC&lt;/td&gt;

&lt;td&gt;EAGLE INVESTMENT SYSTEMS&lt;/td&gt;

&lt;td&gt;IPC INFORMATION SYSTEMS&lt;/td&gt;

&lt;td&gt;OLIVER WYMAN&lt;/td&gt;

&lt;td&gt;SUN LIFE ASSURANCE COMPANY&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AQUENT LLC&lt;/td&gt;

&lt;td&gt;ECONOMIST NEWSPAPER LTD&lt;/td&gt;

&lt;td&gt;IRON MOUNTAIN&lt;/td&gt;

&lt;td&gt;OMGEO LLC&lt;/td&gt;

&lt;td&gt;SUNGARD&amp;amp;nbsp;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AT AND T&lt;/td&gt;

&lt;td&gt;ELEVATION CORPORATE HEALTH&lt;/td&gt;

&lt;td&gt;ITG ANALYTICS INC&lt;/td&gt;

&lt;td&gt;OMNIPOINT LLC&lt;/td&gt;

&lt;td&gt;SYBASE&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AUTONOMY INC&lt;/td&gt;

&lt;td&gt;EMC CORPORATION&lt;/td&gt;

&lt;td&gt;J WALTER THOMPSON USA&lt;/td&gt;

&lt;td&gt;ONE HERO CREATIVE INC&lt;/td&gt;

&lt;td&gt;SYSTEM SOURCE&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AXIAL360&lt;/td&gt;

&lt;td&gt;ENTERPRISE ELECTRIC CO&lt;/td&gt;

&lt;td&gt;JONES LANG LASALLE&amp;amp;nbsp;&lt;/td&gt;

&lt;td&gt;ONEAMERICA SECURITIES INC&lt;/td&gt;

&lt;td&gt;T MOBILE&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;AXIOMA INC&lt;/td&gt;

&lt;td&gt;ERNST AND YOUNG&lt;/td&gt;

&lt;td&gt;JW BOARMAN CO INC&lt;/td&gt;

&lt;td&gt;OPEN TEXT INC&lt;/td&gt;

&lt;td&gt;TAYGANPOINT CONSULTING GROUP&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BALTIMORE RAVENS LP&lt;/td&gt;

&lt;td&gt;EVENTEQ LLC&lt;/td&gt;

&lt;td&gt;KAJIMA CORPORATION&lt;/td&gt;

&lt;td&gt;OPTIMUM ASSOCIATES LLC&lt;/td&gt;

&lt;td&gt;TEKSYSTEMS INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BANK OF NEW YORK&lt;/td&gt;

&lt;td&gt;EVERYTHING EVERYWHERE LIMITED&lt;/td&gt;

&lt;td&gt;KIPLINGER WASHINGTON EDITOR&lt;/td&gt;

&lt;td&gt;ORACLE&lt;/td&gt;

&lt;td&gt;TERADATA OPERATIONS INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BARCLAYS CAPITAL INC&lt;/td&gt;

&lt;td&gt;EXPERIS IT SERVICES US LLC&lt;/td&gt;

&lt;td&gt;KNOWLEDGENT GROUP&lt;/td&gt;

&lt;td&gt;PACIFIC LIFE&lt;/td&gt;

&lt;td&gt;THOMSON REUTERS&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BARRA INC&lt;/td&gt;

&lt;td&gt;FACTSET RESEARCH SYSTEMS&lt;/td&gt;

&lt;td&gt;KORN FERRY&lt;/td&gt;

&lt;td&gt;PATH TECHNOLOGIES INC&lt;/td&gt;

&lt;td&gt;TIBCO SOFTWARE INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BCD TRAVEL&lt;/td&gt;

&lt;td&gt;FEDERAL EXPRESS CORP&lt;/td&gt;

&lt;td&gt;KPMG&lt;/td&gt;

&lt;td&gt;PRESIDIO CORPORATION&lt;/td&gt;

&lt;td&gt;TRANSAMERICA LIFE INSURANCE CO&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BEACON CONSULTING GROUP&lt;/td&gt;

&lt;td&gt;FINIX PROFESSIONAL SERVICES&lt;/td&gt;

&lt;td&gt;LAZ PARKING MID ATLANTIC&lt;/td&gt;

&lt;td&gt;PRICE MODERN INC&lt;/td&gt;

&lt;td&gt;TURNER CONSTRUCTION COMPANY&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BENE PLC&lt;/td&gt;

&lt;td&gt;FINRA&lt;/td&gt;

&lt;td&gt;LEGAL AND GENERAL ASSURANCE SOCIETY&lt;/td&gt;

&lt;td&gt;PRICEWATERHOUSECOOPERS&lt;/td&gt;

&lt;td&gt;UMBC TRAINING CENTERS&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BLOOMBERG FINANCE LP&lt;/td&gt;

&lt;td&gt;FIRST AMERICAN ADMINISTRATORS&lt;/td&gt;

&lt;td&gt;LEVEL 3 COMMUNICATIONS&lt;/td&gt;

&lt;td&gt;PROFILES PLACEMENT SERVICES&lt;/td&gt;

&lt;td&gt;UNIVERSAL MIND INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BMC SOFTWARE INC&lt;/td&gt;

&lt;td&gt;FISHNET SECURITY INC&lt;/td&gt;

&lt;td&gt;LINCOLN BENEFIT LIFE&lt;/td&gt;

&lt;td&gt;PROPHET BRAND STRATEGY INC&lt;/td&gt;

&lt;td&gt;VERINT AMERICAS INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BOSS GROUP&lt;/td&gt;

&lt;td&gt;FITCH SOLUTIONS INC&lt;/td&gt;

&lt;td&gt;LINDENMEYR MUNROE&lt;/td&gt;

&lt;td&gt;RAZORFISH LLC&lt;/td&gt;

&lt;td&gt;VERIZON&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BOSTON FINANCIAL DATA&lt;/td&gt;

&lt;td&gt;FORBES&lt;/td&gt;

&lt;td&gt;LINKLATERS LLP&lt;/td&gt;

&lt;td&gt;RED TETTEMER AND PARTNERS&lt;/td&gt;

&lt;td&gt;VISION TECHNOLOGY SERVICES&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BOX INC&lt;/td&gt;

&lt;td&gt;FORESEE RESULTS INC&lt;/td&gt;

&lt;td&gt;LIPPER INC&lt;/td&gt;

&lt;td&gt;REUTERS LIMITED&lt;/td&gt;

&lt;td&gt;VOLANTE TECHNOLOGIES INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BRIGHT HORIZONS CHILDRENS CENTERS&lt;/td&gt;

&lt;td&gt;FORRESTER RESEARCH&lt;/td&gt;

&lt;td&gt;LOGIC SOLUTIONS GROUP LLC&lt;/td&gt;

&lt;td&gt;REX SHORT HILLS SPE LLC&lt;/td&gt;

&lt;td&gt;VSS LLC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BROADRIDGE&lt;/td&gt;

&lt;td&gt;FORTUNE MAGAZINE&lt;/td&gt;

&lt;td&gt;LOGICAL DESIGN SOLUTIONS INC&lt;/td&gt;

&lt;td&gt;RGN MANAGEMENT LMTD&lt;/td&gt;

&lt;td&gt;WALT DISNEY WORLD COMPANY&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BROCK AND COMPANY&lt;/td&gt;

&lt;td&gt;FRIMA STUDIO INC&lt;/td&gt;

&lt;td&gt;MANPOWER PROFESSIONAL SERVICES&lt;/td&gt;

&lt;td&gt;RIMES TECHNOLOGIES CORPORATION&lt;/td&gt;

&lt;td&gt;WEBB MASON&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BT PORTFOLIO SERVICES LIMITED&lt;/td&gt;

&lt;td&gt;FUGENT INC&lt;/td&gt;

&lt;td&gt;MARKET PROBE INC&lt;/td&gt;

&lt;td&gt;ROBERT HALF INTERNATIONAL&lt;/td&gt;

&lt;td&gt;WEICHERT&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;BUPA INSURANCE LIMITED&lt;/td&gt;

&lt;td&gt;FUNDAMENTAL MEDIA LTD&lt;/td&gt;

&lt;td&gt;MARKIT WSO CORPORATION&lt;/td&gt;

&lt;td&gt;ROBERTSON MARKETING GROUP&lt;/td&gt;

&lt;td&gt;WESTLAND PRINTERS&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CANON SOLUTIONS AMERICA&lt;/td&gt;

&lt;td&gt;GENERAL PROJECTION SYSTEMS&lt;/td&gt;

&lt;td&gt;MAXUS COMMUNICATIONS&lt;/td&gt;

&lt;td&gt;ROCKET SOFTWARE INC&lt;/td&gt;

&lt;td&gt;WHITLOCK&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CAPTECH VENTURES INC&lt;/td&gt;

&lt;td&gt;GENESYS TELECOM&lt;/td&gt;

&lt;td&gt;MCARDLE PRINTING COMPANY&lt;/td&gt;

&lt;td&gt;RONNE AND LUNDGREN&lt;/td&gt;

&lt;td&gt;WILLIS OF MARYLAND INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CASEY QUIRK AND ASSOCIATES&lt;/td&gt;

&lt;td&gt;GENSLER AND ASSOCIATES&lt;/td&gt;

&lt;td&gt;MCCAMISH SYSTEMS&lt;/td&gt;

&lt;td&gt;ROONEY AND ASSOCIATES COMM&lt;/td&gt;

&lt;td&gt;WILSHIRE ASSOCIATES INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CHARLES RIVER DEVELOPMENT&lt;/td&gt;

&lt;td&gt;GLOBANET CONSULTING SERVICES&lt;/td&gt;

&lt;td&gt;MCKINLEY MARKETING PARTNERS&lt;/td&gt;

&lt;td&gt;RR DONNELLEY RECEIVABLES INC&lt;/td&gt;

&lt;td&gt;WOODBERRY CONSTRUCTION CO&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CHESAPEAKE BENEFIT PARTNERS&lt;/td&gt;

&lt;td&gt;GRAYBAR ELECTRIC COMPANY&lt;/td&gt;

&lt;td&gt;MERCER&lt;/td&gt;

&lt;td&gt;RSA SECURITY LLC&lt;/td&gt;

&lt;td&gt;WORKDAY&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;COGENT RESEARCH LLC&lt;/td&gt;

&lt;td&gt;HARFORD FOREST&lt;/td&gt;

&lt;td&gt;MERGIS GROUP&lt;/td&gt;

&lt;td&gt;S AND P SECURITIES INC&lt;/td&gt;

&lt;td&gt;XEROX CORP&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;COGNIZANT TECHNOLOGY&lt;/td&gt;

&lt;td&gt;HARLAND CLARK CORP&lt;/td&gt;

&lt;td&gt;MERRITT TECHNICAL ASSOCIATES&lt;/td&gt;

&lt;td&gt;SAP AMERICA INC&lt;/td&gt;

&lt;td&gt;YIELD BOOK&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;COMMAND FINANCIAL PRESS&lt;/td&gt;

&lt;td&gt;HARRIS INTERACTIVE&lt;/td&gt;

&lt;td&gt;METLIFE&lt;/td&gt;

&lt;td&gt;SCHNEIDER ELECTRIC IT USA&lt;/td&gt;

&lt;td&gt;YODLEE INC&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;COMMUNISPACE CORPORATION&lt;/td&gt;

&lt;td&gt;HARTE HANKS&lt;/td&gt;

&lt;td&gt;MICROSOFT&amp;amp;nbsp;&lt;/td&gt;

&lt;td&gt;SERVICENOW INC&lt;/td&gt;

&lt;td&gt;ZAYO GROUP&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;COMPUWARE CORPORATION&lt;/td&gt;

&lt;td&gt;HAY GROUP INC&lt;/td&gt;

&lt;td&gt;MITSUI FUDOSAN&lt;/td&gt;

&lt;td&gt;SHARED SOLUTIONS AND SERVICES&lt;/td&gt;

&lt;td&gt;&amp;amp;nbsp;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr height="20"&gt;

&lt;td height="20" style="height:20px;"&gt;CONFLUENCE TECHNOLOGIES INC&lt;/td&gt;

&lt;td&gt;HEADSTRONG SERVICES LLC&lt;/td&gt;

&lt;td&gt;MONEY&lt;/td&gt;

&lt;td&gt;SHAW INDUSTRIES INC&lt;/td&gt;

&lt;td&gt;&amp;amp;nbsp;&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;/table&gt;

</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>Hide</Action>

<SourceField>CheckBox1</SourceField>

<SourceValue>true</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>Label2</FieldId>

<Visible>true</Visible>

<RequiredField>false</RequiredField>

<Validator>String</Validator>

<MaxLength>0</MaxLength>

</Label>


</Controls>

<ControlActions />

</Section>


<Section>

<Title />

<SectionId>Entertainment</SectionId>

<Alignment>Left</Alignment>

<Visible>true</Visible>

<Controls>


<RadioButton>

<FieldHeader>&lt;p&gt;&lt;d&gt;Is this an Event of &lt;dfn class="cke-definition" data-title="Examples of events of national prominence include, but is not limited to, the Super Bowl, World Cup soccer, major golf events, grand
 slam tennis finals, Rugby World Cup, Cricket World Cup, and Olympic events. Please consult with your business unit compliance coordinator or email code_gift_reporting@client.com for guidance"&gt;National Prominence&lt;/dfn&gt;&amp;nbsp;&lt;em&gt;or one which
 does not occur in the normal course of business?&lt;/em&gt;&lt;/d&gt;&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;&lt;em&gt;dfgdfg&lt;dfn class="cke-definition" data-title="egergergregregregregreg"&gt;dfgdfg&lt;/dfn&gt;&lt;/em&gt;&amp;nbsp;&lt;/p&gt;</FieldHeader>

<ControlActions />

<FieldId>ENTNationalEvent</FieldId>

<Visible>true</Visible>

<RequiredField>true</RequiredField>

<RequiredFieldErrorMessage />

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton> 


<RadioButton>

<FieldHeader>&lt;d&gt;In the context of this entertainment, please select the option which best describes the business contact&amp;#39;s relationship to client &lt;a href="https://attachment.pdf" target="_blank"&gt;(Business
 Contact Definitions)&lt;/a&gt;.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ENTNationalEvent</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ENTNationalEvent</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>ClientType</FieldId>

<Visible>false</Visible>

<RequiredField>true</RequiredField>

<RequiredFieldErrorMessage />

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="The contact as a Broker-Dealer" />

<ListItem name="2" value="The contact as an ERISA covered Client/ Prospect/ Consultant/ Intermediary" />

<ListItem name="3" value="The contact as a Non-ERISA covered Client/ Prospect/ Consultant/ Intermediary" />

<ListItem name="5" value="The contact as a Portfolio Company" />

<ListItem name="6" value="The contact as a Vendor" />

<ListItem name="7" value="Other" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<RadioButton>

<FieldHeader>&lt;d&gt;Is Broker-Dealer payment/reimbursement required? &lt;a href="https://attachment.pdf" target="_blank"&gt;(Broker-Dealer Reimbursement Guidelines)&lt;/a&gt;&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>BDReimbursement</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<RadioButton>

<FieldHeader>&lt;d&gt;Indicate the method of broker payment.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>BDReimbursement</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>BDReimbursementMethod</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Corporate AMEX" />

<ListItem name="2" value="Personal Check" />

<ListItem name="3" value="Personal Credit Card" />

<ListItem name="4" value="TRP Check" />

<ListItem name="5" value="Other" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<Textbox>

<FieldHeader>&lt;d&gt;Please describe the method of payment (max 200 characters).&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>BDReimbursementMethod</SourceField>

<SourceValue>5</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>BDReimbursementOther</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>200</MaxLength>

<Size>50</Size>

<NumberOfLines>4</NumberOfLines>

</Textbox>


<RadioButton>

<FieldHeader>&lt;d&gt;Is this business entertainment a&amp;nbsp;meal being provided to a business contact(s) at an educational conference or in close association with a substantive business meeting (e.g., plan reviews, due diligence
 visits, investment reviews, educational sessions)?&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>ERISAType</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<Textbox>

<FieldHeader>&lt;d&gt;Please describe the relationship with the Business Contact (max 200 characters).&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>7</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>ContactTypeOther</FieldId>

<Visible>false</Visible>

<RequiredField>true</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>200</MaxLength>

<Size>50</Size>

<NumberOfLines>4</NumberOfLines>

</Textbox>


<RadioButton>

<FieldHeader>&lt;d&gt;Business Contact(s)&amp;nbsp;is a &lt;dfn class="cke-definition" data-title="This term encompasses a wide range of people, but generally includes: any officer or employee of a government, governmental agency,
 or public international organization; any person acting as a representative in an official capacity; a member of a royal family; a member of a legislative body; a political party official; a candidate for political office; and an employee of a state-owned
 business enterprise or institution. Contact the Legal Department if you are unsure whether someone you are working with qualifies as a government official."&gt;Government Official.&lt;/dfn&gt;&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>6</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>5</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>7</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntGovernmentOfficial</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<RadioButton>

<FieldHeader>&lt;d&gt;Business Contact(s) is associated with a&amp;nbsp;Retirement Plan Services&amp;nbsp;Plan Number.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntRPSPlanQuestion</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<Textbox>

<FieldHeader>&lt;d&gt;Enter&amp;nbsp;Retirement Plan Services Plan Number.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntRPSPlanQuestion</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntRPSPlanNumber</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage>Please enter a Plan Number</ValidatorErrorMessage>

<MaxLength>6</MaxLength>

<Size>50</Size>

<NumberOfLines>1</NumberOfLines>

</Textbox>


<RadioButton>

<FieldHeader>&lt;d&gt;Business Contact(s) is a part of a &lt;dfn class="cke-definition" data-title="A retirement plan initiated via collective bargaining between an employer and a union or other employee representatives. Contact
 the ERISA team within the Legal Department for guidance."&gt;Collectively Bargained Plan&lt;/dfn&gt;.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntBargainedPlan</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<RadioButton>

<FieldHeader>&lt;d&gt;Business Contact(s) is a &lt;dfn class="cke-definition" data-title="Generally regarded as a person who is an officer, agent, shop steward, employee, or other representative of a union."&gt;Union Official&lt;/dfn&gt;.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntUnionOfficial</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<RadioButton>

<FieldHeader>&lt;d&gt;Are both ERISA and non-ERISA business contacts attending this event?&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>BusinessContactERISA</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Yes" />

<ListItem name="2" value="No" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<Textbox>

<FieldHeader>&lt;d&gt;Enter the names of the&amp;nbsp;non-ERISA business contacts below. Please ensure they are also included in the &amp;#39;Entertainment Participants&amp;quot; section above&amp;nbsp;(max 200 characters).&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>BusinessContactERISA</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>BusinessContactNonERISA</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>200</MaxLength>

<Size>50</Size>

<NumberOfLines>4</NumberOfLines>

</Textbox>


<RadioButton>

<FieldHeader>&lt;d&gt;Will a client associate or Business Contact bring a guest?&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>5</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>6</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>ClientType</SourceField>

<SourceValue>7</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntGuestAttendProvided</FieldId>

<Visible>false</Visible>

<RequiredField>true</RequiredField>

<RequiredFieldErrorMessage>Please indicate a response</RequiredFieldErrorMessage>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="No Guest" />

<ListItem name="2" value="Client associate guest" />

<ListItem name="3" value="Business Contact guest" />

<ListItem name="4" value="Both a client and Business Contact guest" />

</UserDefinedList>

<DefaultValue />

</RadioButton>


<DropDownList>

<FieldHeader>&lt;d&gt;Nature of the relationship with the client associate and guest.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntGuestAttendProvided</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntGuestAttendProvided</SourceField>

<SourceValue>4</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntNonTRPAssociateGuest</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Spouse or Domestic Partner" />

<ListItem name="2" value="Child" />

<ListItem name="3" value="Other" />

</UserDefinedList>

<DefaultValue />

</DropDownList>


<Textbox>

<FieldHeader>&lt;d&gt;Please describe the relationship between the client associate and their guest (max 200 characters).&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntNonTRPAssociateGuest</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntGuestRelationshipOther</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>200</MaxLength>

<Size>50</Size>

<NumberOfLines>4</NumberOfLines>

</Textbox>


<DropDownList>

<FieldHeader>&lt;d&gt;Nature of the relationship with the Business Contact and guest.&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntGuestAttendProvided</SourceField>

<SourceValue>4</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntGuestAttendProvided</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntBusinessContactGuest</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>Integer</Validator>

<MaxLength>50</MaxLength>

<UserDefinedList>

<ListItem name="1" value="Spouse or Domestic Partner" />

<ListItem name="2" value="Child" />

<ListItem name="3" value="Other" />

</UserDefinedList>

<DefaultValue />

</DropDownList>


<Textbox>

<FieldHeader>&lt;d&gt;Please describe the relationship between the Business Contact and their guest (max 200 characters).&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>ShowAndRequiredField</Action>

<SourceField>EntBusinessContactGuest</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>ENTContactGuestOther</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>200</MaxLength>

<Size>50</Size>

<NumberOfLines>4</NumberOfLines>

</Textbox>


<AttachmentControl>

<FieldHeader>&lt;d&gt;If necessary, please attach any documentation about your&amp;nbsp;Entertainment declaration.&lt;/d&gt;

&lt;ul&gt;

&lt;li&gt;Click the magnifying glass icon to locate the document on your computer.&lt;/li&gt;

&lt;li&gt;Click the &amp;quot;Open&amp;quot; button to attach the document to this form (max size = 40mb/attachment).&lt;/li&gt;

&lt;/ul&gt;

</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>5</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>6</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>7</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>EntertainmentAttachment</FieldId>

<Visible>false</Visible>

<RequiredField>false</RequiredField>

<Validator>String</Validator>

<MaxLength>0</MaxLength>

<AttachmentRequired>false</AttachmentRequired>

<AllowMultipleAttachments>true</AllowMultipleAttachments>

<AttachmentsNeedTitle>true</AttachmentsNeedTitle>

</AttachmentControl>


<Textbox>

<FieldHeader>&lt;d&gt;myExpenses Report Key:&lt;/d&gt;</FieldHeader>

<ControlActions>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>1</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>2</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>3</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>5</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>6</SourceValue>

</UdfControlAction>

<UdfControlAction>

<Action>Show</Action>

<SourceField>ClientType</SourceField>

<SourceValue>7</SourceValue>

</UdfControlAction>

</ControlActions>

<FieldId>myExpenseReportKey</FieldId>

<Visible>true</Visible>

<RequiredField>false</RequiredField>

<RequiredFieldErrorMessage />

<Validator>String</Validator>

<ValidatorErrorMessage />

<MaxLength>10</MaxLength>

<Size>50</Size>

<NumberOfLines>1</NumberOfLines>


</Textbox>

</Controls>

<ControlActions />

</Section>

</Sections>

`;

        // var xml = '<sections><h><Checkbox>print</Checkbox></h> <h><node>gg</node><Checkbox>abc</Checkbox></h></sections>'



        var check = [];

        var textBox = [];

        var radios = [];

        var dropdownname1 = [];

        var dropdownname2 = [];

        var dropdownname3 = [];

        var dropdownvalue1 = [];

        var dropdownvalue2 = [];

        var dropdownvalue3 = [];

        var eee = [];

        var drop = [];

        var tab = [];



        parseString(xml, function (err, result) {
            tab[0] = JSON.stringify(result.Sections.Section[0].Controls[0].Label[0].FieldHeader);
           // Alert.alert(JSON.stringify(result));
           console.log('JSON data',JSON.stringify(result));
          //  console.log(' table result ', tab[0]);

            for(var key in result.Sections.Section[1].Controls[0])
              // Alert.alert(key)
                console.log('all key values in xml',key)

            // console.log('result is stored in aaa variable',JSON.stringify(result));

            var j = 0;

            for (var radioButton in result.Sections.Section[1].Controls[0]) {
                if (radioButton === 'RadioButton') {

                    for (let i = 0; i < (JSON.stringify(result.Sections.Section[1].Controls[0].RadioButton)).length; i++)

                        for (var fieldHeader in result.Sections.Section[1].Controls[0].RadioButton[i]) {

                            if (fieldHeader === 'FieldHeader') {

                                radios[j] = JSON.stringify(result.Sections.Section[1].Controls[0].RadioButton[i][fieldHeader][0])

                                j++;
                            }
                        }
                }
            };

            var k = 0;

            for (var checkbox in result.Sections.Section[0].Controls[0]) {
                if (checkbox === 'Checkbox') {

                    for (let i = 0; i < (JSON.stringify(result.Sections.Section[0].Controls[0].Checkbox)).length; i++)

                        for (var fieldHeader in result.Sections.Section[0].Controls[0].Checkbox[i]) {

                            if (fieldHeader === 'FieldHeader') {

                                check[k] = JSON.stringify(result.Sections.Section[0].Controls[0].Checkbox[i][fieldHeader][0])

                                k++;

                            }
                        }

                }

            };

            var l = 0;

            for (var text in result.Sections.Section[1].Controls[0]) {

                if (text === 'Textbox') {

                    for (let i = 0; i < (JSON.stringify(result.Sections.Section[1].Controls[0].Textbox)).length; i++)

                        for (var fieldHeader in result.Sections.Section[1].Controls[0].Textbox[i]) {

                            if (fieldHeader === 'FieldHeader') {

                                textBox[l] = JSON.stringify(result.Sections.Section[1].Controls[0].Textbox[i][fieldHeader][0])

                                l++;

                            }

                        }
                }

            };

            // var m=0;

            // for (var text in result.Sections.Section[1].Controls[0]) {


            // if (drop === 'DropDownList') {




            // for (let i = 0; i < (JSON.stringify( result.Sections.Section[1].Controls[0].DropDownList[0])).length; i++)

            // for (var fieldHeader in result.Sections.Section[1].Controls[0].DropDownList[0]) {

            // if (fieldHeader === 'FieldHeader') {


            // dropdownname1[m] = JSON.stringify( result.Sections.Section[1].Controls[0].DropDownList[0][fieldHeader][0])

            // m++;

            // }

            // for (var fieldHeader in result.Sections.Section[1].Controls[0].DropDownList[0].UserDefinedList[0]){



            // } 

            // }

            // }

            // };


            // bbb[0] = JSON.stringify(result.controls.Textbox[0].FieldHeader[0]).substr(1).slice(0, -1);



            // ddd[0] = JSON.stringify(result.controls.DropDownList[0].FieldHeader[0]).substr(4).slice(0, -5);




            // eee[0] = JSON.stringify(result.controls.DropDownList[0].UserDefinedList[0].ListItem[0].$.value).substr(1).slice(0, -1);

            // eee[1] = JSON.stringify(result.controls.DropDownList[0].UserDefinedList[0].ListItem[1].$.value).substr(1).slice(0, -1);

            // eee[2] = JSON.stringify(result.controls.DropDownList[0].UserDefinedList[0].ListItem[2].$.value).substr(1).slice(0, -1);

   
           

        });


        this.state.res = check;

        this.state.textbox = textBox;

        Alert.alert(JSON.stringify(textBox))

        this.state.radio = radios;

        //this.state.dropdown = dropdown;


         this.state.tabledata = tab[0];


    }

    handleOnPress(value) {
        this.setState({ value: value })
    }


    render() {

        // let data = [{

        // value: this.state.drop2[0],

        // }, {

        // value: this.state.drop2[1],

        // },

        // {

        // value: this.state.drop2[2],

        // }

        // ];

        var radioButton = [];

        var radioArray = this.state.radio;

        for (let i = 0; i < (radioArray).length; i++) {

            radioButton.push(

                <View key={i}>

                    <RadioButton
                        currentValue={this.state.value}
                        onPress={this.handleOnPress.bind(this)}>

                        <Text>
                            {this.state.radio[i]}</Text>

                    </RadioButton>

                </View>

            )

        }

        var checkbox = [];

        var checkboxArray = this.state.res;

        for (let j = 0; j < (checkboxArray).length; j++) {


            checkbox.push(

                <View key={j}>

                    <CheckBox label={this.state.res[j]} />

                </View>

            )

        }

        var TextBox = [];

        var TextBoxArray = this.state.textbox;

        for (let j = 0; j < (TextBoxArray).length; j++) {



            TextBox.push(

                <View key={j}>

                    <Text  >{this.state.textbox[j]}</Text>

                    <TextInput

                        style={{
                            height:
                                40, borderColor: 'gray', borderWidth:
                                1
                        }}

                        onChangeText={(text) => this.setState({ text })}

                        value={this.state.text}

                    />

                </View>

            )

        }


        return (

            <ScrollView style={{ flex: 1 }}>

                <Text>CheckBox</Text>

                {checkbox}

                <Text>Radio buttons</Text>

                {radioButton}
                <WebView style={{  marginTop: 20,
            height: 100, }} source={{ html: this.state.tabledata }} />

                <Text>Text</Text>

                {TextBox}


          

              
}

            </ScrollView>

        );
    }

}



const styles = StyleSheet.create({

    a: {

        fontWeight: '300',

        color: '#FF3366',
        // make links coloured pink

    },

    titleText: {

        fontSize: 20,

        fontWeight: 'bold',

    },

    table: {

        borderRadius: 4,

        borderWidth: 5,

        borderColor: '#d6d7da',

    }

});



AppRegistry.registerComponent('Sample', () => Sample);

