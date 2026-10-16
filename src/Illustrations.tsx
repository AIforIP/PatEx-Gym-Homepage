import {useId} from 'react';

function Mechanism({x=0,y=0,scale=1}:{x?:number;y?:number;scale?:number}) {
 return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
 <path d="M8 99h102v8H8zM20 98v-9h35v9M30 89l11-37 15 5-13 32M42 52l46-33 8 11-41 29M87 20l-4-9 8-5 16 24-8 6-4-8M101 32l8 47-9 2-8-44M100 79l-5 11m14-12 7 8M95 90l-6 5m27-9 5 4"/>
 <circle cx="48" cy="53" r="8"/><circle cx="91" cy="25" r="7"/><circle cx="104" cy="78" r="5"/><circle cx="34" cy="87" r="4"/>
 <path d="M23 110h74M16 67h19m26-45 9 13M119 42v25M116 42h6m-6 25h6M8 53v30m-3-30h6m-6 30h6" strokeWidth=".6"/>
 <path d="m34 85 13-28 39-30m-31 35 35-25 9 36" strokeDasharray="3 3" strokeWidth=".55"/>
 </g>
}
export function HeroIllustration(){
 const id=useId().replace(/:/g,'');
 return <svg className="hero-illustration" viewBox="0 0 650 450" role="img" aria-labelledby={id}>
 <title id={id}>Patent application, prior-art search, evidence analysis and an evidence-grounded Office Action</title>
 <defs><marker id={id+'arrow'} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="m1 1 5 2.5L1 6" fill="none" stroke="#6e7c88" strokeWidth="1"/></marker></defs>
 <g fill="none" stroke="#dfe3e5" strokeWidth="1" opacity=".65"><path d="M225 130h368v135H225zM217 129h383l-20-15H239zM373 112V78h85v34M380 78q34-76 70 0M414 24v-9m-6 9h12M404 43h20M230 263h364M245 272h339"/>{[250,280,310,340,370,400,430,460,490,520,550,580].map(x=><path key={x} d={`M${x} 143v103m-4-103h8m-8 103h8`}/>)}</g>
 <text x="416" y="101" textAnchor="middle" fill="#b9c1c7" fontSize="15" fontFamily="Georgia">PATENT EXAMINATION</text>
 <g transform="translate(25 78) rotate(-7 83 130)">
 <rect x="7" y="-6" width="153" height="250" rx="5" fill="#f8f7f4" stroke="#d4d8dc"/>
 <rect width="160" height="252" rx="4" fill="#fffefa" stroke="#7f91a2"/>
 <text x="16" y="29" fontFamily="Georgia" fontSize="15" fill="#202832">Patent Application</text><path d="M16 42h126" stroke="#d0d5d9"/>
 <text x="16" y="61" fill="#67717a" fontSize="9" letterSpacing="1.1">TITLE &amp; ABSTRACT</text>
 {[74,84,94].map((y,i)=><path key={y} d={`M16 ${y}h${i===2?87:126}`} stroke="#d9dddf" strokeWidth="3"/>)}
 <text x="16" y="117" fill="#67717a" fontSize="9" letterSpacing="1.1">DRAWINGS</text>
 <g color="#7d8790"><Mechanism x={16} y={123} scale={.95}/></g>
 <text x="80" y="239" textAnchor="middle" fill="#9b9fa4" fontSize="8" letterSpacing="2">FIG. 1</text>
 </g>
 <path d="M194 143q45-27 84 16" fill="none" stroke="#7b8793" markerEnd={`url(#${id}arrow)`}/><text x="222" y="115" fill="#34475b" fontFamily="Georgia" fontSize="15">Search</text>
 <g transform="translate(244 172)">
 <rect x="22" y="-15" width="152" height="174" rx="5" fill="#eee5e1" stroke="#d5c4bd" transform="rotate(5 90 80)"/>
 <rect x="13" y="-6" width="152" height="174" rx="5" fill="#eef0f1" stroke="#bbc7d0" transform="rotate(-4 90 80)"/>
 <rect width="153" height="178" rx="5" fill="#fffefa" stroke="#a9b5bf"/>
 <text x="15" y="24" fill="#28323d" fontFamily="Georgia" fontSize="15">Prior Art</text><path d="M15 37h122" stroke="#d3d8dc"/>
 {[49,57,65].map((y,i)=><path key={y} d={`M15 ${y}h${i===2?77:122}`} stroke="#d7dcdf" strokeWidth="2.5"/>)}
 <g color="#86929b"><Mechanism x={18} y={72} scale={.78}/></g>
 </g>
 <path d="M414 270h39" fill="none" stroke="#6e7c88" markerEnd={`url(#${id}arrow)`}/>
 <g transform="translate(469 205) rotate(4 75 100)">
 <rect x="8" y="-11" width="153" height="192" rx="5" fill="#f0f1ef" stroke="#d1d5d7"/>
 <rect width="159" height="202" rx="5" fill="#fffefa" stroke="#879aab"/>
 <text x="16" y="30" fill="#202832" fontFamily="Georgia" fontSize="17">Office Action</text>
 <path d="M16 43h127" stroke="#d5dade"/><text x="16" y="65" fill="#66717a" fontSize="8.5" letterSpacing=".7">EVIDENCE-GROUNDED REVIEW</text>
 {[79,88,97].map(y=><path key={y} d={`M16 ${y}h126`} stroke="#d7dcdf" strokeWidth="3"/>)}
 <rect x="16" y="113" width="89" height="5" fill="#e7d5c4"/><path d="M16 127h126M16 136h126M16 145h108" stroke="#d7dcdf" strokeWidth="3"/>
 <rect x="16" y="162" width="112" height="5" fill="#c8d9d8"/><path d="M16 177h86" stroke="#d7dcdf" strokeWidth="3"/>
 </g>
 <path d="M374 368q43 34 94-6M230 339q-45 34-62-3" fill="none" stroke="#89949e" markerEnd={`url(#${id}arrow)`}/>
 <g transform="translate(250 350)" fill="none" stroke="#526678" strokeWidth="3"><circle cx="15" cy="15" r="14"/><path d="m25 26 17 19" strokeWidth="5"/></g>
 <text x="305" y="402" textAnchor="middle" fontSize="13" fill="#536371" fontFamily="Georgia">Analyze &amp; reason</text>
 <text x="325" y="441" textAnchor="middle" fontSize="8" fill="#8d9498" letterSpacing="2">ILLUSTRATIVE EXAMINATION WORKFLOW</text>
 </svg>
}
export function PatentDrawing(){return <svg viewBox="0 0 150 160" className="patent-drawing" aria-hidden="true"><rect x="17" y="4" width="116" height="151" rx="3" fill="#fffefa" stroke="#d3d7d9"/><path d="M31 21h47m-47 9h86m-86 9h69" stroke="#d6dadd" strokeWidth="3"/><g color="#8a969f"><Mechanism x={25} y={46} scale={.79}/></g></svg>}
export function EvidenceDrawing(){return <div className="evidence-drawing" aria-hidden="true"><PatentDrawing/><PatentDrawing/></div>}
export function ActionDrawing(){return <svg viewBox="0 0 150 160" className="patent-drawing" aria-hidden="true"><rect x="17" y="4" width="116" height="151" rx="3" fill="#fffefa" stroke="#d3d7d9"/><text x="31" y="25" fontSize="7" fill="#3c4348">DETAILED ACTION</text>{[39,48,57,66,88,97,106,128,137].map(y=><path key={y} d={`M31 ${y}h87`} stroke="#d6dadd" strokeWidth="3"/>)}<path d="M31 77h61" stroke="#dcc2a7" strokeWidth="4"/><path d="M31 117h80" stroke="#a7c4c6" strokeWidth="4"/></svg>}
